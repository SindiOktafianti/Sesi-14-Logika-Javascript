function hitung_fpb(a, b) {
    // Cari faktor dari bilangan pertama
    let faktor_a = new Set();
    for (let i = 1; i <= a; i++) {
      if (a % i === 0) {
        faktor_a.add(i);
      }
    }
    
    // Cari faktor dari bilangan kedua
    let faktor_b = new Set();
    for (let i = 1; i <= b; i++) {
      if (b % i === 0) {
        faktor_b.add(i);
      }
    }
    
    // Cari elemen yang sama pada kedua set faktor
    let faktor_sama = new Set([...faktor_a].filter(x => faktor_b.has(x)));
    
    // Ambil elemen terbesar dari faktor yang sama
    let fpb = Math.max(...faktor_sama);
    
    return fpb;
  }
  
  console.log(hitung_fpb(12, 16)); // 4
  console.log(hitung_fpb(50, 40)); // 10
  console.log(hitung_fpb(22, 99)); // 11
  console.log(hitung_fpb(24, 36)); // 12
  console.log(hitung_fpb(17, 23)); // 1