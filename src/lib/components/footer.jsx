import React from 'react';
import RXIcon from './RXIcon';

export default function RXFooter() {
	return (
		<section className='fixed-bottom'>
			<footer className='d-flex flex-wrap justify-content-between align-items-center p-3 bg-primary bg-gradient'>
				<div className='col-md-4 d-flex align-items-center'>
					<a
						href='/'
						className='mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1'
					>
						<img
							alt=''
							src='logo_dark.svg'
							width='30'
							height='30'
							className='d-inline-block align-middle'
						/>
						<span className='ms-3 mb-md-0 text-white'>
							{'Strifferal '}
						</span>
						<span className='mb-md-0 text-white'>
							© 2022 Company, Inc
						</span>
					</a>
				</div>

				<ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
					<li className='ms-3'>
						<a
							className='text-white'
							href='#!'
						>
							<RXIcon iconType='add' />
						</a>
					</li>
					<li className='ms-3'>
						<a
							className='text-white'
							href='#!'
						>
							<RXIcon iconType='event' />
						</a>
					</li>
					<li className='ms-3'>
						<a
							className='text-white'
							href='#!'
						>
							<RXIcon iconType='fingerprint' />
						</a>
					</li>
				</ul>
			</footer>
		</section>
	);
}
