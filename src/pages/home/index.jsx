import React from 'react';
import { Outlet } from 'react-router-dom';
import RXFooter from '../../lib/components/footer';
import RXnavbar from '../../lib/components/navbar';

export default function Homepage() {
	return (
		<div className='overflow-hidden'>
			<RXnavbar />
			<Outlet />
			<RXFooter />
		</div>
	);
}
