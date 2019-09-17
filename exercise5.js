/*
UBAH HURUF
PSEUDOCODE
  START
  SET function ubahHuruf with parameter (kata)
  STORE 'output' with ''
  STORE 'huruf' with 'abcdefghijklmnopqrstuvwxyz'
  STORE i with 0
  FOR i LESS THEN kata.length
    STORE j with 0
    FOR j LESS THEN huruf.length
      IF kata[i] EQUALS TO huruf[j] THEN
        SET output EQUALS TO output + huruf[j+1]
      END IF
      j++
    END FOR
    i++
  END FOR
  return output
  END
*/


function ubahHuruf(kata) {
    // you can only write your code here!
    var output = ''
    var huruf = 'abcdefghijklmnopqrstuvwxyz'
    for (var i = 0; i < kata.length; i++) {
      for(var j = 0; j < huruf.length; j++) {
        if(kata[i] == huruf[j]) {
          output += huruf[j+1]
        }
      }
    }
    return output
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu