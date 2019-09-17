
/*
ANGKA PRIMA
PSEUDOCODE
  START
  SET function angkaPrima with parameter(angka)
  STORE 'output' with true
  STORE i with 2
  FOR i LESS THEN angka
    IF angka MOD i EQUALS TO 0 THEN
      RETURN false
    END IF
    i++
  END FOR
  RETURN true
  END
*/

function angkaPrima(angka) {
    // you can only write your code here!
    var output = true
    for(var i = 2; i < angka; i++) {
      if(angka % i == 0) {
        return false
      }
    }
    return output
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false