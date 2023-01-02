import React from 'react';
import { RXContainer } from '../../lib/components/layout';

export default function About() {
	return (
		<>
			<section className='position-relative'>
				<div className='position-absolute w-100 h-100 bg-secondary'>
					<img
						src='/assets/images/refBG1.jpg'
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
						<h1 className='h4'>About Striferral</h1>
					</div>
					<hr />
					<div className='px-3 row'>
						<div className='col-md-6 mb-3 d-flex justify-content-center align-items-center'>
							<div>
								<h2 className='h5 mb-3'>
									Step 1<br />
									<div className='p-2 mt-1 bg-light rounded text-primary'>
										Share Your Referrer Code
									</div>
								</h2>
								<p>
									Go to your Dashboard,{' '}
									<a href='/signin'>Log in</a> or{' '}
									<a href='/register'>sign up</a>,
									and then invite unlimited friends
									by sharing your personal referral
									code.
								</p>
							</div>
						</div>
						<div className='col-md-6 mb-3'>
							<img
								src='/assets/images/shareCode.svg'
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
								src='/assets/images/registerInvite.svg'
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
								<h2 className='h5 mb-3'>
									Step 2<br />
									<div className='p-2 mt-1 bg-light rounded text-primary'>
										Invite Friends to Register
									</div>
								</h2>
								<p>
									Ask your friends to register using
									the code you shared. Once they send
									complete registration and choose a
									plan, you will be rewarded directly
									into your wallet.
								</p>
							</div>
						</div>
					</div>
					<hr />
					<div className='px-3 row mb-5'>
						<div className='col-md-6 mb-3 d-flex justify-content-center align-items-center'>
							<div>
								<h2 className='h5 mb-3'>
									Step 3<br />
									<div className='p-2 mt-1 bg-light rounded text-primary'>
										Get Rewarded
									</div>
								</h2>
								<p>
									Enjoy reward up to as high as the
									third level of your referrals. This
									means you also earn from the
									referrals people you refer
									completes.
								</p>
							</div>
						</div>
						<div className='col-md-6 mb-5'>
							<img
								src='/assets/images/earn.svg'
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
