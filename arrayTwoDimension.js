/* 
  Author: zikrimansyursyah
  
  Case : tugas anda adalah mencari nilai rata rata siswa, nilai rata rata mata pelajaran, dan nilai tertinggi pada mata pelajaran pada data berbentuk array 2 dimensi
  
  Example Data: 
  [
    ["Alice", 85, 90, 78], (pada setiap data terdapat nama yang ditunjukan pada indeks ke-0)
    ["Bob", 92, 88, 95], (nilai mata pelajaran matematika pada indeks ke-1)
    ["Carol", 78, 80, 85], (nilai mata pelajaran bahasa indonesia pada indeks ke-2)
    ["David", 65, 75, 70], (nilai mata pelajaran fisika pada indeks ke-3)
    ["Eve", 88, 82, 90]
  ]

  Expected Output: ["xyz", "xzy", "yxz", "yzx", "zxy", "zyx"]

  Notes: 
  - tampikan expected output dengan console.log()
*/

function nilaiRataRataSiswa(data, nama) {
  // masukan logika disini
  for (let i = 0; i < data.length; i++) {
    // cek nama siswa di index 0
    if (data[i][0] === nama) {
      let total = 0;
      let count = 0;

      for (let j = 1; j < data[i].length; j++) {
        total += data[i][j];
        count++;
      }

      return count === 0 ? 0 : total / count;
    }
  }

  return "Siswwa tidak ditemukan"; // kembalikan hasil logika disini
}

function nilaiRataRataMataPelajaran(data, mapelIndex) {
  // masukan logika disini
  let total = 0;
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (mapelIndex >= 1 && mapelIndex < data[i].length) {
      total += data[i][mapelIndex];
      count++;
    }
  }

  return total / count; // kembalikan hasil logika disini
}

function nilaiTertinggiMataPelajaran(data, mapelIndex) {
  let nilaiMax = -Infinity;
  let namaMax = null;

  for (let i = 0; i < data.length; i++) {
    if (mapelIndex >= 1 && mapelIndex < data[i].length) {
      const nilai = data[i][mapelIndex];
      if (nilai > nilaiMax) {
        nilaiMax = nilai;
        namaMax = data[i][0];
      }
    }
  }

  return { nama: namaMax, nilai: nilaiMax };
}

// CASE VALUE
const dataNilai = [
  ["Alice", 85, 90, 78],
  ["Bob", 92, 88, 95],
  ["Carol", 78, 80, 85],
  ["David", 65, 75, 70],
  ["Eve", 88, 82, 90],
];

// TEST CASE
console.log(nilaiRataRataSiswa(dataNilai, "David")); // cari nilai rata-rata siswa David
console.log(nilaiRataRataMataPelajaran(dataNilai, 2)); // cari nilai rata-rata mapel bahasa-indonesia dari seluruh siswa
console.log(nilaiTertinggiMataPelajaran(dataNilai, 3)); // cari nilai tertinggi pada mapel fisika dari seluruh siswa
