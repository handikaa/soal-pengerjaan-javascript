/* 
  Author: zikrimansyursyah
  
  Case : anda diminta untuk membuat fungsi yang dapat menghitung total pendapatan, produk terlaris, dan rata-rata harga produk

  Example Input: (data pada variabel transactions)

  Expected Output: 
  - Total Pendapatan:  5500000
  - Produk Terlaris : Baju
  - Rata-rata Harga Produk : 175000

  Notes: 
  - dilarang menggunakan array prototype seperti .map() .reduce() .filter() dll
  - tampikan expected output dengan console.log()
*/

function totalPendapatan(transactions) {
  // kofigurasi parameter sesuai kebutuhan anda
  // masukan logika disini

  let total = 0;

  for (let i = 0; i < transactions.length; i++) {
    const data = transactions[i];

    let subtotal = data.harga * data.jumlah;
    total += subtotal;
  }

  return total; // kembalikan hasil logika disini
}

function produkTerlaris(transactions) {
  // kofigurasi parameter sesuai kebutuhan anda
  // masukan logika disini

  const produkList = []; // variabel to set product list
  const totalQty = []; // variabel to set product qty

  for (let i = 0; i < transactions.length; i++) {
    const t = transactions[i];
    const namaProduk = t.produk;
    const qty = t.jumlah;

    let idx = -1;
    for (let j = 0; j < produkList.length; j++) {
      if (produkList[j] === namaProduk) {
        idx = j;
        break;
      }
    }

    if (idx === -1) {
      produkList[produkList.length] = namaProduk;
      totalQty[totalQty.length] = qty;
    } else {
      totalQty[idx] = totalQty[idx] + qty;
    }
  }

  let maxIdx = 0;
  for (let i = 1; i < totalQty.length; i++) {
    if (totalQty[i] > totalQty[maxIdx]) {
      maxIdx = i;
    }
  }

  return produkList[maxIdx]; // kembalikan hasil logika disini
}

function rataRataHarga(transactions) {
  // kofigurasi parameter sesuai kebutuhan anda
  /// masukan logika disini

  let totalHarga = 0;
  let count = 0;

  for (let i = 0; i < transactions.length; i++) {
    totalHarga += transactions[i].harga;
    count++;
  }
  if (count === 0) return 0;
  return totalHarga / count; // kembalikan hasil logika disini
}

// CASE VALUE
const transactions = [
  { tanggal: "2023-01-05", produk: "Baju", jumlah: 5, harga: 150000 },
  { tanggal: "2023-01-10", produk: "Celana", jumlah: 3, harga: 200000 },
  { tanggal: "2023-02-15", produk: "Baju", jumlah: 2, harga: 150000 },
  { tanggal: "2023-03-20", produk: "Sepatu", jumlah: 4, harga: 300000 },
  { tanggal: "2023-03-22", produk: "Topi", jumlah: 6, harga: 50000 },
  { tanggal: "2023-04-10", produk: "Celana", jumlah: 2, harga: 200000 },
  { tanggal: "2023-04-15", produk: "Baju", jumlah: 3, harga: 150000 },
  { tanggal: "2023-05-05", produk: "Sepatu", jumlah: 1, harga: 300000 },
  { tanggal: "2023-05-10", produk: "Topi", jumlah: 4, harga: 50000 },
  { tanggal: "2023-06-15", produk: "Celana", jumlah: 5, harga: 200000 },
];

// TEST CASE
console.log("Total Saldo Akhir :", totalPendapatan(transactions));
console.log("Transaksi Terbanyak :", produkTerlaris(transactions));
console.log("Total Transaksi Januari :", rataRataHarga(transactions, "Januari"));
