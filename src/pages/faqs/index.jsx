import React from 'react';
import { Accordion } from 'react-bootstrap';
import { RXContainer } from '../../lib/components/layout';

export default function Faqs() {
	return (
		<>
			<section>
				<RXContainer
					className='px-3 pt-5 mt-3'
					screen
					centered
					glass
				>
					<div className='overflow-scroll'>
						<div className='text-center mt-3'>
							<h4>FAQs</h4>
						</div>
						<hr />
						<Accordion
							className='w-100 mb-5 pb-5'
							defaultActiveKey='0'
							flush
						>
							<Accordion.Item eventKey='0'>
								<Accordion.Header>
									What is STRIFERRAL and how does it
									work?
								</Accordion.Header>
								<Accordion.Body>
									<p>
										Striferral is a referral
										program to earn rewards for
										every friend you invite to
										register on the platform, you
										earn when they complete a full
										registration. To participate
										in it, the following
										conditions must be met:{' '}
									</p>
									<ul>
										<li>
											Valid registration must
											include your referral
											code.
										</li>
										<li>
											Registration profile must
											be completed including
											bank account details.
										</li>
									</ul>
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey='1'>
								<Accordion.Header>
									How will I be eligible for
									Strifferal?
								</Accordion.Header>
								<Accordion.Body>
									All you need is a complete
									registration. Complete your profile
									and include your bank details. With
									these done, you are good to go.
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey='2'>
								<Accordion.Header>
									How many friends can I send the
									referral code to?
								</Accordion.Header>
								<Accordion.Body>
									You can send the referral code as
									much friends as you want {' – '},
									that is the beauty if STRIFERRAL,
									but you will only receive a reward
									for the friends that complete all
									the requirements to qualify for a
									reward.
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey='3'>
								<Accordion.Header>
									How can I redeem my reward?
								</Accordion.Header>
								<Accordion.Body>
									Upon successful referral, you
									reward will be added to your wallet
									which you can withdraw at any given
									point in time.
									<br />
									Upon withdrawal, the transaction
									will be verified and processed into
									the bank account so make sure
									account details are correct.
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey='4'>
								<Accordion.Header>
									How can I share the referral code
									with my friends?
								</Accordion.Header>
								<Accordion.Body>
									STRIFERRAL will provide you with a
									referral code upon successful
									completion of registration and
									profile update. This code can be
									shared via social media, as text or
									any other possible means.
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey='5'>
								<Accordion.Header>
									What can I do if I haven’t received
									my reward?
								</Accordion.Header>
								<Accordion.Body>
									<p>
										The first you should do is to
										make sure that:
									</p>{' '}
									<ul>
										<li>
											Your friend has used your
											referral code.
										</li>
										<li>
											All the requirements are
											completed.
										</li>
										<li>
											It’s been at least 3 days
											since all the
											requirements have been
											completed.
										</li>
									</ul>
									<p>
										Check your email account to
										confirm you haven’t received a
										confirmation notification.
										Make sure that you check the
										junk/spam folder
									</p>
									<p>
										If you verified all the above
										and still haven’t received
										your reward, please contact us
										at help@striferral.com
									</p>
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</div>
				</RXContainer>
			</section>
		</>
	);
}
