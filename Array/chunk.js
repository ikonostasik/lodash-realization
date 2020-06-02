/**
 * Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
 * @param  {Array}  [array]  An array of elements that should be split to chunks
 * @param  {number} [size=1] Amount of chunks that should be returned
 * @return {Array}           An array of arrays
 */

function chunk(array, size = 1) {
  if (!array.length || typeof size !== 'number') {
    throw 'Wrong arguments provided';
  }

  if (size >= array.length) {
    return [array];
  }

  const result = [];
  let temp = [];

  while (array.length) {
    temp = array.splice(size);
    result.push(array);
    array = temp;
  }

  return result;
}
