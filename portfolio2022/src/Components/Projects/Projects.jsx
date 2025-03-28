import React, { useRef } from 'react';

import { messages } from '../../i18n/messages';

import ProjectItem from './Components/ProjectItem';
import projectsData from './ProjectsData.json';

import './Projects.scss';

import { motion, useScroll, useTransform } from 'motion/react';

const Projects = ({ currentLocale }) => {
  const projectsSectRef = useRef();

  const { scrollYProgress } = useScroll({
    target: projectsSectRef,
    offset: ['start end', 'end start'],
  });

  const animationOrder = {
    initial: 0,
    titleFadeIn: 0.1,
    titleFadeInEnd: 0.15,
    titleScaleEnd: 0.17,
    // projectsFadeInEnd: 0.35,
  };

  const titleFadeIn = useTransform(
    scrollYProgress,
    [animationOrder.titleFadeIn, animationOrder.titleFadeInEnd],
    [0, 1]
  );
  const titleScale = useTransform(
    scrollYProgress,
    [animationOrder.titleFadeIn, animationOrder.titleScaleEnd],
    ['80%', '100%']
  );

  return (
    <motion.div
      className="projects-container section-container"
      id="projects"
      ref={projectsSectRef}
      style={{
        position: 'sticky',
      }}
    >
      <div className="title-container d-flex justify-content-center">
        <motion.h2
          style={{
            opacity: titleFadeIn,
            scale: titleScale,
          }}
        >
          {messages[currentLocale].navbarLinkProjects}
        </motion.h2>
      </div>
      <div className="projects-wrapper">
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectItem projectsData={project} ref={projectsSectRef} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
