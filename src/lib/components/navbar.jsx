import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

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
							src='logo_dark.svg'
							width='30'
							height='30'
							className='d-inline-block align-top'
						/>{' '}
						Striferral
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
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
						</Nav>
						<Nav className='d-flex'>
							<Button
								href='/register'
								variant='primary'
								className='me-2'
							>
								REGISTER
							</Button>
							<Button
								href='/register'
								variant='primary'
							>
								LOGIN
							</Button>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}
