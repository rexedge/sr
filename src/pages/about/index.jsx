import React from 'react';
import { RXContainer } from '../../lib/components/layout';

export default function About() {
	return (
		<>
			<section className='position-relative'>
				<div className='position-absolute w-100 h-100 bg-secondary'>
					<img
						src='assets/images/refBG1.jpg'
						alt=''
						width={'100%'}
						height={'100%'}
						style={{
							objectFit: 'cover',
						}}
					/>
				</div>

				<RXContainer
					glass
					className='pt-5 px-3 pb-3'
				>
					<div className='text-center mt-3'>
						<h4>About Striferral</h4>
					</div>
					<hr />
					<div className='px-3 row'>
						<div className='col-md-6 mb-3 d-flex justify-content-center align-items-center'>
							<div>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Suscipit quidem fuga,
								eius voluptate quis facere facilis.
								Commodi, impedit quidem quae possimus
								est esse? Maxime deleniti et consectetur
								magnam reprehenderit laudantium.
							</div>
						</div>
						<div className='col-md-6 mb-3'>
							<img
								src='assets/images/refSec2.png'
								alt=''
								style={{
									width: '90%',
									objectFit: 'contain',
									objectPosition: 'center',
								}}
							/>
						</div>
					</div>
					<hr />
					<div className='px-3 row'>
						<div className='col-md-6 mb-3'>
							<img
								src='assets/images/refSec2.png'
								alt=''
								style={{
									width: '90%',
									objectFit: 'contain',
									objectPosition: 'center',
								}}
							/>
						</div>
						<div className='col-md-6 mb-3 d-flex justify-content-center align-items-center'>
							<div>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Suscipit quidem fuga,
								eius voluptate quis facere facilis.
								Commodi, impedit quidem quae possimus
								est esse? Maxime deleniti et consectetur
								magnam reprehenderit laudantium.
							</div>
						</div>
					</div>
					<hr />
					<div className='px-3 row mb-5'>
						<div className='col-md-6 mb-3 d-flex justify-content-center align-items-center'>
							<div>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Suscipit quidem fuga,
								eius voluptate quis facere facilis.
								Commodi, impedit quidem quae possimus
								est esse? Maxime deleniti et consectetur
								magnam reprehenderit laudantium.
							</div>
						</div>
						<div className='col-md-6 mb-5'>
							<img
								src='assets/images/refSec2.png'
								alt=''
								style={{
									width: '90%',
									objectFit: 'contain',
									objectPosition: 'center',
								}}
							/>
						</div>
					</div>
				</RXContainer>
			</section>
		</>
	);
}
