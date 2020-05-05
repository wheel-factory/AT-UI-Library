import { omitBy, isNil } from 'lodash';

function purifyObject(obj) {
  const newObj = {};
  Object.keys(omitBy(obj, isNil)).forEach((key) => {
    if (typeof obj[key] === 'object') {
      const tempObj = purifyObject(obj[key]);
      if (Object.keys(tempObj).length) newObj[key] = tempObj;
    } else {
      newObj[key] = obj[key];
    }
  });
  return newObj;
}

export default function (atId, cssObject) {
  if (
    atId
    // && /(?!-)^[a-z|-]+(?<!-)$/g.test(atId)
    && cssObject
    && typeof cssObject === 'object'
    && Object.keys(cssObject).length
  ) {
    const cssString = Object.entries(purifyObject(cssObject))
      .reduce((rules, rule) => `${rules}${rule[0]}{${
        Object.entries(rule[1])
          .reduce((properties, property) => `${properties}${property[0]}:${property[1]};`, '')
      }}`, '');

    let styleElement = document.getElementById(`${atId}-style`);

    if (styleElement === null) {
      styleElement = document.createElement('style');
      styleElement.setAttribute('id', `${atId}-style`);
      document.getElementsByTagName('head')[0].appendChild(styleElement);
    }

    styleElement.innerText = cssString;
  }
}
