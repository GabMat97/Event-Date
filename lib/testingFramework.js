function expectEquality(inputFunction, expectedResult) {
  if (inputFunction === expectedResult) {
    passMessage()
    return true
  } else {
    failMessage()
    return false
  }
}

function describe(description, test) {
  console.log(description)
  test()
}

function it(scenario, test) {
  console.log('  ' + scenario)
  test()
}


const passMessage = function() {
  console.log('%c Pass!', 'color: #00af00')
  return true
}

const failMessage = function() {
  console.log('%c Fail!', 'color: #ff0000')
  return false
}

function expect (inputFunction) {
  return {
    toBe: function (expectedResult) {
      if (inputFunction === expectedResult) {
        passMessage()
        return true
      } else {
        failMessage()
        return false
      }
    },

    notToBe: function (expectedResult) {
      if (inputFunction === expectedResult) {
        failMessage()
        return false
      } else {
        passMessage()
        return true
      }
    },

    toThrow: function (expectedError) {
      var result = 'fail'
      try {
        inputFunction();
      }
      catch(e) {
        result = 'pass'
      }
      finally {
        if (result === 'pass') {
          passMessage()
        } else {
          failMessage()
        }
      }
    }
  }
}
