import React from 'react';
import { Card, Col } from 'react-bootstrap';
import RXIcon from './RXIcon';

export default function DashCard(props) {
	return (
		<Col
			xs={6}
			md={4}
			lg={3}
		>
			<Card
				className='bg-primary text-center elevate'
				style={{ height: '12rem' }}
			>
				<Card.Body className=' d-flex justify-content-center align-items-center'>
					<div>
						<Card.Text>
							<RXIcon
								iconType={props.cardIcon}
								size={50}
								// fcolor={props.iconFcolor}
							/>
						</Card.Text>
						<Card.Title>{props.cardValue}</Card.Title>
						<Card.Subtitle className='mb-2 text-muted'>
							{props.cardLabel}
						</Card.Subtitle>
					</div>
				</Card.Body>
			</Card>
		</Col>
	);
}
