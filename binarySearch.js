/* 
  Author: zikrimansyursyah
  
  Case : Tugas anda adalah mencari index suatu elemen dalam array, wajib menggunakan metode binary search 

  metode binary search bekerja dengan membagi array menjadi dua bagian dan memeriksa elemen tengah, kemudian mempersempit pencarian berdasarkan hasil perbandingan. Implementasikan pencarian ini dalam bentuk rekursif
  perlu diingat metode binary search wajib dilakukan sorting terlebih dahulu

  Example Input: [3, 8, 1, 9, 4, 6, 4, 2, 8, 4, 1, 6, 2, 3, 7, 3]
  Example search input: 6
  Example Output: 
  - Indeks elemen 6 adalah :  11
  - Indeks elemen 8 adalah :  13
  - Indeks elemen 3 adalah :  5 
  - Indeks elemen 4 adalah :  7 

  Notes: 
  - dilarang menggunakan array prototype seperti .find() .sort() .findIndex() dll
  - tampikan expected output dengan console.log()
*/

function bubbleSortAsc(arr) {
  // (bubble sort)
  const a = [];
  for (let i = 0; i < arr.length; i++) a[a.length] = arr[i];

  for (let i = 0; i < a.length - 1; i++) {
    for (let j = 0; j < a.length - 1 - i; j++) {
      if (a[j] > a[j + 1]) {
        const tmp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = tmp;
      }
    }
  }
  return a;
}

function binarySearchRightmost(arr, target, left, right) {
  if (left > right) return -1;

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    // cek apakah masih ada target di kanan
    const next = binarySearchRightmost(arr, target, mid + 1, right);
    return next !== -1 ? next : mid;
  } else if (arr[mid] < target) {
    return binarySearchRightmost(arr, target, mid + 1, right);
  } else {
    return binarySearchRightmost(arr, target, left, mid - 1);
  }
}

function cariValueIndeks(array, target) {
  // kofigurasi parameter sesuai kebutuhan anda
  // masukan logika disini

  const sorted = bubbleSortAsc(array);

  return binarySearchRightmost(sorted, target, 0, sorted.length - 1);
}

// CASE VALUE
const array = [3, 8, 1, 9, 4, 6, 4, 2, 8, 4, 1, 6, 2, 3, 7, 3];

// TEST CASE
console.log("Indeks elemen 6 adalah : ", cariValueIndeks(array, 6));
console.log("Indeks elemen 8 adalah : ", cariValueIndeks(array, 8));
console.log("Indeks elemen 3 adalah : ", cariValueIndeks(array, 3));
console.log("Indeks elemen 4 adalah : ", cariValueIndeks(array, 4));
