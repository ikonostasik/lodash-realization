/**
 * This method is like _.difference except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared.
 * The order and references of result values are determined by the first array. The iteratee is invoked with one argument:(value).
 * @param {Array} [array]  Base array
 * @param {Array} [values] Array of values to be removed from base array
 * @param {Function} [iteratee=(value) => value )] Array of values to be removed from base array
 * @return {Array}         Returns the new array of filtered values.
 */

function differenceBy(array,values,iteratee = (value) => value) {
  if (!Array.isArray(array)) {
    return  []
  }

  if (!Array.isArray(values)) {
    return array;
  }

  values = values.map(iteratee);

  return array.filter( el => !values.includes(iteratee(el)));
}
