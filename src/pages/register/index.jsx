import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { RXContainer } from '../../lib/components/layout';

export default function Register() {
	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
		// window.open;
	};
	return (
		<>
			<section className='position-relative'>
				<div className='position-absolute w-100 h-100 bg-secondary'>
					<img
						src='assets/images/refBG1.jpg'
						alt=''
						width={'100%'}
						height={'100%'}
						style={{
							objectFit: 'cover',
						}}
					/>
				</div>
				<RXContainer
					screen
					glass
					centered
					flex
					size={'md'}
					className='px-3'
				>
					<Form
						noValidate
						validated={validated}
						onSubmit={handleSubmit}
						className='w-100'
						action='signup.php'
						method='get'
					>
						<Form.Group
							md='4'
							controlId='validationCustom01'
							className='mb-3'
						>
							<Form.Label>Email</Form.Label>
							<Form.Control
								required
								type='email'
								placeholder='example@email.com'
							/>
						</Form.Group>
						<Form.Group
							md='3'
							controlId='validationCustom05'
							className='mb-3'
						>
							<Form.Label>
								Referrer{' (Optional)'}
							</Form.Label>
							<Form.Control
								type='text'
								placeholder='Referrer ID'
								required
							/>
							{/* <Form.Control.Feedback type='invalid'>
								The referrer ID is invalid.
							</Form.Control.Feedback>
							<Form.Control.Feedback>
								Your referrer is Ayobami Oyeniran.
							</Form.Control.Feedback> */}
						</Form.Group>
						<Form.Group
							md='4'
							controlId='validationCustom02'
							className='mb-3'
						>
							<Form.Label>Password</Form.Label>
							<Form.Control
								required
								type='password'
								placeholder='Choose Password'
							/>
						</Form.Group>
						<Form.Group
							md='4'
							controlId='validationCustom03'
							className='mb-3'
						>
							<Form.Label>Retype Password</Form.Label>
							<Form.Control
								required
								type='password'
								placeholder='Retype Password'
							/>
						</Form.Group>
						<Button type='submit'>Register</Button>
					</Form>
				</RXContainer>
			</section>
		</>
	);
}
