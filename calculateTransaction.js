/* 
  Author: zikrimansyursyah
  
  Case : anda diminta untuk membuat fungsi yang dapat menghitung total saldo akhir, transaksi terbanyak kredit atau debit, dan transaksi perbulan

  Example Input: (data pada variabel transactions)

  Expected Output: 
  - Total Saldo Akhir : 310
  - Transaksi Terbanyak : debit
  - Total Transaksi Januari : 300

  Notes: 
  - dilarang menggunakan array prototype seperti .map() .reduce() .filter() dll
  - tampilkan expected output dengan console.log()
*/

function totalSaldo(transactions) {
  // kofigurasi parameter sesuai kebutuhan anda
  // masukan logika disini
  let totalSaldo = 0;

  for (let i = 0; i < transactions.length; i++) {
    let saldo = transactions[i];
    if (saldo.jenis == "debit") {
      totalSaldo = totalSaldo - saldo.jumlah;
    } else {
      totalSaldo = totalSaldo + saldo.jumlah;
    }
  }

  return totalSaldo;
}

function transaksiTerbanyak(transactions) {
  let totalDebit = [];
  let totalKredit = [];

  for (let i = 0; i < transactions.length; i++) {
    let transaction = transactions[i];
    if (transaction.jenis == "debit") {
      totalDebit.push(transaction.jenis);
    } else {
      totalKredit.push(transaction.jenis);
    }
  }

  if (totalDebit.length > totalKredit.length) {
    return "Debit";
  } else if (totalDebit.length == totalKredit.length) {
    return "Jumlah Kredit dan Debit Sama";
  } else if (totalDebit.length < totalKredit.length) {
    return "Kredit";
  } else {
    return "Tidak diketahui";
  }
}

function totalTransaksiBulan(transactions, targetBulan) {
  // kofigurasi parameter sesuai kebutuhan anda
  // masukan logika disini
  let targetMM = "";

  if (targetBulan === "Januari") targetMM = "01";
  else if (targetBulan === "Februari") targetMM = "02";
  else if (targetBulan === "Maret") targetMM = "03";
  else if (targetBulan === "April") targetMM = "04";
  else if (targetBulan === "Mei") targetMM = "05";
  else if (targetBulan === "Juni") targetMM = "06";
  else if (targetBulan === "Juli") targetMM = "07";
  else if (targetBulan === "Agustus") targetMM = "08";
  else if (targetBulan === "September") targetMM = "09";
  else if (targetBulan === "Oktober") targetMM = "10";
  else if (targetBulan === "November") targetMM = "11";
  else if (targetBulan === "Desember") targetMM = "12";
  else return 0;

  let total = 0;

  for (let i = 0; i < transactions.length; i++) {
    const t = transactions[i];

    const bulanMM = t.tanggal.slice(5, 7);

    if (bulanMM === targetMM) {
      total += t.jumlah;
    }
  }

  return total;
}

// CASE VALUE
const transactions = [
  { tanggal: "2023-01-05", jumlah: 200, jenis: "debit" },
  { tanggal: "2023-01-10", jumlah: 100, jenis: "kredit" },
  { tanggal: "2023-02-15", jumlah: 150, jenis: "debit" },
  { tanggal: "2023-03-20", jumlah: 300, jenis: "kredit" },
  { tanggal: "2023-03-22", jumlah: 50, jenis: "debit" },
  { tanggal: "2023-04-10", jumlah: 200, jenis: "kredit" },
  { tanggal: "2023-04-15", jumlah: 100, jenis: "debit" },
  { tanggal: "2023-05-05", jumlah: 150, jenis: "kredit" },
  { tanggal: "2023-05-10", jumlah: 120, jenis: "debit" },
  { tanggal: "2023-06-15", jumlah: 180, jenis: "kredit" },
];

// TEST CASE
console.log("Total Saldo Akhir :", totalSaldo(transactions));
console.log("Transaksi Terbanyak :", transaksiTerbanyak(transactions));
console.log("Total Transaksi Januari :", totalTransaksiBulan(transactions, "Januari"));
