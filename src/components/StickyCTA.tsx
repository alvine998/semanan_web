// components/StickyCTA.tsx
import { motion } from "framer-motion";

const StickyCTA = () => (
  <motion.a
    href="/contact"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 1 }}
    className="fixed bottom-6 right-6 px-6 py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition z-50"
  >
    Hubungi Kami
  </motion.a>
);

export default StickyCTA;
