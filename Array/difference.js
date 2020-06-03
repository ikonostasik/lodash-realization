/**
 * Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons.
 * The order and references of result values are determined by the first array.
 * @param {Array} [array]  Base array
 * @param {Array} [values] Array of values to be removed from base array
 * @return {Array}         Returns the new array of filtered values.
 */

function difference(array,values) {
  if (!Array.isArray(array)) {
    return  []
  }

  if (!Array.isArray(values)) {
    return array;
  }

  return array.filter( el => !values.includes(el));
}


