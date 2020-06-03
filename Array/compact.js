/**
 * Creates an array with all false values removed. The values false, null, 0, "", undefined, and NaN are falsey.
 * @param  {Array}  [array]  An array of elements that should be filtered
 * @return {Array}           An array without false values
 */

function compact(array) {
  return array ? array.filter((el) => !!el) : [];
}

