// components/Lightbox.tsx
import { motion } from "framer-motion";

interface LightboxProps {
  image: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ image, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
    onClick={onClose}
  >
    <motion.img
      src={image}
      alt="property"
      className="max-w-3xl max-h-[80vh] rounded-lg shadow-lg"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
    />
  </motion.div>
);

export default Lightbox;
