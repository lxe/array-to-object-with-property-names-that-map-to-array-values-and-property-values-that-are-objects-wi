'use strict';

function arrayToObjectWithPropertyNamesThatMapToArrayValuesAndPropertyValuesThatAreObjectsWithKeysWhoseValuesAlsoMapToArrayValues(array, keys) {
  return array.reduce(function mapArrayToObject(result, item) {
    result[item] = keys.reduce(function mapKeysToArrayValues(propObject, key) {
      propObject[key] = item;
      return propObject;
    }, {})
    return result;
  }, {});
}

module.exports = arrayToObjectWithPropertyNamesThatMapToArrayValuesAndPropertyValuesThatAreObjectsWithKeysWhoseValuesAlsoMapToArrayValues;
