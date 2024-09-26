import React, { useRef, useState, useEffect } from "react";
import { messages } from "../../i18n/messages";

import { useMediaQuery } from "react-responsive";

import pic from '../../media/picture.jpg?width="1000"';
import {
  easeInOut,
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useMotionValue,
  useInView,
  useAnimation,
} from "framer-motion";

const About = ({ currentLocale }) => {
  const aboutSectRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const controls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: aboutSectRef,
    offset: ["0vh", "100vh"],
  });

  console.log(scrollYProgress.current);

  // // Flip animation sequence
  // const flipSequence = async () => {
  //   setIsFlipping(true);
  //   await controls.start({
  //     rotateY: 720, // 2 flips (720 degrees)
  //     transition: { duration: 1, ease: "easeInOut" },
  //   });
  //   setIsFlipped(true); // Mark that it has flipped
  //   setIsFlipping(false);
  // };

  // // Reverse flip animation sequence
  // const reverseFlipSequence = async () => {
  //   setIsFlipping(true);
  //   await controls.start({
  //     rotateY: 0, // Back to the original state
  //     transition: { duration: 1, ease: "easeInOut" },
  //   });
  //   setIsFlipped(false); // Mark that it's back in the original state
  //   setIsFlipping(false);
  // };

  // // Handle scrolling and triggering the flip animation
  // useEffect(() => {
  //   const handleScroll = () => {
  //     // console.log(window.innerHeight);
  //     // console.log(window.scrollY);
  //     // console.log(scrollYProgress, "scrollyprogress");
  //     // console.log(scrollY, "scrolly");
  //     const triggerPoint = window.innerHeight * 0.5; // Trigger halfway down the screen
  //     const scrollYZ = window.scrollY;

  //     if (scrollYZ > triggerPoint && !isFlipped && !isFlipping) {
  //       flipSequence(); // Trigger flip animation when scrolling past the point
  //     } else if (scrollYZ <= triggerPoint && isFlipped && !isFlipping) {
  //       reverseFlipSequence(); // Trigger reverse flip when scrolling back up
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   // console.log(isFlipped, "isflipped");
  //   // console.log(isFlipping, "isflipping");
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [isFlipped, isFlipping, controls]);

  // const handleFlip = () => {
  //   setIsFlipper(!isFlipped);
  //   setIsAnimated(true);
  // };

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   handleFlip();
  //   console.log(isFlipped);
  //   console.log(isAnimated);
  //   console.log(latest);
  // });

  const animationOrder = {
    cardInitiateRotate: 0.2,
    cardEndRotate: 0.22,
    cardBackgroundColor: 0.3,
  };

  const cardRotate = useTransform(
    scrollYProgress,
    [animationOrder.cardInitiateRotate, animationOrder.cardEndRotate],
    [540, 0]
  );
  const imgOpacity = useTransform(
    scrollYProgress,
    [animationOrder.cardInitiateRotate, animationOrder.cardBackgroundColor],
    [1, 0]
  );

  return (
    <div id="about" className="about-container section-container">
      <motion.div className="about-me-wrapper" ref={aboutSectRef}>
        <motion.div
          className="about-me-content"
          // animate={controls}
        >
          <motion.div
            className="line"
            style={{ scaleX: scrollYProgress }}
          ></motion.div>
          <div className="image">
            <div className="gradient"></div>
          </div>

          <div className="text-content">
            <div
              // style={{
              //   x: par1SlideIn,
              //   opacity: par1SlideInFade,
              // }}
              className="text"
            >
              <p>{messages[currentLocale].par1}</p>
            </div>

            <div
              key="text"
              // style={{
              //   x: par2SlideIn,
              //   opacity: par2SlideInFade,
              // }}
              className="text"
            >
              <p>{messages[currentLocale].par2}</p>
            </div>

            <div
              key="text"
              // style={{
              //   x: par3SlideIn,
              //   opacity: par3SlideInFade,
              // }}
              className="text"
            >
              <p>{messages[currentLocale].par3}</p>
            </div>
            <div
              key="text"
              // style={{
              //   x: par4SlideIn,
              //   opacity: par4SlideInFade,
              // }}
              className="text"
            >
              <p>{messages[currentLocale].par4}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
