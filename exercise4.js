/*
MENCARI MODUS
PSEUDOCODE
  START
  SET function cariModus with parameter(arr)
  STORE result with empty arrray
  STORE i with 0
  FOR i LESS THEN arr.length
    STORE j with 0
    FOR j LESS THEN arr.length
      IF arr[i] EQUALS TO arr[i+j] THEN
        PUSH arr[i] TO result
``````END IF
      j++ 
    END FOR
    i++
  END FOR
  IF result.length GREATER THEN arr.length
    RETURN -1
  ELSE IF result.length GREATER THEN 0
    RETURN result[0]
  ELSE
    RETURN -1
  END IF
  END
*/

function cariModus(arr) {
    // you can only write your code here!
    var result = []
    for(var i = 0; i < arr.length; i++) {
      for(var j = 1; j < arr.length; j++) {
        if(arr[i] === arr[i+j]) {
          result.push(arr[i])
        }
      }
    }
    if(result.length > arr.length) {
      return -1
    }
    else if(result.length > 0) {
      return result[0]
    }
    else {
      return -1
    }
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1
  