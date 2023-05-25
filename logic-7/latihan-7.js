function cek_prima(angka) {
    // Cek apakah angka kurang dari 2
    if (angka < 2) {
      return false;
    }
    
    // Cek apakah angka bisa dibagi habis oleh bilangan lain
    for (let i = 2; i < angka; i++) {
      if (angka % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  console.log(cek_prima(3)); // true
  console.log(cek_prima(7)); // true
  console.log(cek_prima(6)); // false
  console.log(cek_prima(23)); // true
  console.log(cek_prima(33)); // false