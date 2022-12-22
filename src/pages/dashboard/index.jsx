import React from 'react';
import { Outlet } from 'react-router-dom';
import DashNav from '../../lib/components/DashNav';

export default function Dashboard() {
	return (
		<div>
			<DashNav />
			<Outlet />
		</div>
	);
}
