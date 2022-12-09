import React from 'react';
import { Outlet } from 'react-router-dom';
import { RXContainer } from '../../lib/components/layout';
import RXBtn from '../../lib/components/RXBtn';

export default function Homepage() {
	return (
		<div>
			<nav className='navbar navbar-expand-lg bg-light fixed-top'>
				<div className='container-fluid'>
					<a
						className='navbar-brand'
						href='#!'
					>
						<img
							src='logo_light.svg'
							alt='Logo'
							width='30'
							height='24'
							className='d-inline-block align-text-top'
						/>
						Striferral
					</a>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarText'
						aria-controls='navbarText'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div
						className='navbar-collapse collapse text-center'
						id='navbarText'
					>
						<ul className='navbar-nav mx-auto'>
							<li className='nav-item'>
								<a
									className='nav-link'
									href='/'
								>
									Home
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='nav-link'
									href='/register'
								>
									Sign Up
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='nav-link'
									href='/signin'
								>
									Sign In
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='nav-link'
									href='/about'
								>
									About
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='nav-link'
									href='/dashboard'
								>
									Dashboard
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='nav-link'
									href='/faqs'
								>
									FAQS
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='nav-link'
									href='/error-page'
								>
									Error Page
								</a>
							</li>
						</ul>
					</div>
					<div>
						<RXBtn
							className={'me-3'}
							tag='a'
							size={'sm'}
							link={'/signin'}
						>
							Sign In
						</RXBtn>
						<RXBtn
							tag='a'
							size={'sm'}
							link={'/register'}
						>
							Register
						</RXBtn>
					</div>
				</div>
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
