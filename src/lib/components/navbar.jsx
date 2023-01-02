import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import RXIcon from './RXIcon';

export default function RXnavbar() {
	return (
		<div>
			<Navbar
				expand='md'
				variant='dark'
				fixed='top'
				bg='primary'
				className='bg-gradient'
			>
				<Container>
					<Navbar.Brand href='/'>
						<img
							alt=''
							src='/logo_dark.svg'
							width='30'
							height='30'
							className='d-inline-block align-top'
						/>{' '}
						Striferral
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav'>
						<RXIcon
							iconType='dashboard'
							className='text-light'
							size={25}
						/>
					</Navbar.Toggle>
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='mx-auto'>
							<Nav.Link
								className='text-center text-white'
								href='/'
							>
								HOME
							</Nav.Link>
							<Nav.Link
								className='text-center text-white'
								href='/about'
							>
								ABOUT
							</Nav.Link>
							<Nav.Link
								className='text-center text-white'
								href='/faqs'
							>
								FAQS
							</Nav.Link>
							<Nav.Link
								className='text-center text-white'
								href='/policies'
							>
								POLICIES
							</Nav.Link>
						</Nav>
						<Nav className='d-flex'>
							<Nav.Link
								href='/register'
								variant='primary'
								className='text-center text-white'
							>
								REGISTER
							</Nav.Link>
							<Nav.Link
								href='/signin'
								variant='primary'
								className='text-center text-white'
							>
								LOGIN
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}
