import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 pt-10 items-center xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="display flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="hero image"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>Usaha tidak menghianati Hasil test vercel</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi,Saya Leo satria</h1>
          <p className="text-base/loose mb-6 opacity-50">
            Berdasarkan jalur yang Anda berikan, berikut adalah perintah lengkap
            yang bisa Anda jalankan di terminal Laragon untuk menimpa database
            smesta_id dengan file SQL yang baru. Setelah Anda menjalankan
            perintah ini, tunggu beberapa saat. Tergantung pada ukuran file
            .sql, proses ini mungkin memakan waktu beberapa detik hingga
            beberapa menit. Jika tidak ada pesan error yang muncul, berarti
            proses penimpaan database telah berhasil.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href=""
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href=""
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[400px] md:ml-auto"
          loading="lazy"
        />
      </div>

      {/* About */}
      <div className="about mt-32 py-10">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg ">
          <img
            src={DataImage.HeroImage}
            alt="Hero Image"
            className="w-12 rounded-md mb-10 sm:hidden"
          />
          <p className="text-base/loose mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa earum
            dolorem inventore amet neque, sed nisi nemo, quaerat esse accusamus
            laboriosam aliquid possimus provident? Accusantium sunt
            necessitatibus possimus eligendi voluptates id hic excepturi
            voluptas corporis, neque mollitia quis reprehenderit enim doloremque
            velit illum illo eaque ea. Quidem in laudantium officia sit labore
            fuga error beatae, tempora suscipit quae quasi magni eius alias
            blanditiis mollitia magnam praesentium, ex culpa voluptate adipisci
            earum laboriosam facilis! Deserunt, culpa eum? Numquam sed laborum
            quaerat cupiditate ipsam hic fuga facilis saepe natus illum dicta
            accusamus reprehenderit, vitae reiciendis minima similique pariatur
            expedita? Aspernatur nam quam, voluptas quaerat placeat tenetur
            sapiente consectetur. Ut voluptates sunt ratione quibusdam dicta in
            cumque saepe. Laudantium natus suscipit aut eum, alias optio illum.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md sm:block hidden "
            />
            <div className="flex items-center gap-6 ">
              <div>
                <h1 className="text-4xl mb-1 ">
                  45<span className="text-violet-500"></span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1 ">
                  4 <span className="text-violet-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4 ">Tools Yang dipakai</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50 ">
            Berikut tools tool yang dipakai dalam membuat website
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-3 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
                key={tool.id}
              >
                <img
                  src={tool.gambar}
                  alt="tools image"
                  className="w-14 bg-zinc-800 p-1 gorup-hover:bg-zinc-900 "
                />
                <div>
                  <h4 className="font-bold text-xl">{tool.nama}</h4>
                  <p className="opacity-50 ">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* proyek */}
      <div className="proyek mt-32 py-10">
        <h1 className="text-center text-4xl font-bold mb-2 ">Proyek</h1>
        <p className="text-base/loose text-center opacity-50 ">
          beberapa proyek yang saya kerjakan
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
          {listProyek.map((proyek) => (
            <div key={proyek.id} className="p-4 bg-zinc-800 ">
              <img src={proyek.gambar} alt="proyek" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4 ">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2 ">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center ">
                  <a
                    href=""
                    className="bg-violet-700 p-4 rounded-lg block border border-zinc-600 hover:bg-violet-600"
                  >
                    {" "}
                    Lihat website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* contact */}
      <div className="kontak mt-32 p-10 ">Contact</div>
    </>
  );
}

export default App;
