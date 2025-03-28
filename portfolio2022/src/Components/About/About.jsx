import React, { useRef } from 'react';
import { messages } from '../../i18n/messages';

import { useMediaQuery } from 'react-responsive';

import pic from '../../media/picture.jpg?width="1000"';
import { easeInOut, motion, useScroll, useTransform } from 'motion/react';

const About = ({ currentLocale }) => {
  const aboutSectRef = useRef();

  const { scrollYProgress } = useScroll({
    target: aboutSectRef,
    offset: ['start center', 'end start'],
  });

  const animationOrder = {
    initial: 0,
    imageFadeIn: 0.25,
    imageFadeInEnd: 0.3,
    par1SlideIn: 0.35,
    par1SlideInEnd: 0.4,
    par2SlideIn: 0.45,
    par2SlideInEnd: 0.5,
    par3SlideIn: 0.55,
    par3SlideInEnd: 0.6,
    par4SlideIn: 0.65,
    par4SlideInEnd: 0.7,
    aboutSectFadeOutStart: 0.75,
    aboutSectFadeOutEnd: 0.9,
  };

  const imgOpacity = useTransform(
    scrollYProgress,
    [animationOrder.imageFadeIn, animationOrder.imageFadeInEnd],
    [0, 1]
  );

  const par1SlideIn = useTransform(
    scrollYProgress,
    [animationOrder.par1SlideIn, animationOrder.par1SlideInEnd],
    ['20%', '0%'],
    { ease: easeInOut }
  );
  const par1SlideInFade = useTransform(
    scrollYProgress,
    [animationOrder.par1SlideIn, animationOrder.par1SlideInEnd],
    [0, 1],
    { ease: easeInOut }
  );

  const par2SlideIn = useTransform(
    scrollYProgress,
    [animationOrder.par2SlideIn, animationOrder.par2SlideInEnd],
    ['20%', '0%'],
    { ease: easeInOut }
  );

  const par2SlideInFade = useTransform(
    scrollYProgress,
    [animationOrder.par2SlideIn, animationOrder.par2SlideInEnd],
    [0, 1],
    { ease: easeInOut }
  );

  const par3SlideIn = useTransform(
    scrollYProgress,
    [animationOrder.par3SlideIn, animationOrder.par3SlideInEnd],
    ['20%', '0%'],
    { ease: easeInOut }
  );

  const par3SlideInFade = useTransform(
    scrollYProgress,
    [animationOrder.par3SlideIn, animationOrder.par3SlideInEnd],
    [0, 1],
    { ease: easeInOut }
  );

  const par4SlideIn = useTransform(
    scrollYProgress,
    [animationOrder.par4SlideIn, animationOrder.par4SlideInEnd],
    ['20%', '0%'],
    { ease: easeInOut }
  );

  const par4SlideInFade = useTransform(
    scrollYProgress,
    [animationOrder.par4SlideIn, animationOrder.par4SlideInEnd],
    [0, 1],
    { ease: easeInOut }
  );

  const aboutSectFadeOut = useTransform(
    scrollYProgress,
    [animationOrder.aboutSectFadeOutStart, animationOrder.aboutSectFadeOutEnd],
    [1, 0],
    { ease: easeInOut }
  );

  const aboutSectScale = useTransform(
    scrollYProgress,
    [animationOrder.aboutSectFadeOutStart, animationOrder.aboutSectFadeOutEnd],
    ['100%', '70%'],
    { ease: easeInOut }
  );

  const aboutSectTranslateY = useTransform(
    scrollYProgress,
    [animationOrder.aboutSectFadeOutStart, animationOrder.aboutSectFadeOutEnd],
    ['0', '20%'],
    { ease: easeInOut }
  );

  // const isMobile = useMediaQuery({
  // 	query: '(max-width: 767px)',
  // });

  // const divVariant = {
  // 	offscreen: {
  // 		opacity: 0,
  // 	},
  // 	onscreen: {
  // 		opacity: 1,
  // 	},
  // };

  // const animationViewportSettings =
  // 	isMobile
  // 		? {
  // 				once: false,
  // 				amount: 1,
  // 				margin: '0px 0px -300px 0px',
  // 		  }
  // 		: {
  // 				once: false,
  // 				amount: 1,
  // 				margin: '0px 0px -120px 0px',
  // 		  };

  return (
    <motion.div
      id="about"
      className="about-container section-container"
      ref={aboutSectRef}
      style={{
        opacity: aboutSectFadeOut,
        scale: aboutSectScale,
        translateY: aboutSectTranslateY,
      }}
    >
      <div className="about-me-wrapper">
        <div className="about-me-content">
          <motion.div
            className="image"
            style={{
              opacity: imgOpacity,
            }}
          >
            <img src={pic} alt="dev" width="550" height="100%" />
          </motion.div>
          <motion.div className="text-content">
            <motion.div
              style={{
                x: par1SlideIn,
                opacity: par1SlideInFade,
              }}
              className="text"
            >
              <p>{messages[currentLocale].par1}</p>
            </motion.div>

            <motion.div
              key="text"
              style={{
                x: par2SlideIn,
                opacity: par2SlideInFade,
              }}
              className="text"
            >
              <p>{messages[currentLocale].par2}</p>
            </motion.div>

            <motion.div
              key="text"
              style={{
                x: par3SlideIn,
                opacity: par3SlideInFade,
              }}
              className="text"
            >
              <p>{messages[currentLocale].par3}</p>
            </motion.div>
            <motion.div
              key="text"
              style={{
                x: par4SlideIn,
                opacity: par4SlideInFade,
              }}
              className="text"
            >
              <p>{messages[currentLocale].par4}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
