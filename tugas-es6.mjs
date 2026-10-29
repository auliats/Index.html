// 1. Definisi data array of objects transaksi belanja (minimal 6 data)
const transaksiBelanja = [
    { id: 1, barang: "Laptop ADVAN", harga: 7500000, qty: 1, kategori: "Elektronik" },
    { id: 2, barang: "Handphone Samsung", harga: 150000, qty: 2, kategori: "Elektronik" },
    { id: 3, barang: "Kemeja Oversized", harga: 175000, qty: 3, kategori: "Pakaian" },
    { id: 4, barang: "Celana Baggy Jeans", harga: 250000, qty: 1, kategori: "Pakaian" },
    { id: 5, barang: "Momoyo", harga: 120000, qty: 2, kategori: "Konsumsi" },
    { id: 6, barang: "Bando Hijab Polkadot", harga: 15000, qty: 5, kategori: "Aksesoris" }
];

console.log("=== DATA SELURUH TRANSAKSI BELANJA ===");
console.table(transaksiBelanja);

// 2. Menggunakan filter() dengan Arrow Function & Destructuring untuk menyaring kategori tertentu (Contoh: "Pakaian")
const kategoriTarget = "Pakaian";
const filterKategori = transaksiBelanja.filter(({ kategori }) => kategori === kategoriTarget);

console.log(`\n=== HASIL FILTER (Kategori: ${kategoriTarget}) ===`);
console.table(filterKategori);

// 3. Menggunakan map() untuk menghitung subtotal (harga * qty) tiap barang pada seluruh data
const transaksiDenganSubtotal = transaksiBelanja.map(({ id, barang, harga, qty, kategori }) => {
    return {
        id,
        barang,
        harga,
        qty,
        kategori,
        subtotal: harga * qty
    };
});

console.log("\n=== DATA TRANSAKSI DENGAN SUBTOTAL (harga * qty) ===");
console.table(transaksiDenganSubtotal);

// 4. Menggunakan reduce() untuk menghitung total keseluruhan dari seluruh subtotal belanja
const totalKeseluruhan = transaksiDenganSubtotal.reduce((accumulator, { subtotal }) => {
    return accumulator + subtotal;
}, 0);

console.log("\n========================================");
console.log(`TOTAL KESELURUHAN BELANJA: Rp ${totalKeseluruhan.toLocaleString('id-ID')}`);
console.log("========================================");