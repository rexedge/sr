import React from 'react';
import { Outlet } from 'react-router-dom';
import { RXContainer } from '../../lib/components/layout';

export default function Dashboard() {
	return (
		<div>
			<nav className='fixed-top'>
				<ul>
					<li>
						<a href='/'>Home</a>
					</li>
					<li>
						<a href='/dashboard'>Page1</a>
					</li>
					<li>
						<a href='/dashboard/pagetwo'>Page2</a>
					</li>
				</ul>
			</nav>
			<RXContainer
				flex
				centered
				screen
			>
				<Outlet />
			</RXContainer>
		</div>
	);
}
