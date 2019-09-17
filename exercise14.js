//NAIK ANGKOT
function naikAngkot(arr) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F']
    var output = [] //Dibuat variable penampung untuk menyimpan value data pembayaran & jumlah transaksi
  
    if(!arr.length) {
      return output
    }
  
    for(var i = 0; i < arr.length; i++) {
        var harga = 0
        var jarak = 0
        var indeksDari = 0
        var indeksTujuan = 0
  
        for(var j = 0; j < rute.length; j++) {
          if(rute[j] === arr[i][1]) {
            indeksDari += rute[j]
          }
          else if (rute[j] === arr[i][2]) {
            indeksTujuan += rute[j]
          }
  
          jarak = Math.abs(indeksTujuan - indeksDari)
          harga = jarak * 2000
        }
  
      //Cara memanggil object
      // var  obj = {
      //   penumpang : arr[i][0],
      //   naikDari : arr[i][1],
      //   tujuan : arr[i][2],
      //   bayar : harga
      // }
      // output.push(obj)
  
      //Cara lain memanggil object
        var obj = {}
        obj.penumpang = arr[i][0]
        obj.naikDari = arr[i][1]
        obj.tujuan = arr[i][2]
        obj.bayar = harga
  
        output.push(obj)
  
    }
    return output
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]