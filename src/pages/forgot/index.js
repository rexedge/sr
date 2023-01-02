import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { RXContainer } from '../../lib/components/layout';

export default function Forgot() {
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
                              src='/assets/images/refBG1.jpg'
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
                              method='POST'
                         >
                              <div className=''>
                                   {/* <RXImg
								className='bg-light p-4'
								size='sm'
								circle
								square
								src='logo_light.svg'
							/> */}
                                   <h1 className='h3 text-center'>Reset Password</h1>
                              </div>
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
                              <Button variant='light' type='submit'>Reset Password</Button>
                              <p className='mt-3'>
                                   <a
                                        className='text-light text-decoration-none'
                                        href='/signin'
                                   >
                                        Remember Password? Click here.
                                   </a>
                              </p>
                         </Form>
                    </RXContainer>
               </section>
          </>
     );
}
