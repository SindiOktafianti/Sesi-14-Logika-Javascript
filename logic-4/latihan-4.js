function isArithmetic(arr) {
    if (arr.length < 2) {
      // Jika panjang array kurang dari 2, tidak mungkin menjadi deret aritmatika
      return false;
    }
  
    // Hitung selisih antar dua angka pertama
    let diff = arr[1] - arr[0];
  
    // Loop melalui array dan periksa apakah selisihnya tetap sama
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] - arr[i - 1] !== diff) {
        // Jika selisih antara dua angka tidak sama, maka bukan deret aritmatika
        return false;
      }
    }
  
    // Jika lolos semua pengecekan, maka array merupakan deret aritmatika
    return true;
  }

let arr1 = [1, 2, 3, 4, 5, 6, ];
let arr2 = [2, 4, 6, 12, 24];
let arr3 = [2, 4, 6, 8];
let arr4 = [2, 6, 18, 54];
let arr5 = [1, 2, 3, 4, 7, 9];

console.log(isArithmetic(arr1)); // true
console.log(isArithmetic(arr2)); // false
console.log(isArithmetic(arr3)); // true
console.log(isArithmetic(arr4)); // false
console.log(isArithmetic(arr5)); // false