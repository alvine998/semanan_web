// components/MilestoneCounter.tsx
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

interface MilestoneProps {
  label: string;
  value: number;
}

const MilestoneCounter: React.FC<MilestoneProps> = ({ label, value }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 1500;
      const incrementTime = 50;
      const step = Math.ceil(end / (duration / incrementTime));
      const counter = setInterval(() => {
        start += step;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(start);
        }
      }, incrementTime);
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="bg-green-50 p-6 rounded-lg shadow-md text-center">
      <h3 className="text-green-700 font-bold text-3xl">{count}+</h3>
      <p className="text-green-600 mt-2">{label}</p>
    </div>
  );
};

export default MilestoneCounter;
