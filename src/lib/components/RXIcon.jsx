import React from 'react';
import { IconsData } from '../utilities/IconList';
// import '../styles/animate.css';

export default function RXIcon({
	size = 30,
	fcolor = 'currentColor',
	scolor = 'none',
	swidth = '5px',
	iconType = 'connect',
	className = '',
	// animate,
}) {
	return (
		<svg
			className={className}
			style={{
				fill: fcolor,
				stroke: scolor,
				strokeMiterlimit: 10,
				strokeWidth: swidth,
			}}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 256 256'
			height={size}
		>
			<g>
				{IconsData[iconType]?.map((icon, index) => {
					if (icon?.property === 'path') {
						return (
							<React.Fragment key={index}>
								<path
									// class={
									// 	animate === true
									// 		? 'animate_path'
									// 		: ' '
									// }
									d={icon?.value}
								/>
							</React.Fragment>
						);
					}
					return null;
				})}
			</g>
		</svg>
	);
}
