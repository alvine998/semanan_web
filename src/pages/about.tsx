// pages/about.tsx (bagian awal)
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import TeamCard from "@/components/TeamCard";
import MilestoneCounter from "@/components/MilestoneCounter";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="h-96 bg-green-100 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-2xl"
          >
            <h1 className="text-5xl font-bold text-green-700 mb-4">
              Tentang Semanan Premiere
            </h1>
            <p className="text-green-600 text-lg">
              Menjadi penyedia hunian modern dan hijau dengan kualitas terbaik
              untuk keluarga Indonesia.
            </p>
          </motion.div>
        </section>

        <section className="py-20 bg-green-50">
          <h2 className="text-3xl text-center font-bold text-green-700 mb-10">
            Sejarah Kami
          </h2>
          <div className="max-w-4xl mx-auto relative">
            <div className="border-l-2 border-green-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>
            {[
              {
                year: "2020",
                title: "Didirikan",
                desc: "Midland Properti didirikan untuk memberikan hunian berkualitas.",
              },
              {
                year: "2021",
                title: "Ekspansi",
                desc: "Meluncurkan proyek perumahan pertama di Jakarta Utara.",
              },
              {
                year: "2023",
                title: "Inovasi Hijau",
                desc: "Memperkenalkan desain ramah lingkungan.",
              },
              {
                year: "2024",
                title: "Semanan Premiere",
                desc: "Terciptanya Semanan Premiere sebagai proyek unggulan.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`mb-10 w-full md:w-1/2 ${
                  idx % 2 === 0 ? "md:ml-auto md:pr-8" : "md:mr-auto md:pl-8"
                }`}
              >
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                  <h3 className="text-green-700 font-bold text-xl">
                    {item.year} - {item.title}
                  </h3>
                  <p className="text-green-600 mt-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-20 bg-white">
          <h2 className="text-3xl text-center font-bold text-green-700 mb-10">
            Visi & Misi
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-green-50 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-green-700 font-bold text-xl mb-3">Visi</h3>
              <p className="text-green-600">
                Menjadi perusahaan properti hijau terpercaya dengan hunian
                berkualitas untuk keluarga Indonesia.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-green-50 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-green-700 font-bold text-xl mb-3">Misi</h3>
              <ul className="list-disc list-inside text-green-600">
                <li>Menyediakan hunian modern dengan lingkungan hijau.</li>
                <li>Memberikan pelayanan pelanggan yang prima.</li>
                <li>Memanfaatkan teknologi untuk hunian nyaman dan efisien.</li>
              </ul>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-green-50">
          <h2 className="text-3xl text-center font-bold text-green-700 mb-10">
            Tim Profesional
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
            {[
              {
                name: "Ikna Abdul Kholik",
                role: "CEO/Founder",
                img: "/team1.jpg",
              },
              {
                name: "Dadang Suhendar",
                role: "COO/Co-Founder",
                img: "/team2.jpg",
              },
            ].map((member, idx) => (
              <TeamCard key={idx} {...member} />
            ))}
          </div>
        </section>

        <section className="py-20 bg-white">
          <h2 className="text-3xl text-center font-bold text-green-700 mb-10">
            Prestasi Kami
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
            {[
              { label: "Rumah Terselesaikan", value: 500 },
              { label: "Pelanggan Puas", value: 450 },
              { label: "Proyek Berjalan", value: 12 },
              { label: "Tim Profesional", value: 25 },
            ].map((item, idx) => (
              <MilestoneCounter key={idx} {...item} />
            ))}
          </div>
        </section>

        <section className="py-20 bg-green-100 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Bergabung dengan Kami
            </h2>
            <p className="text-green-600 mb-6">
              Dapatkan hunian impian Anda bersama Midland Properti.
            </p>
            <a
              href="/contact"
              className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
            >
              Hubungi Kami
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
