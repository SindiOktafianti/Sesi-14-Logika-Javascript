function cari_prima_dalam_interval(angka_pertama, angka_kedua) {
    let hasil = [];
  
    // Cek setiap angka di antara angka_pertama dan angka_kedua
    for (let i = angka_pertama; i <= angka_kedua; i++) {
      if (i < 2) {
        continue; // Langsung lanjut ke angka berikutnya jika i < 2
      }
      
      let is_prima = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          is_prima = false;
          break; // Langsung keluar dari loop jika i bukan bilangan prima
        }
      }
      
      if (is_prima) {
        hasil.push(i); // Tambahkan i ke array hasil jika i bilangan prima
      }
    }
  
    return hasil;
  }
  
  console.log(cari_prima_dalam_interval(1, 5)); // [2, 3, 5]
  console.log(cari_prima_dalam_interval(5, 10)); // [9, 7]
  console.log(cari_prima_dalam_interval(10, 20)); // [11, 13, 17]