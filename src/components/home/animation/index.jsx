import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const texts = ["Dispetcherlar", "Yuk egalari", "Mashina egalari"];
const MotionSpan = motion.span;

const AnimatedWords = () => {
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const currentText = texts[index];

    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const delay = setTimeout(() => {
        setCharIndex(0);
        setDisplayedText("");
        setIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(delay);
    }
  }, [charIndex, index]);

  return (
    <MotionSpan
      className="text-[#46A358] text-[70px] font-bold"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      <span className="animate-pulse">_</span>
    </MotionSpan>
  );
};

export default AnimatedWords;
