import React from 'react';
import { Col } from 'react-bootstrap';
import RXIcon from './RXIcon';

export default function DashRefCard(props) {
	return (
		<Col
			md={6}
			lg={3}
		>
			<div className='bg-primary rounded p-4 w-100 d-flex justify-content-between align-items-center elevate'>
				<div>
					<div>{props.cardLabel}</div>
					<div>{props.cardValue}</div>
				</div>
				<div>
					<RXIcon
						size={60}
						iconType={props.cardIcon}
					/>
				</div>
			</div>
		</Col>
	);
}
