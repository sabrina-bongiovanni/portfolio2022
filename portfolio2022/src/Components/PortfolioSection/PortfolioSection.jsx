import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Homepage from "../Homepage/Homepage";
import About from "../About/About";

const PortfolioSection = ({ currentLocale }) => {
  const sections = [
    { content: <Homepage currentLocale={currentLocale} />, duration: 1 },
    { content: <About currentLocale={currentLocale} />, duration: 4 }, // Lasts 2 units (longer)
    { content: "Section 3", duration: 1 }, // Lasts 1 unit
    { content: "Section 4", duration: 3 }, // Lasts 3 units (even longer)
  ];

  const totalDuration = sections.reduce(
    (acc, section) => acc + section.duration,
    0
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollUnit = scrollPosition / windowHeight;

      let cumulativeDuration = 0;
      for (let i = 0; i < sections.length; i++) {
        cumulativeDuration += sections[i].duration;
        if (scrollUnit < cumulativeDuration) {
          setActiveIndex(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ position: "relative", height: `${totalDuration * 100}vh` }}>
      {sections.map((section, index) => (
        <motion.div
          key={index}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            opacity: activeIndex === index ? 1 : 0,
            pointerEvents: activeIndex === index ? "auto" : "none",
          }}
          animate={{ opacity: activeIndex === index ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={
              activeIndex === index
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {section.content}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default PortfolioSection;
