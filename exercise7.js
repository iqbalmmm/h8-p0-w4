function urutkanAbjad(str) {
    var output = []
    for(var i = 0; i < str.length; i++) {
      output.push(str[i])
      output.sort()
      
    }
    return output.join('')
  }
  
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'