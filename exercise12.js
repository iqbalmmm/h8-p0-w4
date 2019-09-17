//TOKO X

function countProfit(shoppers) {
    //Data barang bisa disimpan didalam fungsi atau diluar fungsi
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
    // you can only write your code here!
    var result = []
    var shoppersName = []
    var profit = []
  
    for(var i = 0; i < listBarang.length; i++) {
      result.push(listBarang[i][2])
      shoppersName.push([])
      profit.push(0)
    }
  
    for(var i = 0; i < shoppers.length; i++) {
      for(var j = 0; j < listBarang.length; j++) {
        if(shoppers[i].product === listBarang[j][0]) { // dicek apakah barang yang ingin dibeli, tersedia dijual ditoko
          if(result[j] >= shoppers[i].amount) { //jika barang tersedia untuk dijual, dicek lagi apakah masih ada stok / tidak
            result[j] -= shoppers[i].amount //jika masih ada stok, value stok lama dikurang
            shoppersName[j].push(shoppers[i].name) //nama pembeli dimasukkan kedaftar
            profit[j] = listBarang[j][1] * (listBarang[j][2] - result[j])
            //profit dikalkulasikan dan diupdate jika ada pembeli bertambah
          }
        }
      }
    }
  
    //pembuatan objek untuk di return sebagai output
    var output = []
    if(!shoppers[0]) {
      return output
    }
    for(var i = 0; i < listBarang.length; i++) {
      var object = {
        merk : listBarang[i][0],
        shopper : shoppersName[i],
        leftOver : result[i],
        totalProfit : profit[i]
      }
  
      //Bentuk penulitsan lain dari object
      // var object = {}
      //   object.merk = listBarang[i][0]
      //   object.shopper = shoppersName[i]
      //   object.leftOver = result[i]
      //   object.totalProfit = profit[i]
  
      output[i] = object
    }
    return output
  }
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]