import DataImage from "./data";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 pt-10 items-center xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="display flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"/>
            <q>Usaha tidak menghianati Hasil test vercel</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi,Saya Leo satria</h1>
          <p className="text-base/loose mb-6 opacity-50">Berdasarkan jalur yang Anda berikan, berikut adalah perintah lengkap yang bisa Anda jalankan di terminal Laragon untuk menimpa database smesta_id dengan file SQL yang baru. Setelah Anda menjalankan perintah ini, tunggu beberapa saat. Tergantung pada ukuran file .sql, proses ini mungkin memakan waktu beberapa detik hingga beberapa menit. Jika tidak ada pesan error yang muncul, berarti proses penimpaan database telah berhasil.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">Download CV <i className="ri-download-line ri-lg"></i></a>
            <a href="" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i></a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[400px] md:ml-auto" />
      </div>
    </>
  );
}

export default App
