// components/TeamCard.tsx
import { motion } from "framer-motion";

interface TeamCardProps {
  name: string;
  role: string;
  img: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, img }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-4 rounded-lg shadow-md text-center"
  >
    <img
      src={img}
      alt={name}
      className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
    />
    <h3 className="text-green-700 font-bold">{name}</h3>
    <p className="text-green-600">{role}</p>
  </motion.div>
);

export default TeamCard;
