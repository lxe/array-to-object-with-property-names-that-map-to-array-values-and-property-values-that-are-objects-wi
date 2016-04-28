'use strict';

var assert = require('assert');
var arrayToObjectWithPropertyNamesThatMapToArrayValuesAndPropertyValuesThatAreObjectsWithKeysWhoseValuesAlsoMapToArrayValues = require('./array-to-object-with-property-names-that-map-to-array-values-and-property-values-that-are-objects-with-keys-whose-values-also-map-to-array-values.js');

assert.deepEqual(
  arrayToObjectWithPropertyNamesThatMapToArrayValuesAndPropertyValuesThatAreObjectsWithKeysWhoseValuesAlsoMapToArrayValues(['foo', 'bar'], ['name', 'id']),
  {
    foo: {name: 'foo', id: 'foo'},
    bar: {name: 'bar', id: 'bar'},
  },
  'Shoudl convert an array');