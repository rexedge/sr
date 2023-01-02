import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import RXFooter from '../../lib/components/footer';
import { RXContainer } from '../../lib/components/layout';
import RXnavbar from '../../lib/components/navbar';

export default function Policies() {
	return (
		<>
			<div className='overflow-hidden'>
				<RXnavbar />
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
						screen
						className='pt-5'
					>
						<Row className='px-3 pt-3 mb-2 g-2'>
							<Col
								xs={12}
								sm={12}
								md={6}
								lg={4}
								className={'d-grid'}
							>
								<a
									className='text-decoration-none btn btn-light'
									href='/policies'
								>
									Return Policy
								</a>
							</Col>
							<Col
								xs={12}
								sm={12}
								md={6}
								lg={4}
								className={'d-grid'}
							>
								<a
									className='text-decoration-none btn btn-light'
									href='/policies/privacy'
								>
									Privacy Policy
								</a>
							</Col>
							<Col
								xs={12}
								sm={12}
								md={6}
								lg={4}
								className={'d-grid'}
							>
								<a
									className='text-decoration-none btn btn-light'
									href='/policies/cookies'
								>
									Cookies Policy
								</a>
							</Col>
						</Row>
						<Outlet />
					</RXContainer>
				</section>
				<RXFooter />
			</div>
		</>
	);
}
