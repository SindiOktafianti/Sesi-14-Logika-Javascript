function compireangka(angkasatu, angkadua){
   let hasil;
    if (angkadua > angkasatu) {
         hasil = 'true';
      } else if (angkadua < angkasatu) {
        hasil = 'false';
      } else {
        hasil = '-1';
      } 
      return hasil;
}
console.log(compireangka(5, 8));
console.log(compireangka(5, 3));
console.log(compireangka(4, 4));
console.log(compireangka(3, 3));
console.log(compireangka(17, 3));
