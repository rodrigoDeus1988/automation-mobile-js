const Helper = codecept_helper;

class ScrollHelper extends Helper {
  helper = () => this.helpers['Appium'];

  driver = () => this.helper().browser;

  scrollUntil = async ({ scrollLocator, toElementLocator, direction, timeout = 10_000 }) => {
    const scrollIsVisible = await this.isVisible(scrollLocator);
    if (!scrollIsVisible) {
      throw new Error(`cannot find element scroll by locator ${JSON.stringify(scrollLocator)}`);
    }

    const scrollElement = await this.findElement(scrollLocator);
    const bounds = await this.bounds(scrollElement);

    const start = Date.now();
    while (true) {
      const isVisible = await this.isVisible(toElementLocator); // await inside while is not a good idea :(
      if (!isVisible) {
        if (Date.now() - start > timeout) {
          throw new Error(
            `element by locator ${JSON.stringify(
              toElementLocator
            )} was not visible in the expected timeout ${timeout}ms`
          );
        }
        await this.drag(bounds, direction);
        continue;
      }
      break;
    }
  };

  bounds = async element => ({
    origin: await element.getLocation(),
    size: await element.getSize()
  });

  isVisible = async selector => {
    const element = await this.findElement(selector);
    if (element.error) {
      return false;
    }
    const attrVisible = await element.getAttribute('visible');
    const isDisplayedInViewport = attrVisible === 'true';
    return isDisplayedInViewport && (await this.isInViewport(element));
  };

  isInViewport = async element => {
    const { width, height } = await this.driver().getWindowRect();
    const { origin, size } = await this.bounds(element);

    // vertical
    if (origin.y < 0 || origin.y + size.height > height) {
      return false;
    }

    // horizontal
    if (origin.x < 0 || origin.x + size.width > width) {
      return false;
    }
    return true;
  };

  findElement = async selector => this.driver().$(selector[this.helper().platform]);

  drag = async (bounds, direction) => {
    const {
      origin: { x, y },
      size: { width, height }
    } = bounds;
    let startPoint = { x: 0, y: 0 };
    let endPoint = { x: 0, y: 0 };

    switch (direction) {
      case 'up':
        startPoint.x = endPoint.x = x + width / 2;
        startPoint.y = y + height * 0.1;
        endPoint.y = y + height / 2;
        break;
      case 'right':
        startPoint.x = x + width * 0.8;
        startPoint.y = endPoint.y = y + height / 2;
        endPoint.x = x;
        break;
      case 'down':
        startPoint.x = endPoint.x = x + width / 2;
        startPoint.y = y + height / 2;
        endPoint.y = y;
        break;
      case 'left':
        endPoint.x = x + width * 0.8;
        startPoint.y = endPoint.y = y + height / 2;
        startPoint.x = x;
        break;
      default:
        throw new Error('direction must be one down, up, left or right.');
    }

    await this.driver().performActions([
      {
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
          { type: 'pointerMove', x: startPoint.x, y: startPoint.y },
          { type: 'pointerDown' },
          { type: 'pause', duration: 500 },
          { type: 'pointerMove', duration: 500, x: endPoint.x, y: endPoint.y },
          { type: 'pointerUp' }
        ]
      }
    ]);
  };
}

module.exports = ScrollHelper;
