export default class Canivete {
  static getElementByDataAttribute(arrayOfdataAttibute) {
    let elements = [];
    arrayOfdataAttibute.forEach((dataAttibute) => {
      elements.push(document.querySelector(`[data-${dataAttibute}]`));
    });
    return elements;
  }

  static yNow() {
    return window.scrollY;
  }

  static elementY(element) {
    return element.getBoundingClientRect().top + this.yNow();
  }
  static elementHeight(element) {
    return element.getBoundingClientRect().height;
  }
}
