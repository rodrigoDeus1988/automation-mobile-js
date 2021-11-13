const Helper = codecept_helper;

class SwipeHelper extends Helper {
  async swipe(
    startXPercentage = 20,
    endXPercentage = 80,
    startYPercentage = 50,
    endYPercentage = 50,
    duration = 200
  ) {
    const driver = this.helpers['Appium'].browser;
    const { width, height } = await driver.getWindowRect();
    const startXPoint = Math.round((width * startXPercentage) / 100);
    const endXPoint = Math.round((width * endXPercentage) / 100);
    const startYPoint = Math.round((height * startYPercentage) / 100);
    const endYPoint = Math.round((height * endYPercentage) / 100);

    let xValue = 0;
    let yValue = 0;

    if (startXPoint - endXPoint) {
      xValue = -(startXPoint - endXPoint);
    }
    if (startYPoint - endYPoint) {
      yValue = -(startYPoint - endYPoint);
    }

    return await driver.performActions([
      {
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
          { type: 'pointerMove', duration: 0, x: startXPoint, y: startYPoint },
          { type: 'pointerDown', button: 0 },
          { type: 'pause', duration: duration },
          { type: 'pointerMove', duration: duration, origin: 'pointer', y: yValue, x: xValue },
          { type: 'pointerUp', button: 0 }
        ]
      }
    ]);
  }

  async swipeUntilElementIsVisibleInViewPort({ elementLocator, direction, timeout = 10_000 }) {
    const scrollHelper = this.helpers['ScrollHelper'];
    let startXPercentage, endXPercentage, startYPercentage, endYPercentage;
    const start = Date.now();
    while (true) {
      const isVisible = await scrollHelper.isVisible(elementLocator); // await inside while is not a good idea :(
      if (!isVisible) {
        if (Date.now() - start > timeout) {
          throw new Error(
            `element by locator ${JSON.stringify(
              elementLocator
            )} was not visible in the expected timeout ${timeout}ms`
          );
        }
        switch (direction) {
          case 'up':
            startXPercentage = 50;
            endXPercentage = 50;
            startYPercentage = 20;
            endYPercentage = 80;
            break;
          case 'right':
            startXPercentage = 80;
            endXPercentage = 20;
            startYPercentage = 50;
            endYPercentage = 50;
            break;
          case 'down':
            startXPercentage = 50;
            endXPercentage = 50;
            startYPercentage = 80;
            endYPercentage = 20;
            break;
          case 'left':
            startXPercentage = 20;
            endXPercentage = 80;
            startYPercentage = 50;
            endYPercentage = 50;
            break;
          default:
            throw new Error('direction must be one down, up, left or right.');
        }
        await this.swipe(startXPercentage, endXPercentage, startYPercentage, endYPercentage);
        continue;
      }
      break;
    }
  }

  swipeHorizontal(
    startPercentage = 20,
    endPercentage = 80,
    yPositionPercentage = 50,
    duration = 1000
  ) {
    return this.swipe(
      startPercentage,
      endPercentage,
      yPositionPercentage,
      yPositionPercentage,
      duration
    );
  }

  swipeVertical(
    startPercentage = 20,
    endPercentage = 80,
    xPositionPercentage = 50,
    duration = 200
  ) {
    return this.swipe(
      xPositionPercentage,
      xPositionPercentage,
      startPercentage,
      endPercentage,
      duration
    );
  }

  swipeDown(startPercentage = 80, endPercentage = 20, xPositionPercentage = 50, duration = 1000) {
    return this.swipe(
      xPositionPercentage,
      xPositionPercentage,
      startPercentage,
      endPercentage,
      duration
    );
  }

  swipeUp(startPercentage = 20, endPercentage = 80, xPositionPercentage = 50, duration = 1000) {
    return this.swipe(
      xPositionPercentage,
      xPositionPercentage,
      startPercentage,
      endPercentage,
      duration
    );
  }
}

module.exports = SwipeHelper;
