import styled from 'styled-components';

export const RXContainer = styled.div`
	max-width: ${(props) =>
		props.size === 'sm'
			? '300px'
			: props.size === 'md'
			? '500px'
			: props.size === 'lg'
			? '700px'
			: props.size === 'xl'
			? '900px'
			: '900px'};
	margin: auto;
	display: ${(props) => (props.flex === true ? 'flex' : '')};
	align-items: ${(props) =>
		props.alignItems === 'center'
			? 'center'
			: props.alignItems === 'start'
			? 'start'
			: props.alignItems === 'end'
			? 'end'
			: ''};
	align-items: ${(props) => (props.centered === true ? 'center' : '')};
	justify-content: ${(props) =>
		props.justifyContent === 'center'
			? 'center'
			: props.justifyContent === 'start'
			? 'start'
			: props.justifyContent === 'end'
			? 'end'
			: ''};
	justify-content: ${(props) => (props.centered === true ? 'center' : '')};
	height: ${(props) => (props.screen === true ? '100vh' : 'fit-content')};
	background: ${(props) =>
		props.dark === true
			? 'rgba(204, 204, 255, 0.8)'
			: 'rgba(0, 0, 64, 0.8)'};
	color: ${(props) => (props.dark === true ? '#000040' : '#ccccff')};
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: ${(props) => (props.glass === true ? 'blur(3px)' : '')};
	-webkit-backdrop-filter: ${(props) =>
		props.glass === true ? 'blur(3px)' : ''};
	border: ${(props) =>
		props.glass === true ? '1px solid rgba(255, 255, 255, 0.3)' : ''};
`;
