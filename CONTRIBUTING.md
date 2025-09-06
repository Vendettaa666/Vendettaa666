## 📌 Commit Convention

Agar riwayat commit lebih jelas dan konsisten, gunakan prefix berikut:

### 🔧 Prefix Utama (Conventional Commits)
- **feat:** ✨ menambahkan fitur baru  
  _contoh: `feat: tambah fitur login user`_

- **fix:** 🐛 memperbaiki bug/error  
  _contoh: `fix: perbaiki validasi password`_

- **docs:** 📖 perubahan dokumentasi (README, wiki, dsb.)  
  _contoh: `docs: update petunjuk instalasi`_

- **style:** 🎨 perubahan format/tampilan code (indentasi, spacing) tanpa mengubah logic  
  _contoh: `style: rapikan indentasi di controller`_

- **refactor:** ♻️ perombakan struktur code tanpa menambah fitur/bugfix  
  _contoh: `refactor: pisahkan service dari controller`_

- **perf:** ⚡️ peningkatan performa  
  _contoh: `perf: optimalkan query user`_

- **test:** ✅ menambahkan/memperbaiki unit test atau integration test  
  _contoh: `test: tambah unit test fungsi login`_

- **chore:** 🔧 pekerjaan kecil (update deps, konfigurasi, build system, dll.)  
  _contoh: `chore: update dependency laravel ke versi 11`_

---

### ⚡️ Prefix Tambahan (Opsional)
- **add:** ➕ menambahkan file/fungsi baru  
- **update:** 🔄 memperbarui sesuatu (fitur, data, konfigurasi)  
- **remove:** ➖ menghapus file/fungsi  
- **adjust:** 🎯 penyesuaian minor (layout, teks, spacing)  
- **hotfix:** 🚑 perbaikan darurat di production  
- **merge:** 🔀 hasil merge branch  
- **revert:** ⏪ membatalkan commit sebelumnya  
- **ci:** 🤖 perubahan pada CI/CD (GitHub Actions, GitLab CI)  
- **build:** 🏗 perubahan pada sistem build (npm, composer, vite, dll.)  

---

⚠️ **Tips:**
- Gunakan bahasa yang konsisten (Indonesia/Inggris).  
- Gunakan present tense (contoh: `fix bug`, bukan `fixed bug`).  
- Jika perubahan besar, gunakan deskripsi tambahan di bawah commit.  

