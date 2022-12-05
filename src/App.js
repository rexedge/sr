import { RXContainer } from './lib/components/layout';
import Btn from './lib/components/RXBtn';
import TextInput from './lib/components/RXInput';

function App() {
	return (
		<div className="App">
			<RXContainer flex screen centered dark>
				<div className="text-center">
					<img src='/assets/images/sampleImage.jpg' width={150} className="rounded" alt='' />
					<div>
						Welcome to StriFerral
					</div>
					<TextInput
						type='text'
						placeholder='Small Text'
					/>
					<TextInput
						type='textarea'
						placeholder='Large Text'
					/>
					<div className='d-grid'>
						<Btn variant={'success'}
							tag='button'
							onClick={() => alert("clicked")}
							icon='whatsapp'
							size={'sm'}
							className='mb-2'
						>
							Do Something
						</Btn>
						<Btn variant={'danger'}
							tag='a'
							link={'#go_somwhere'}
							icon='forward'
							size={'sm'}
						>
							Go Somewhere
						</Btn>
					</div>
				</div>
			</RXContainer>
		</div>
	);
}

export default App;
