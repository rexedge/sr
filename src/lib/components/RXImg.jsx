import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
	width: ${(props) =>
		props.size === 'sm'
			? '150px'
			: props.size === 'md'
			? '210px'
			: props.size === 'lg'
			? '300px'
			: props.size === 'full'
			? '100%'
			: props.size};
	height: ${(props) =>
		props.square && props.size === 'sm'
			? '150px'
			: props.square && props.size === 'md'
			? '210px'
			: props.square && props.size === 'lg'
			? '300px'
			: props.square && props.size === 'full'
			? '100%'
			: props.size};
	overflow: hidden;
	border-radius: ${(props) =>
		props.square && props.circle ? '50%' : '10px'};
`;

const Img = styled.img`
	object-fit: cover;
	object-position: center;
	width: 100%;
	height: 100%;
`;

export default function RXImg({
	src = '/assets/images/sampleImage.jpg',
	className = '',
	size = 'sm',
	square,
	circle,
	alt = '',
}) {
	return (
		<Box
			className={className + ' mb-3'}
			size={size}
			square={square}
			circle={circle}
		>
			<Img
				className='mx-auto'
				src={src}
				alt={alt}
			/>
		</Box>
	);
}
