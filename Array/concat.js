/**
 * Creates a new array concatenating array with any additional arrays and/or values.
 * @param {...*} [array] Arguments of any types for concat
 * @return {Array}       Returns the NEW concatenated array.
 */

function concat(value) {
  const result = [];
  Object.values(arguments).forEach(argument => {
    if(argument.length){
      result.push(...argument)
    } else {
      result.push(argument)
    }
  })

  return result
}
