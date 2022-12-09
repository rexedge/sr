import React from 'react';
import { RXContainer } from '../../lib/components/layout';
import RXIcon from '../../lib/components/RXIcon';

export default function Error() {
	return (
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
	);
}
