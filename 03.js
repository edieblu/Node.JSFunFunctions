function doubleAll(numbers) {
      // var result = []
      // for (var i = 0; i < numbers.length; i++) {
      //   result.push(numbers[i] * 2)
      // }
      // return result
       return numbers.map(function double(number){
    	return number*2;
    })
    }

    module.exports = doubleAll

// Official Solution

module.exports = function doubleAll(numbers) {
      return numbers.map(function double(num) {
        return num * 2
      })
    }

   