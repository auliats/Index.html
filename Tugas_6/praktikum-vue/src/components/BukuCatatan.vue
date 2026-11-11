<script setup>
import { ref, computed } from 'vue'

const judulBuku = ref('')
const kategoriBuku = ref('Pemrograman')
const statusSelesai = ref(false)

const daftarBuku = ref([
  { id: 1, judul: 'Pemrograman Web Vue 3', kategori: 'Pemrograman', selesai: true },
  { id: 2, judul: 'Algoritma & Struktur Data', kategori: 'Sains', selesai: false }
])

const jumlahSelesai = computed(() => {
  return daftarBuku.value.filter(buku => buku.selesai).length
})

const tambahBuku = () => {
  if (!judulBuku.value.trim()) return

  daftarBuku.value.push({
    id: Date.now(),
    judul: judulBuku.value.trim(),
    kategori: kategoriBuku.value,
    selesai: statusSelesai.value
  })

  judulBuku.value = ''
  kategoriBuku.value = 'Pemrograman'
  statusSelesai.value = false
}

const hapusBuku = (id) => {
  daftarBuku.value = daftarBuku.value.filter(buku => buku.id !== id)
}
</script>

<template>
  <div class="container">
    <h2>📚 Buku Catatan Saya</h2>

    <form @submit.prevent="tambahBuku" class="form-buku">
      <div class="form-group">
        <label>Judul Buku:</label>
        <input 
          v-model="judulBuku" 
          type="text" 
          placeholder="Masukkan judul buku..." 
          required 
        />
      </div>

      <div class="form-group">
        <label>Kategori:</label>
        <select v-model="kategoriBuku">
          <option value="Pemrograman">Pemrograman</option>
          <option value="Sains">Sains</option>
          <option value="Fiksi">Fiksi</option>
          <option value="Pengembangan Diri">Pengembangan Diri</option>
        </select>
      </div>

      <div class="form-group checkbox-group">
        <label>
          <input type="checkbox" v-model="statusSelesai" />
          Sudah Selesai Dibaca
        </label>
      </div>

      <button type="submit" class="btn-submit">Tambah Buku</button>
    </form>

    <hr />

    <div class="summary">
      <p>Total Buku: <strong>{{ daftarBuku.length }}</strong></p>
      <p>Selesai Dibaca: <strong>{{ jumlahSelesai }}</strong> dari {{ daftarBuku.length }} buku</p>
    </div>

    <h3>Daftar Koleksi Buku</h3>
    <ul class="list-buku">
      <li v-for="buku in daftarBuku" :key="buku.id" class="item-buku">
        <div class="info-buku">
          <input type="checkbox" v-model="buku.selesai" />
          <span :class="{ 'selesai-text': buku.selesai }">
            <strong>{{ buku.judul }}</strong> — <em>{{ buku.kategori }}</em>
          </span>
        </div>
        <button @click="hapusBuku(buku.id)" class="btn-hapus">Hapus</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* 1. KONTEN UTAMA (Ukuran dan bentuk dikembalikan seperti semula, ditambah warna kuning pastel lembut) */
.container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: #fffbeb; /* Warna kuning pastel sangat lembut sebagai latar belakang */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #333333;
  font-family: Arial, sans-serif;
}

/* 2. JUDUL UTAMA */
h2 {
  color: #854d0e;
  margin-bottom: 1rem;
}

.form-buku {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.3rem;
}

/* 3. KOTAK INPUT & SELECT (Dikembalikan seperti semula) */
.form-group input[type="text"],
.form-group select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #ffffff; /* Kotak input tetap putih bersih */
  color: #333333;
}

.checkbox-group {
  flex-direction: row;
  align-items: center;
}

/* 4. TOMBOL TAMBAH BUKU (Diberi warna Pink Pastel) */
.btn-submit {
  padding: 0.6rem;
  background-color: #f472b6; /* Pink pastel yang cantik */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.btn-submit:hover {
  background-color: #ec4899;
}

/* 5. KOTAK RINGKASAN (Diberi nuansa pink pastel tipis) */
.summary {
  background: #fdf2f8; /* Pink pastel sangat muda */
  padding: 0.8rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  border: 1px solid #fbcfe8;
}

.list-buku {
  list-style: none;
  padding: 0;
}

.item-buku {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem;
  border-bottom: 1px solid #eee;
}

.info-buku {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.selesai-text {
  text-decoration: line-through;
  color: #888;
}

/* 6. TOMBOL HAPUS (Diberi warna pink/merah muda lembut) */
.btn-hapus {
  background-color: #fb7185; /* Pink kemerahan pastel */
  color: white;
  border: none;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  cursor: pointer;
}
</style>