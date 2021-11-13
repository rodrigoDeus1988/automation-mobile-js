/**
 * This class encapsulates the creation of the object compatible with the Espresso and XCUITest drivers
 */
class ElementHelper extends codecept_helper {
  /**
   * create strategy selector to find element by id
   *
   * @param {*} id the testID
   * @return strategy selector
   */
  findById(id) {
    return {
      android: `//*[@view-tag="${id}"]`,
      ios: `~${id}`
    };
  }

  /**
   * create strategy selector to find element by partial id
   *
   * @param {*} id the testID
   * @return strategy selector
   */
  findByIdPartial(id) {
    return {
      android: spliter('@view-tag', id),
      ios: spliter('@name', id)
    };
  }

  /**
   * create strategy selector to find element by text value
   *
   * @param {*} text the text value to search
   * @return strategy selector
   */
  findByText(text) {
    return {
      android: `//*[@text="${text}"]`,
      ios: `//*[@name="${text}"]`
    };
  }
  /**
   * create strategy selector to find element by partial text value
   *
   * @param {*} text the text value to search
   * @return strategy selector
   */
  findByTextPartial(text) {
    return {
      android: spliter('@text', text),
      ios: spliter('@name', text)
    };
  }
}

module.exports = ElementHelper;

/**
 * creates the xpath selector to use one or more snippets of the tag value
 *
 * @param {*} selector the selector to search
 * @param {*} parameter the text or id partial value to search separeted by "*"
 * @return strategy selector
 */
const spliter = (selector, parameter) => {
  const values = parameter.split('*');
  let xpath = '';
  for (const value of values) {
    xpath = `${xpath}[contains(${selector}, "${value}")]`;
  }
  return `//*${xpath}`;
};
