function deepSum(arr) {
    var output = 0
    
    if(arr.length === 0) {
      return output = 'No number'
    }
  
    for(var i = 0; i < arr.length; i++) { //perulangan untuk mengakses isi array arr
      for(var j = 0; j < arr[i].length; j++) { //perulangan untuk mengakses indeks isi dari array arr
        for(var k = 0; k < arr[i][j].length; k++) { //perulangan untuk mengakses isi dari tiap indeks  isi dari array arr
            output += arr[i][j][k]    //jumlahkan setiap isi dari array, masukkan dalam variabel output
        }
      }
    }
    return output
  }
  
  //TEST CASE
  console.log(deepSum([
    [
      [4, 5, 6],
      [9, 1, 2, 10],
      [9, 4, 3]
    ],
    [
      [4, 14, 31],
      [9, 10, 18, 12, 20],
      [1, 4, 90]
    ],
    [
      [2, 5, 10],
      [3, 4, 5],
      [2, 4, 5, 10]
    ]
  ])); // 316
  
  console.log(deepSum([
    [
      [20, 10],
      [15],
      [1, 1]
    ],
    [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      [2],
      [9, 11]
    ],
    [
      [3, 5, 1],
      [1, 5, 3],
      [1]
    ],
    [
      [2]
    ]
  ])); // 156
  
  console.log(deepSum([])); // No number