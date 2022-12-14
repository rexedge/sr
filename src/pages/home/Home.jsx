import React from 'react';
import { RXContainer } from '../../lib/components/layout';
import RXBtn from '../../lib/components/RXBtn';
import { deviceType } from '../../lib/utilities/helpers';

export default function Home() {
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
					flex
					centered
					screen
					glass
					className=''
				>
					<div className='px-3 row'>
						{console.log(deviceType())}
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
						<div className='col-md-6 mb-3 '>
							<h4>Start Earning Now</h4>
							<h1>STRIFERRAL</h1>
							<hr />
							<p>
								Do you like referring people{'?'}{' '}
								Striferral presents an avenue to let you
								earn officially. Get reward on every
								referral you make up until the third
								level.
							</p>
							<div className='d-flex justify-content-start gap-3'>
								<div>
									<RXBtn
										variant={'primary'}
										tag='a'
										link={'/register'}
										icon={'forward'}
									>
										REGISTER
									</RXBtn>
								</div>
								<div>
									<RXBtn
										variant={'primary'}
										tag='a'
										link={'/signin'}
									>
										LOGIN
									</RXBtn>
								</div>
							</div>
						</div>
					</div>
				</RXContainer>
			</section>
		</>
	);
}
