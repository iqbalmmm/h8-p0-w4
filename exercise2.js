/*
FAKTOR PERSEKUTUAN TERBESAR
PSEUDOCODE
  START
  SET function fpb with parameter(angka1, angka2)
  STORE 'output' with empty array
  STORE 'result' with 0
  IF angka1 > angka2 THEN
    SET result EQUALS TO angka1
  ELSE
    SET result EQUALS TO angka2
  END IF
  STORE i with 0
  FOR i LESS THEN result
    IF angka1 MOD i EQUALS TO 0 AND angka2 MOD i EQUALS TO 0
      SET output EQUALS TO i
    i++
  END FOR
  RETURN output
  END
*/



function fpb(angka1, angka2) {
    // you can only write your code here!
    var output = []
    var result = 0
    if(angka1 > angka2) {
      result = angka1
    }
    else {
      result = angka2
    }
  
    for(var i = 1; i < result; i++) {
      if(angka1 % i === 0 && angka2 % i === 0) {
        output = i
      }
    }
    return output
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1