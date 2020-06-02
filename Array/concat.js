/**
 * Creates a new array concatenating array with any additional arrays and/or values.
 * @param {...*} [array] Arguments of any types for concat
 * @return {Array}                  A concat array
 */

function concat(value) {
  if (!arguments.length) {
    throw 'Wrong arguments provided'
  }

  let result = [];
  Object.values(arguments).forEach(argument => {
    if(argument.length){
      result.push(...argument)
    } else {
      result.push(argument)
    }
  })

  return result
}
