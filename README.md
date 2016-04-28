# array-to-object-with-property-names-that-map-to-array-values-and-property-values-that-are-objects-with-keys-whose-values-also-map-to-array-values

Convert an array to an object whose property names map to the array items, and whose values are objects whose properties in turn you can specify, and those property values are also mapped to the current array item.

## Example

```javascript
var arrayToObjectWithPropertyNamesThatMapToArrayValuesAndPropertyValuesThatAreObjectsWithKeysWhoseValuesAlsoMapToArrayValues = require('array-to-object-with-property-names-that-map-to-array-values-and-property-values-that-are-objects-with-keys-whose-values-also-map-to-array-values');

arrayToObjectWithPropertyNamesThatMapToArrayValuesAndPropertyValuesThatAreObjectsWithKeysWhoseValuesAlsoMapToArrayValues(['foo', 'bar'], ['name', 'id']);

// Result:
// {
//   foo: {name: 'foo', id: 'foo'},
//   bar: {name: 'bar', id: 'bar'},
// }
```

## License

ISC
