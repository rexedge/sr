import React from 'react';
import RXFooter from '../../lib/components/footer';
import { RXContainer } from '../../lib/components/layout';
import RXnavbar from '../../lib/components/navbar';
import RXIcon from '../../lib/components/RXIcon';

export default function Error() {
	return (
		<>
			<RXnavbar />
			<RXContainer
				screen
				centered
				flex
				tranparent
				// size={'lg'}
			>
				<div className='text-center'>
					<h1>Oops!</h1>
					<div>Sorry, an unexpected error has occurred.</div>
					<RXIcon
						className='mt-2'
						size={100}
						iconType={'broadcast'}
					/>
				</div>
			</RXContainer>
			<RXFooter />
		</>
	);
}
