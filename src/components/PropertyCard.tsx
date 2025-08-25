// components/PropertyCard.tsx
import { motion } from "framer-motion";

interface PropertyCardProps {
  title: string;
  price: string;
  image: string;
  category: string;
  onClick: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  price,
  image,
  category,
  onClick,
}) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
    onClick={onClick}
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-green-700 font-bold text-lg">{title}</h3>
      <p className="text-green-600">{price}</p>
      <p className="text-sm text-green-500">{category}</p>
    </div>
  </motion.div>
);

export default PropertyCard;
