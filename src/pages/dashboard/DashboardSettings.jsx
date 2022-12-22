import React from 'react';
import { Card, Container, ListGroup, Row } from 'react-bootstrap';
import RXIcon from '../../lib/components/RXIcon';

export default function DashboardSettings() {
	return (
		<>
			<Container className='pt-5'>
				<Row className='mt-3 mb-4 g-3'>
					<Card bg='primary elevate p-0 mb-3'>
						<Card.Header>Basic Information</Card.Header>
						<Card.Body>
							<ListGroup>
								<ListGroup.Item variant='primary'>
									<div className='mb-1 d-flex justify-content-between'>
										<div>Name</div>
										<div>
											<RXIcon
												iconType='edit'
												size={20}
											/>
										</div>
									</div>
									<div>Oyeniran Ayobami Paul</div>
								</ListGroup.Item>
								<ListGroup.Item variant='primary'>
									<div className='mb-1 d-flex justify-content-between'>
										<div>Profile Picture</div>
										<div>
											<RXIcon
												iconType='edit'
												size={20}
											/>
										</div>
									</div>
									<div>
										<img
											src='/logo_dark.svg'
											alt='profile'
											height={150}
											width={150}
											className='m-0 bg-primary p-2 rounded-3'
										/>
									</div>
								</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>
					<Card bg='primary elevate p-0 mb-3'>
						<Card.Header>Contact Information</Card.Header>
						<Card.Body>
							<ListGroup>
								<ListGroup.Item variant='primary'>
									<div className='mb-1 d-flex justify-content-between'>
										<div>Phone Number</div>
										<div>
											<RXIcon
												iconType='edit'
												size={20}
											/>
										</div>
									</div>
									<div>+2349126870431</div>
								</ListGroup.Item>
								<ListGroup.Item variant='primary'>
									<div className='mb-1 d-flex justify-content-between'>
										<div>Email</div>
										<div>
											<RXIcon
												iconType='edit'
												size={20}
											/>
										</div>
									</div>
									<div>ap.oyeniran@gmail.com</div>
								</ListGroup.Item>
								<ListGroup.Item variant='primary'>
									<div className='mb-1 d-flex justify-content-between'>
										<div>Address</div>
										<div>
											<RXIcon
												iconType='edit'
												size={20}
											/>
										</div>
									</div>
									<div>512 Rd, Block 2, Festac</div>
								</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>
					<Card bg='primary elevate p-0 mb-3'>
						<Card.Header>Bank Information</Card.Header>
						<Card.Body>
							<ListGroup>
								<ListGroup.Item variant='primary'>
									<div className='mb-1 d-flex justify-content-between'>
										<div>Bank Name</div>
										<div>
											<RXIcon
												iconType='edit'
												size={20}
											/>
										</div>
									</div>
									<div>Zenith Bank</div>
								</ListGroup.Item>
								<ListGroup.Item variant='primary'>
									<div className='mb-1 d-flex justify-content-between'>
										<div>Account Name</div>
										<div>
											<RXIcon
												iconType='edit'
												size={20}
											/>
										</div>
									</div>
									<div>Oyeniran Aybami Paul</div>
								</ListGroup.Item>
								<ListGroup.Item variant='primary'>
									<div className='mb-1 d-flex justify-content-between'>
										<div>Account Number</div>
										<div>
											<RXIcon
												iconType='edit'
												size={20}
											/>
										</div>
									</div>
									<div>0035776074</div>
								</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>
				</Row>
			</Container>
		</>
	);
}
