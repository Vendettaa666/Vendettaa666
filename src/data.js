import HeroImage from "/assets/my-image.jpg";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
// import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/mysql.png";
import Tools13 from "/assets/tools/postgressql.png";
import Tools14 from "/assets/tools/dart.png";
import Tools15 from "/assets/tools/laravel.png";
import Tools16 from "/assets/tools/flutter.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  // {
  //   id: 9,
  //   gambar: Tools9,
  //   nama: "Adobe Illustrator",
  //   ket: "Design App",
  //   dad: "900",
  // },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Mysql",
    ket: "Database",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "PostresSql",
    ket: "Database",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "Dart",
    ket: "Language",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "Laravel",
    ket: "Framework",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "Flutter",
    ket: "Framework",
    dad: "1600",
  },
];

import Proyek1 from "/assets/proyek/bukutahunansiswa.png";
import Proyek2 from "/assets/proyek/simpadwebsite.png";
import Proyek3 from "/assets/proyek/smestawebsite.png";
import Proyek4 from "/assets/proyek/misiwebsite.png";
import Proyek5 from "/assets/proyek/websitesagti.png";
import Proyek6 from "/assets/proyek/empowerin.png";
import Proyek7 from "/assets/proyek/cvalpanagrojaya.png";
import Proyek8 from "/assets/proyek/blessingstore.png"

// import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Buku Tahunan Siswa",
    desk: "Buku Tahunan Siswa SMKN 1 LUMAJANG",
    tools: ["HTML", "CSS", "Javascript", "PHP"],
    dad: "200",
    url: "https://jurnalistik.smkn1lmj.sch.id/bts-smk/",
    note: "Note: This project is a school assignment and is not a commercial project.",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Website Simpad",
    desk: "Website Pajak Daerah Kabupaten Kudus",
    tools: ["Laravel", "Bootstrap", "Javascript", "PHP"],
    dad: "300",
    url: "https://staging-simpadkuduskab.nusantaratama.com/",
    note: "Note: Project Magang Mengganti FRONT END dan Menambah beberapa Fitur.",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Smesta Website",
    desk: "E-Catalog UKM",
    tools: ["Laravel", "Tailwind", "Javascript", "PHP"],
    dad: "400",
    url: "https://staging-smesta.nusantaratama.com/",
    note: "Note:  Project Magang Mengganti FRONT END dan Menambah beberapa Fitur.",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Misi Website",
    desk: "Aplikasi Manajemen Informasi Peserta Magang Tamara Management",
    tools: ["Laravel", "Bootstrap", "Javascript", "PHP"],
    dad: "500",
    url: "https://dev-misi.nusantaratama.com/",
    note: "Note:  Project Magang Mengganti FRONT END dan Menambah beberapa Fitur.",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Website Sagti",
    desk: "APLIKASI E COMMERCE CV SAGTI",
    tools: ["Laravel", "Tailwind", "Javascript", "PHP"],
    dad: "600",
    url: "https://staging-depo.nusantaratama.com/",
    note: "Note:  Project Magang Mengganti FRONT END dan Menambah beberapa Fitur.",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Empowerin",
    desk: "APLIKASI BAKTI SOSIAL DAN PELATIHAN",
    tools: ["Laravel", "Tailwind", "Javascript", "PHP"],
    dad: "700",
    url: "https://staging-empowerin.tamaramanagement.co.id/",
    note: "Note:  Project Website Internal CV. Nusantara Tama.",
  },
  {
    id: 7,
    gambar: Proyek7,
    nama: "Alpan Agro Jaya",
    desk: "Company Profile Alpan Agro Jaya",
    tools: ["Next JS", "Tailwind", "Javascript", "Node JS"],
    dad: "800",
    url: "https://alpan-agro-jaya.vercel.app",
    note: "Note: Prjoect Company Profile Statis dengan Next JS.",
  },
  {
    id: 8,
    gambar: Proyek8,
    nama: "Blessing Store",
    desk: "Company Profile Blessing Store",
    tools: ["Next JS", "Tailwind", "Javascript", "Node JS"],
    dad: "900",
    url: "https://praktikum-sizie.vercel.app/",
    note: "Note: Prjoect Company Profile Statis dengan Next JS.",
  },
];
