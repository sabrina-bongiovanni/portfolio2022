import React, { useRef } from 'react';
import useMediaQuery from 'react-responsive';

import { messages } from '../../i18n/messages';

import {
	motion,
	useScroll,
	useTransform,
	easeIn,
} from 'framer-motion';

import './Homepage.scss';

// https://www.youtube.com/watch?v=m1Cm1ivOjzU

const Homepage = ({
	currentLocale,
}) => {
	const ref = useRef();
	const containerRef = useRef();

	const { scrollYProgress } = useScroll(
		{
			target: ref,
			offset: [
				'start start',
				'center start',
			],
		}
	);

	const opacity = useTransform(
		scrollYProgress,
		[0, 1],
		[1, 0],
		{ ease: easeIn }
	);

	const position = useTransform(
		scrollYProgress,
		(pos) => {
			return pos === 1
				? 'absolute'
				: 'fixed';
		}
	);
	// const isMobile = useMediaQuery({
	// 	query: '(max-width: 767px)',
	// });

	return (
		<motion.div
			className="homepage-container"
			id="homepage"
			ref={containerRef}
		>
			<motion.div
				className="title-container"
				onViewportLeave={(entry) =>
					console.log(
						'deactivate previous nav item and activate next'
					)
				}
				ref={ref}
				style={{
					opacity: opacity,
					position,
				}}
			>
				<motion.h1
					className="title"
					initial={{ opacity: 0 }}
					whileInView={{
						opacity: 1,
					}}
				>
					<motion.div
						className="hello"
						initial={{
							opacity: 0,
							y: '-30%',
						}}
						animate={{
							opacity: 1,
							y: '0',
						}}
						transition={{
							duration: 0.5,
						}}
					>
						{
							messages[currentLocale]
								.hello
						}
					</motion.div>
					<motion.div
						className="name"
						initial={{
							opacity: 0,
							y: '-30%',
						}}
						animate={{
							opacity: 1,
							y: '0',
						}}
						transition={{
							duration: 0.7,
							delay: 0.3,
						}}
					>
						Sabrina
					</motion.div>
					<motion.div
						className="job"
						initial={{
							opacity: 0,
							y: '-30%',
						}}
						animate={{
							opacity: 1,
							y: '0',
						}}
						transition={{
							duration: 0.7,
							delay: 0.6,
						}}
					>
						React Front-End Developer
					</motion.div>
				</motion.h1>
			</motion.div>
		</motion.div>
	);
};

export default Homepage;
