//CHANGE ME!
function changeMe(arr) {
    var output = {}
     
    if(arr.length === 0) {
      console.log('')
    }
    else {
      for(var i = 0; i < arr.length; i++) {
        //assign object
        output.firstName = arr[i][0]
        output.lastName = arr[i][1]
        output.gender = arr[i][2]
        
        if(arr[i][3] === undefined || arr[i][3] > 2019) {
          output.age = 'Invalid Birth Year'
        }
        else {
          output.age = 2019 - arr[i][3]
        }
  
      console.log((i+1) + '. ' + output.firstName + ' ' + output.lastName + ':', output)
      // tanda ',' output sama saja dengan kita buat console.log(output)
      }
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""
  