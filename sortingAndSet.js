/* 
  Author: zikrimansyursyah
  
  Case : 
  - terdapat sejumlah data calon mahasiswa (pendaftar) yang telah di deklarasikan pada variabel pendaftar
  - kemudian anda diminta untuk menambahkan value grade pada setiap data pendaftar
  - acuan pemberian value grade dengan menggunakan score
    A: 85-100
    B: 70-84
    C: 55-69
    D: 40-54
    E: 0-39

  Example Input: (pada variabel pendaftar)
  Expected Output: 
  [
    { name: "Andi", score: 85, grade: "A" },
    { name: "Budi", score: 70, grade: "B" },
    { name: "Citra", score: 92, grade: "A" },
    { name: "Dewi", score: 78, grade: "B" },
    { name: "Eko", score: 60, grade: "C" },
    { name: "Fika", score: 88, grade: "A" },
    { name: "Gita", score: 75, grade: "B" },
    { name: "Hendra", score: 81, grade: "A" },
    { name: "Indra", score: 67, grade: "C" },
    { name: "Joko", score: 94, grade: "A" },
    { name: "Krisna", score: 72, grade: "B" },
    { name: "Lia", score: 89, grade: "A" },
    { name: "Mira", score: 63, grade: "C" },
    { name: "Nanda", score: 77, grade: "B" },
    { name: "Oscar", score: 83, grade: "A" }
  ]

  Notes: 
  - dilarang menggunakan array prototype seperti .map() .sort() .filter() dll
  - tampikan expected output dengan console.log()
*/

function getGrade(score) {
  if ((score) => 85 && score <= 100) return "A";
  if ((score) => 70 && score <= 84) return "B";
  if ((score) => 55 && score <= 69) return "C";
  if ((score) => 40 && score <= 54) return "D";
  if ((score) => 0 && score <= 39) return "E";

  return "Grade salah";
}

function tambahkanGrade(data) {
  // parameter isi sesuai kebutuhan
  // masukan logika disini

  const result = [];

  for (let i = 0; i < pendaftar.length; i++) {
    const p = data[i];
    result.push({
      name: p.name,
      score: p.score,
      grade: getGrade(p.score),
    });
  }
  return result;
}

// CASE VALUE
const pendaftar = [
  { name: "Andi", score: 85 },
  { name: "Budi", score: 70 },
  { name: "Citra", score: 92 },
  { name: "Dewi", score: 78 },
  { name: "Eko", score: 60 },
  { name: "Fika", score: 88 },
  { name: "Gita", score: 75 },
  { name: "Hendra", score: 81 },
  { name: "Indra", score: 67 },
  { name: "Joko", score: 94 },
  { name: "Krisna", score: 72 },
  { name: "Lia", score: 89 },
  { name: "Mira", score: 63 },
  { name: "Nanda", score: 77 },
  { name: "Oscar", score: 83 },
];

// TEST CASE
console.log(tambahkanGrade(pendaftar));
