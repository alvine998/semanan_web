// components/Hero.tsx
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]); // parallax effect

  return (
    <section className="h-screen relative overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 bg-green-100 flex items-center justify-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="text-center max-w-2xl">
          <h1 className="text-5xl font-bold text-green-700 mb-4">Hunian Nyaman & Asri</h1>
          <p className="text-green-600 mb-6">Solusi rumah idaman dengan lingkungan hijau dan fasilitas modern.</p>
          <a href="/contact" className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition">Hubungi Kami</a>
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
    </section>
  );
};

export default Hero;
