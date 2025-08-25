import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  // state loading untuk skeleton
  const [loadingImages, setLoadingImages] = useState(
    [true, true, true, true, true, true] // jumlah sesuai jumlah image di galeri
  );

  const handleImageLoad = (idx: number) => {
    const newLoading = [...loadingImages];
    newLoading[idx] = false;
    setLoadingImages(newLoading);
  };

  const galleryImages = [
    "/images/house1.jpg",
    "/images/house2.jpg",
    "/images/house3.jpg",
  ];

  return (
    <>
      <Navbar />
      <main className="pt-16 bg-green-50 relative">
        {/* Hero Section */}
        <section className="relative bg-green-100 h-screen flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl font-bold text-green-700 mb-4">
              Hunian Impian Anda di Jakarta
            </h1>
            <p className="text-green-800 mb-6">
              Rumah nyaman, lingkungan hijau, fasilitas lengkap
            </p>
            <a
              href="/gallery"
              className="bg-green-500 text-white px-6 py-3 rounded font-semibold hover:bg-green-600 transition"
            >
              Lihat Properti
            </a>
          </motion.div>
        </section>

        {/* Tentang Singkat */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <motion.h2
            className="text-3xl font-bold text-green-700 text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Tentang Kami
          </motion.h2>
          <motion.p
            className="text-green-800 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Kami adalah developer properti terpercaya yang menghadirkan hunian
            nyaman dengan lingkungan hijau dan fasilitas modern. Dengan
            pengalaman bertahun-tahun, kami memastikan setiap rumah menjadi
            tempat tinggal yang ideal bagi keluarga Anda.
          </motion.p>
        </section>

        {/* Keunggulan */}
        <section className="bg-green-50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-green-700 text-center mb-12">
              Keunggulan Kami
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Lingkungan Hijau",
                  desc: "Area hijau yang luas dan asri.",
                  icon: "/icons/tree.svg",
                },
                {
                  title: "Fasilitas Lengkap",
                  desc: "Kolam renang, gym, dan playground.",
                  icon: "/icons/facility.svg",
                },
                {
                  title: "Akses Mudah",
                  desc: "Dekat jalan utama & transportasi umum.",
                  icon: "/icons/map.svg",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                >
                  <Image
                    src={item.icon}
                    width={60}
                    height={60}
                    alt={item.title}
                    className="mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-green-700 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-green-800">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Galeri Preview dengan Skeleton */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <h2 className="text-3xl font-bold text-green-700 text-center mb-12">
            Properti Unggulan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((src, idx) => (
              <motion.div
                key={idx}
                className="rounded-lg overflow-hidden shadow-lg relative"
                whileHover={{ scale: 1.05 }}
              >
                {loadingImages[idx] && (
                  <div className="absolute inset-0 bg-green-200 animate-pulse" />
                )}
                <Image
                  src={src}
                  width={400}
                  height={300}
                  alt="Properti"
                  className={`object-cover transition-opacity duration-500 ${
                    loadingImages[idx] ? "opacity-0" : "opacity-100"
                  }`}
                  onLoadingComplete={() => handleImageLoad(idx)}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimoni */}
        <section className="bg-green-50 py-20">
          <h2 className="text-3xl font-bold text-green-700 text-center mb-12">
            Testimoni Pelanggan
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                name: "Budi",
                comment: "Rumahnya nyaman, lingkungan hijau dan bersih!",
              },
              {
                name: "Siti",
                comment: "Fasilitas lengkap, anak-anak senang bermain.",
              },
              { name: "Andi", comment: "Proses pembelian mudah dan cepat." },
            ].map((t, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <p className="text-green-800 italic">"{t.comment}"</p>
                <h4 className="mt-4 font-bold text-green-700">{t.name}</h4>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Kontak */}
        <section className="bg-green-500 py-20 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Tertarik untuk mengetahui lebih lanjut?
          </h2>
          <a
            href="/contact"
            className="bg-white text-green-600 px-6 py-3 rounded font-semibold hover:bg-green-100 transition"
          >
            Hubungi Kami Sekarang
          </a>
        </section>

        <StickyCTA />
      </main>
      <Footer />
    </>
  );
}
