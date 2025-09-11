import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  return (
    <>
      <div
        id="hero"
        className="hero grid lg:grid-cols-2 grid-cols-1 lg:gap-12 gap-8 pt-6 lg:pt-10 items-center min-h-screen lg:min-h-0"
      >
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <div className="display flex items-center justify-center lg:justify-start gap-3 mb-6 bg-zinc-800 w-fit mx-auto lg:mx-0 px-4 py-3 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="hero image"
              className="w-8 sm:w-10 rounded-md"
              loading="lazy"
            />
            <q className="text-xs sm:text-sm">Front end Developer</q>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
            Hi, Saya <span className="text-violet-400">Leo Satria</span>
          </h1>

          <h2 className="text-lg sm:text-xl lg:text-2xl text-violet-300 font-semibold mb-4 lg:mb-6">
            Front end Developer
          </h2>

          <p className="text-sm sm:text-base leading-relaxed mb-6 lg:mb-8 opacity-75 max-w-lg mx-auto lg:mx-0">
            Passionate web developer dengan 4+ tahun pengalaman dalam membangun
            aplikasi web modern. Spesialisasi dalam React, Node.js, dan
            teknologi terkini untuk menciptakan solusi digital yang inovatif.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
            <a
              href=""
              className="w-full sm:w-auto bg-violet-700 px-6 py-3 lg:px-8 lg:py-4 rounded-2xl hover:bg-violet-600 transition-colors duration-300 font-semibold text-center"
            >
              Download CV <i className="ri-download-line ri-lg ml-2"></i>
            </a>
            <a
              href="#proyek"
              className="w-full sm:w-auto bg-zinc-700 px-6 py-3 lg:px-8 lg:py-4 rounded-2xl hover:bg-zinc-600 transition-colors duration-300 font-semibold text-center"
            >
              Lihat Proyek <i className="ri-arrow-down-line ri-lg ml-2"></i>
            </a>
          </div>

          {/* Quick Stats */}
          <div className="flex items-center justify-center lg:justify-start gap-6 lg:gap-8 mt-8 lg:mt-12">
            <div className="text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-violet-400">
                2+
              </h3>
              <p className="text-xs lg:text-sm opacity-75">Projects</p>
            </div>
            <div className="w-px h-12 bg-zinc-600"></div>
            <div className="text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-violet-400">
                1+
              </h3>
              <p className="text-xs lg:text-sm opacity-75">Years Exp</p>
            </div>
            <div className="w-px h-12 bg-zinc-600"></div>
            <div className="text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-violet-400">
                100%
              </h3>
              <p className="text-xs lg:text-sm opacity-75">Satisfied</p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative">
            <img
              src={DataImage.HeroImage}
              alt="Leo Satria - Full Stack Developer"
              className="w-64 sm:w-80 lg:w-96 xl:w-[400px] rounded-2xl shadow-2xl"
              loading="lazy"
            />
            {/* Decorative elements */}
            <div className="absolute -z-10 top-4 left-4 w-full h-full bg-violet-500/20 rounded-2xl"></div>
            <div className="absolute -z-20 top-8 left-8 w-full h-full bg-violet-600/10 rounded-2xl"></div>
          </div>
        </div>
      </div>

      {/* About */}
      <div id="about" className="about mt-32 py-10">
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

      {/* Skills */}
      <div id="skills" className="skills mt-32 py-10">
        <h1 className="text-center text-4xl font-bold mb-4">Skills</h1>
        <p className="text-base/loose text-center opacity-50 xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full mx-auto">
          Keahlian teknis dan non-teknis yang saya miliki dalam pengembangan web
        </p>

        <div className="skills-container mt-14 grid lg:grid-cols-2 grid-cols-1 gap-8">
          {/* Technical Skills */}
          <div className="p-6 bg-zinc-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-violet-400">
              Technical Skills
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">HTML</span>
                  <span className="text-violet-400">90%</span>
                </div>
                <div className="w-full bg-zinc-700 rounded-full h-2">
                  <div
                    className="bg-violet-500 h-2 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">CSS</span>
                  <span className="text-violet-400">85%</span>
                </div>
                <div className="w-full bg-zinc-700 rounded-full h-2">
                  <div
                    className="bg-violet-500 h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">JAVASCRIPT</span>
                  <span className="text-violet-400">80%</span>
                </div>
                <div className="w-full bg-zinc-700 rounded-full h-2">
                  <div
                    className="bg-violet-500 h-2 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">
                    DATABASE
                  </span>
                  <span className="text-violet-400">75%</span>
                </div>
                <div className="w-full bg-zinc-700 rounded-full h-2">
                  <div
                    className="bg-violet-500 h-2 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">BOOTSTRAP / TAILWINDS</span>
                  <span className="text-violet-400">70%</span>
                </div>
                <div className="w-full bg-zinc-700 rounded-full h-2">
                  <div
                    className="bg-violet-500 h-2 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
                    {/* Technical Skills */}
          <div className="p-6 bg-zinc-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-violet-400">
              Technical Skills
            </h2>
            <div className="space-y-4">

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">PHP</span>
                  <span className="text-violet-400">70%</span>
                </div>
                <div className="w-full bg-zinc-700 rounded-full h-2">
                  <div
                    className="bg-violet-500 h-2 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">LARAVEL</span>
                  <span className="text-violet-400">90%</span>
                </div>
                <div className="w-full bg-zinc-700 rounded-full h-2">
                  <div
                    className="bg-violet-500 h-2 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">React/Next.js</span>
                  <span className="text-violet-400">85%</span>
                </div>
                <div className="w-full bg-zinc-700 rounded-full h-2">
                  <div
                    className="bg-violet-500 h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Node.js/Express</span>
                  <span className="text-violet-400">80%</span>
                </div>
                <div className="w-full bg-zinc-700 rounded-full h-2">
                  <div
                    className="bg-violet-500 h-2 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">
                    GIT & GITHUB
                  </span>
                  <span className="text-violet-400">75%</span>
                </div>
                <div className="w-full bg-zinc-700 rounded-full h-2">
                  <div
                    className="bg-violet-500 h-2 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>

      {/* proyek */}
      <div id="proyek" className="proyek mt-32 py-10">
        <h1 className="text-center text-4xl font-bold mb-2 ">Proyek</h1>
        <p className="text-base/loose text-center opacity-50 ">
          beberapa proyek yang saya kerjakan
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
          {listProyek.map((proyek) => (
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-lg">
              <img
                src={proyek.gambar}
                alt="proyek"
                loading="lazy"
                className="rounded-lg"
              />
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
                    href={proyek.url}
                    className="bg-violet-700 p-4 rounded-lg block border border-zinc-600 hover:bg-violet-600 transition-colors"
                  >
                    Lihat website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div id="kontak" className="kontak mt-64 py-10">
        <h1 className="text-center text-4xl font-bold mb-4">Contact</h1>
        <p className="text-base/loose text-center opacity-50 xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full mx-auto mb-14">
          Mari berdiskusi tentang proyek Anda. Saya siap membantu mewujudkan ide
          digital Anda
        </p>

        <div className="contact-container grid lg:grid-cols-2 grid-cols-1 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="p-6 bg-zinc-800 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 text-violet-400">
                Get In Touch
              </h2>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-zinc-700 rounded-lg hover:bg-zinc-600 transition-colors">
                  <i className="ri-mail-line ri-xl text-violet-400"></i>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="opacity-75">leoarkas@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-zinc-700 rounded-lg hover:bg-zinc-600 transition-colors">
                  <i className="ri-phone-line ri-xl text-violet-400"></i>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="opacity-75">+62 898-0354-156</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-zinc-700 rounded-lg hover:bg-zinc-600 transition-colors">
                  <i className="ri-map-pin-line ri-xl text-violet-400"></i>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="opacity-75">Lumajang - Jawatimur - Indonesia</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="font-semibold mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="p-3 bg-zinc-700 rounded-lg hover:bg-violet-600 transition-colors"
                  >
                    <i className="ri-github-line ri-xl"></i>
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-zinc-700 rounded-lg hover:bg-violet-600 transition-colors"
                  >
                    <i className="ri-linkedin-line ri-xl"></i>
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-zinc-700 rounded-lg hover:bg-violet-600 transition-colors"
                  >
                    <i className="ri-instagram-line ri-xl"></i>
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-zinc-700 rounded-lg hover:bg-violet-600 transition-colors"
                  >
                    <i className="ri-twitter-line ri-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-6 bg-zinc-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-violet-400">
              Send Message
            </h2>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Nama
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 bg-zinc-700 rounded-lg border border-zinc-600 focus:border-violet-500 focus:outline-none"
                    placeholder="Nama lengkap"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 bg-zinc-700 rounded-lg border border-zinc-600 focus:border-violet-500 focus:outline-none"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full p-3 bg-zinc-700 rounded-lg border border-zinc-600 focus:border-violet-500 focus:outline-none"
                  placeholder="Topik pesan"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Pesan
                </label>
                <textarea
                  rows="5"
                  className="w-full p-3 bg-zinc-700 rounded-lg border border-zinc-600 focus:border-violet-500 focus:outline-none resize-none"
                  placeholder="Tulis pesan Anda disini..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-violet-700 p-4 rounded-lg hover:bg-violet-600 transition-colors font-semibold"
              >
                Kirim Pesan <i className="ri-send-plane-line ri-lg ml-2"></i>
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-zinc-700 text-center">
          <p className="opacity-50">© 2025 Leo Satria. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default App;