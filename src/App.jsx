import DataImage from "./data";
import { listTools, listProyek } from "./data";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // <-- CSS untuk animasi
import FloatingLines from "./components/FloatingLine";
import Particles from "./components/Particle";
import ElectricBorder from "./components/ElectricBorder";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,        // durasi animasi (ms)
      easing: 'ease-in-out', // gaya transisi
      once: true,           // animasi hanya berjalan sekali
      mirror: false         // jangan animasi ulang saat scroll ke atas
    });
  }, []);

  return (
    <>
      <div
        id="hero"
        className="hero relative min-h-screen flex items-center px-10"
      >
        {/* Background FloatingLines Effect */}
        <div className="absolute inset-0 z-0">
            <Particles
            particleColors={[     
            '#ffffff', // pure star light
            '#f8f9fa', // soft white
            '#ffe066', // golden star
            '#ffd43b', // bright gold
            '#e9ecef', // subtle glow
              ]}
            particleCount={600}
            particleSpread={12}
            speed={0.08}
            particleBaseSize={80}
            alphaParticles={true}
            moveParticlesOnHover={true}
            disableRotation={false}
          />

          {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/70"></div> */}
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-12 items-center min-h-screen py-20">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <div className="hidden md:flex items-center justify-center lg:justify-start gap-3 mb-6 bg-slate-800 w-fit mx-auto lg:mx-0 px-4 py-3 rounded-2xl">
                <img
                  src={DataImage.HeroImage}
                  alt="hero image"
                  className="w-8 sm:w-10 rounded-md"
                  loading="lazy"
                />
                <q className="text-xs sm:text-sm">Front end Developer</q>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
                Hi, Saya <span className="text-blue-400">Leo Satria</span>
              </h1>

              <h2 className="text-lg sm:text-xl lg:text-2xl text-cyan-300 font-semibold mb-4 lg:mb-6">
                Front end Developer
              </h2>

              <p className="text-sm sm:text-base leading-relaxed mb-6 lg:mb-8 opacity-75 max-w-lg mx-auto lg:mx-0">
                🚀 Self-taught developer passionate about Laravel, Flutter, and exploring new tech.
                🎸 Music fuels my creativity especially dark, atmospheric, and heavy genres like NU metal & DSBM.
                ☕ I thrive on iced coffee and loud riffs while coding.
                🤝 Always open to collaboration, learning, and tackling new challenges!
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <a
                  href="#kontak"
                  className="w-full sm:w-auto bg-blue-600 px-6 py-3 lg:px-8 lg:py-4 rounded-2xl hover:bg-blue-500 transition-colors duration-300 font-semibold text-center"
                >
                  Contact Me <i className="ri-message-line ri-lg ml-2"></i>
                </a>
                <a
                  href="#proyek"
                  className="w-full sm:w-auto bg-slate-700 px-6 py-3 lg:px-8 lg:py-4 rounded-2xl hover:bg-slate-600 transition-colors duration-300 font-semibold text-center"
                >
                  Lihat Proyek <i className="ri-arrow-down-line ri-lg ml-2"></i>
                </a>
              </div>

              {/* Social Media Links */}
              <div className="flex items-center justify-center lg:justify-start gap-6 lg:gap-8 mt-8 lg:mt-12">
                <a
                  href="https://github.com/Vendettaa666/Vendettaa666"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <i className="ri-github-line ri-2x"></i>
                </a>
                <a
                  href="https://instagram.com/leoosatriaa"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <i className="ri-instagram-line ri-2x"></i>
                </a>
                <a
                  href="https://discord.com/users/770242596945395712"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <i className="ri-discord-line ri-2x"></i>
                </a>
                <a
                  href="https://tiktok.com/@vendettaa.666"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <i className="ri-tiktok-line ri-2x"></i>
                </a>
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
                {/* <div className="absolute -z-10 top-4 left-4 w-full h-full bg-blue-500/20 rounded-2xl"></div>   */}
                {/* <div className="absolute -z-20 top-8 left-8 w-full h-full bg-cyan-500/10 rounded-2xl"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About */}
      <div id="about" className="about mt-32 py-10 px-10">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto" data-aos="fade-up">
          <ElectricBorder 
            color="#00c6d0ff"
            speed={0.2}
            chaos={0.5}
            thickness={2}
            style={{ borderRadius: '0.5rem' }}
            className="w-full p-1"
          >
            <div className="p-7 bg-slate-800 rounded-lg overflow-hidden">
          <img
            src={DataImage.HeroImage}
            alt="Hero Image"
            className="w-12 rounded-md mb-10 sm:hidden"
          />
          <p className="text-base/loose mb-10">
            I am a student at SMKN 1 Lumajang. I am 18 years old and chose to major in Software Engineering because the RPL major aligns with my interests in becoming a full-stack programmer. I am currently interning at <a href="https://nusantaratama.com/" className="text-cyan-300">NUSANTARATAMA.COM</a>
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
                  4<span className="text-blue-500"></span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1 ">
                  1 <span className="text-blue-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>

            </div>
          </ElectricBorder>
        </div>

        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up">Tools Yang dipakai</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50 " data-aos="fade-up">
            Berikut tools tool yang dipakai dalam membuat website
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 " >
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-3 p-3 border border-slate-600 rounded-md hover:bg-slate-800 group" data-aos="fade-up"
                key={tool.id}
              >
                <img
                  src={tool.gambar}
                  alt="tools image"
                  className="w-14 bg-slate-800 p-1 gorup-hover:bg-slate-900 "
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
      <div id="skills" className="skills mt-32 py-10 px-10">
        <h1 className="text-center text-4xl font-bold mb-4" data-aos="fade-up">Skills</h1>
        <p className="text-base/loose text-center opacity-50 xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full mx-auto" data-aos="fade-up">
          Keahlian teknis dan non-teknis yang saya miliki dalam pengembangan web
        </p>

        <div className="skills-container mt-14 grid lg:grid-cols-2 grid-cols-1 gap-8">
          {/* Technical Skills */}
          <div className="p-6 bg-slate-800 rounded-lg" data-aos="fade-up">
            <h2 className="text-2xl font-bold mb-6 text-blue-400" >
              Technical Skills
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">HTML</span>
                  <span className="text-cyan-400">75%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">CSS</span>
                  <span className="text-cyan-400">65%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">JAVASCRIPT</span>
                  <span className="text-cyan-400">30%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full"
                    style={{ width: "30%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">
                    DATABASE
                  </span>
                  <span className="text-cyan-400">55%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full"
                    style={{ width: "55%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">BOOTSTRAP / TAILWINDS</span>
                  <span className="text-cyan-400">50%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          {/* Technical Skills */}
          <div className="p-6 bg-slate-800 rounded-lg" data-aos="fade-up">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">
              Technical Skills
            </h2>
            <div className="space-y-4">

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">PHP</span>
                  <span className="text-cyan-400">60%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">LARAVEL</span>
                  <span className="text-cyan-400">40%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">React/Next.js</span>
                  <span className="text-cyan-400">45%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Flutter</span>
                  <span className="text-cyan-400">20%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full"
                    style={{ width: "20%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">
                    GIT & GITHUB
                  </span>
                  <span className="text-cyan-400">80%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

      {/* proyek */}
      <div id="proyek" className="proyek mt-32 py-10 px-10">
        <h1 className="text-center text-4xl font-bold mb-2 " data-aos="fade-up">Proyek</h1>
        <p className="text-base/loose text-center opacity-50 " data-aos="fade-up">
          Beberapa proyek Front end yang saya kerjakan
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="p-4 bg-slate-800 rounded-lg flex flex-col"
              data-aos="fade-up"
            >
              <img
                src={proyek.gambar}
                alt="proyek"
                loading="lazy"
                className="rounded-lg w-full"
              />
              <div className="flex flex-col flex-grow justify-between mt-4">
                <div>
                  <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                  <p className="text-base/loose mb-4">{proyek.desk}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {proyek.tools.map((tool, index) => (
                      <p
                        className="py-1 px-3 border border-slate-500 bg-slate-600 rounded-md font-semibold"
                        key={index}
                      >
                        {tool}
                      </p>
                    ))}
                  </div>
                  <p className="text-xs/loose mb-4">{proyek.note}</p>
                </div>
                <div className="mt-2 text-center">
                  <a
                    href={proyek.url}
                    className="bg-blue-600 p-4 rounded-lg block border border-slate-600 hover:bg-blue-500 transition-colors"
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
      <div id="kontak" className="kontak mt-64 py-10 px-10">
        <h1 className="text-center text-4xl font-bold mb-4" data-aos="fade-up">Contact</h1>
        <p className="text-base/loose text-center opacity-50 xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full mx-auto mb-14" data-aos="fade-up">
          Mari berdiskusi tentang proyek Anda. Saya siap membantu mewujudkan ide
          digital Anda
        </p>

        <div className="contact-container flex justify-center items-center mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 w-full max-w-3xl">
            <div className="p-6 bg-slate-800 rounded-lg" data-aos="fade-up">
              <h2 className="text-2xl font-bold mb-6 text-blue-400">
                Get In Touch
              </h2>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
                  <i className="ri-mail-line ri-xl text-cyan-400"></i>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="opacity-75">leoarkas@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
                  <i className="ri-phone-line ri-xl text-cyan-400"></i>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="opacity-75">+62 898-0354-156</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
                  <i className="ri-map-pin-line ri-xl text-cyan-400"></i>
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
                    href="https://github.com/Vendettaa666/Vendettaa666"
                    className="p-3 bg-slate-700 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <i className="ri-github-line ri-xl"></i>
                  </a>
                  <a
                    href="https://instagram.com/leoosatriaa"
                    className="p-3 bg-slate-700 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <i className="ri-instagram-line ri-xl"></i>
                  </a>
                  <a
                    href="https://discord.com/users/770242596945395712"
                    className="p-3 bg-slate-700 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <i className="ri-discord-line ri-xl"></i>
                  </a>
                  <a
                    href="https://tiktok.com/@vendettaa.666"
                    className="p-3 bg-slate-700 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <i className="ri-tiktok-line ri-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {/* <div className="p-6 bg-slate-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">
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
                    className="w-full p-3 bg-slate-700 rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none"
                    placeholder="Nama lengkap"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 bg-slate-700 rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none"
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
                  className="w-full p-3 bg-slate-700 rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none"
                  placeholder="Topik pesan"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Pesan
                </label>
                <textarea
                  rows="5"
                  className="w-full p-3 bg-slate-700 rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none resize-none"
                  placeholder="Tulis pesan Anda disini..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 p-4 rounded-lg hover:bg-blue-500 transition-colors font-semibold"
              >
                Kirim Pesan <i className="ri-send-plane-line ri-lg ml-2"></i>
              </button>
            </form>
          </div> */}
        </div>

      </div>
    </>
  );
}

export default App;