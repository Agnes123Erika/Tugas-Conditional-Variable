//
const Siswa = 35;
const Keterangan = Siswa > 50 ? "Banyak" : Siswa <= 30 ? "Sedang" : "Sedikit";
console.log(Keterangan);

// Operator Logika
const kondisiAnd = Siswa < 50 && "Sekolah Kecil";
const kondisiOr = Siswa > 50 || "Sekolah Menengah";
console.log(kondisiAnd);
console.log(kondisiOr);

//
const listMakanan = [
  {
    Nama: "Nasi Goreng",
    Harga: 10000,
  },
  {
    Nama: "Mie Goreng",
    Harga: 8000,
  },
  {
    Nama: "Ayam Goreng",
    Harga: 15000,
  },
  {
    Nama: "Ikan Goreng",
    Harga: 20000,
  },
];

const listHarga = listMakanan.map((makanan) => makanan.Harga);
const totalHarga = listHarga.reduce((a, b) => a + b);
console.log(listHarga);
console.log(totalHarga);

function formatHarga(harga) {
  return "Rp " + harga.toLocaleString("id-ID");
}

function cetakDaftarMakanan(listMakanan) {
  for (const makanan of listMakanan) {
    console.log(`${makanan.Nama} - ${formatHarga(makanan.Harga)}`);
  }
}

cetakDaftarMakanan(listMakanan);

const listNamaHarga = listMakanan.map(
  (makanan) => `${makanan.Nama} - ${formatHarga(makanan.Harga)}`
);
console.log(listNamaHarga);
