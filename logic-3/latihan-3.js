// function sortString(str) {
//     return str.split("").sort().join("");
//   }
//   console.log(sortString("halo"));
//   console.log(sortString("qwerty"));
//   console.log(sortString("qwertyuiopasdfghjklzxcvbnm"));

  function sortString(str) {
    let arr = str.split(''); // konversi text menjadi array karakter
    let len = arr.length;
    let penukaran;
    do {
      penukaran = false;
      for (let i = 0; i < len; i++) {
        if (arr[i] > arr[i + 1]) {
          let tmp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = tmp;
          penukaran = true;
        }
      }
    } while (penukaran);
    return arr.join(''); // konversi kembali array menjadi text
  }

console.log(sortString("halo")); 
console.log(sortString("qwerty"));
console.log(sortString("qwertyuiopasdfghjklzxcvbnm"));

  