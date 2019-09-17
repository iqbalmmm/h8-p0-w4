//CHECKS AB

function checkAB(num) {
    for(var i = 0; i < num.length; i++) { //cek string yang masuk
      if(num[i] == 'a' && num[i+4] == 'b' || num[i] == 'b' && num[i+4] == 'a' ) {  
        // cek adakah b yg berjarak 3 character dari a ATAU cek adakah a yg berjarak 3 character dari b
        return true
      }
    }
    return false  //jika 2 kondisi tidak memenuhi, return false
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false