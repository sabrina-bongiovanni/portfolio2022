import React, {
	forwardRef,
	useRef,
} from 'react';
import './ProjectItem.scss';

import imgGroup from './projectImg';

import {
	motion,
	useScroll,
	useTransform,
} from 'framer-motion';

const ProjectItem = forwardRef(
	(props, ref) => {
		const projectRef = useRef();
		const { projectsData } = props;

		const { scrollYProgress } =
			useScroll({
				target: projectRef,
				offset: [
					'start center',
					'end start',
				],
			});

		const animationOrder = {
			initial: 0,
			projFocusStart_1: 0.2,
			projFocusPauseEnd_1: 0.35,
			projFocusEnd_1: 0.3,
			// projScaleStart: 0.5,
		};

		const projScale = [
			'100%',
			'120%',
			'120%',
			'100%',
		];

		const SetScale = (
			scrollPositionArray
		) => {
			const motionValue = useTransform(
				scrollYProgress,
				scrollPositionArray,
				projScale
			);
			return motionValue;
		};

		const projPosition = useTransform(
			scrollYProgress,
			[
				animationOrder.initial,
				animationOrder.projFocusStart_1,
				animationOrder.projFocusPauseEnd_1,
				animationOrder.projFocusEnd_1,
			],
			['unset', '50%', '50%', '0%']
		);

		// const SetProjPosition = (
		// 	scrollPositionArray
		// ) => {
		// 	const motionValue = useTransform(
		// 		scrollYProgress,
		// 		scrollPositionArray,
		// 		projScale
		// 	);
		// 	return motionValue;
		// };

		// const projectPosition = useTransform(scrollYProgress[])

		const imgName =
			projectsData.projectImg;

		return (
			<div
				className="project-item"
				key={projectsData.projectId}
				ref={projectRef}
			>
				<div className="project-img">
					<motion.img
						src={imgGroup[imgName]}
						alt="project-img"
						style={{
							width: SetScale([
								animationOrder.initial,
								animationOrder.projFocusStart_1,
								animationOrder.projFocusPauseEnd_1,
								animationOrder.projFocusEnd_1,
							]),
							// y: projPosition,
						}}
					/>
				</div>
				<div className="project-data">
					<div className="project-description">
						<div className="text">
							Lorem ipsum
						</div>
						<div className="link">
							link
						</div>
					</div>
					<div className="technologies">
						Technologies
					</div>
				</div>
			</div>
		);
	}
);
export default ProjectItem;
