//DIGIT PERKALIAN MINIMUM

function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var output = []
    for(var i = 1; i <= angka; i++) {
      if(angka % i === 0) {
        var bagi = angka/i
        var strDigit = i + '' + bagi
        output.push(strDigit)
      }
    }
    var digitTerkecil = output[0]
  
    for(var j = 0; j < output.length; j++) {
      if(output[j].length < digitTerkecil) {
        digitTerkecil = output[j].length
      }
    }
    return digitTerkecil
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2