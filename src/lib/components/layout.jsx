import styled from "styled-components";
// max-width: ${props => props.outline ? "1px" : "none"};
export const RXContainer = styled.div`
     max-width: ${props => 
          props.size === 'sm'
          ? '300px' : 
          props.size === 'md'
          ? '500px' : 
          props.size === 'lg'
          ? '700px' : 
          props.size === 'xl'
          ? '900px' : 
          '900px'
     };
     margin: auto;
     display: ${props => 
          props.flex === true
          ? 'flex' :
          ''
     }; 
     align-items: ${props => 
          props.alignItems === 'center'
          ? 'center' :
          props.alignItems === 'start'
          ? 'start' :
          props.alignItems === 'end'
          ? 'end' :
          ''
     }; 
     align-items: ${props => 
          props.centered === true
          ? 'center' :
          ''
     }; 
     justify-content: ${props => 
          props.justifyContent === 'center'
          ? 'center' :
          props.justifyContent === 'start'
          ? 'start' :
          props.justifyContent === 'end'
          ? 'end' :
          ''
     }; 
     justify-content: ${props => 
          props.centered === true
          ? 'center' :
          ''
     }; 
     height:  ${props => 
          props.screen === true
          ? '100vh' :
          ''
     };
     background: ${props => 
          props.dark === true
          ? '#333333' :
          '#DDDDDD'
     };
     color: ${props => 
          props.dark === true
          ? '#DDDDDD' :
          '#333333'
     };
     padding: 10px;
`