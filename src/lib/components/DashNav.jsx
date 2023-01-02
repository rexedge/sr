import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import RXIcon from './RXIcon';

function DashNav() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	// const activeLink = () => setactiveLink(

	// )

	return (
		<>
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
					<Button
						variant='outline-light'
						onClick={handleShow}
					>
						<RXIcon
							iconType='dashboard'
							size={23}
						/>
					</Button>
				</Container>
			</Navbar>
			<Offcanvas
				show={show}
				onHide={handleClose}
				className={'bg-primary text-light'}
			>
				<Offcanvas.Header>
					<Offcanvas.Title>User's Full Name</Offcanvas.Title>
					<Button
						variant='outline-light'
						onClick={handleClose}
					>
						<RXIcon
							iconType='close'
							size={15}
						/>
					</Button>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<Nav
						defaultActiveKey='/dashboard'
						className='flex-column'
						variant='pills'
					>
						{/* <Nav.Link href='/'>Active</Nav.Link> */}
						<Nav.Link
							active
							eventKey='link-1'
							href='/dashboard'
						>
							Dashboard
						</Nav.Link>
						<Nav.Link
							eventKey='link-2'
							href='/dashboard/withdrawal'
						>
							Withdrawal
						</Nav.Link>
						<Nav.Link
							eventKey='link-3'
							href='/dashboard/settings'
						>
							Settings
						</Nav.Link>
					</Nav>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
}

export default DashNav;
