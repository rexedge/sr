import React from 'react'
import styled from "styled-components";
import RXIcon from './RXIcon';

const Btnstyledb = styled.button`
     outline-width: ${props => props.outline ? "1px" : "none"};
     outline-style: solid;
     outline-color: inherit;
     position: relative;
     display: inline-flex;
     align-items: center;
     justify-content: center;
     text-align: center;
     text-decoration: none;
     vertical-align: middle;
     height: ${props => 
          props.size === 'sm'
          ? '30px' : 
          props.size === 'md'
          ? '35px' : 
          props.size === 'lg'
          ? '40px' : 
          props.size === 'xl'
          ? '45px' : 
          '35px'
     };
     background: ${props => 
          props.variant === 'primary'
          ? '#0000ff' : 
          props.variant === 'secondary'
          ? 'conic-gradient(from 180deg,#1b4078,#229fa7)' : 
          props.variant === 'success'
          ? '#4BB543' : 
          props.variant === 'warning'
          ? '#FFA500' : 
          props.variant === 'danger'
          ? '#f32013' : 
          '#000000'
     };
     color: ${props => 
          props.variant === 'primary'
          ? '#ffffff' : 
          props.variant === 'secondary'
          ? '#ffffff' : 
          props.variant === 'success'
          ? '#ffffff' : 
          props.variant === 'warning'
          ? '#ffffff' : 
          props.variant === 'danger'
          ? '#ffffff' : 
          '#ffffff'
     };
`;
const Btnstyleda = styled.a`
     outline-width: ${props => props.outline ? "1px" : "none"};
     outline-style: solid;
     outline-color: inherit;
     position: relative;
     display: inline-flex;
     align-items: center;
     justify-content: center;
     text-align: center;
     text-decoration: none;
     vertical-align: middle;
     height: ${props => 
          props.size === 'sm'
          ? '30px' : 
          props.size === 'md'
          ? '35px' : 
          props.size === 'lg'
          ? '40px' : 
          props.size === 'xl'
          ? '45px' : 
          '35px'
     };
     background: ${props => 
          props.variant === 'primary'
          ? '#0000ff' : 
          props.variant === 'secondary'
          ? 'conic-gradient(from 180deg,#1b4078,#229fa7)' : 
          props.variant === 'success'
          ? '#4BB543' : 
          props.variant === 'warning'
          ? '#FFA500' : 
          props.variant === 'danger'
          ? '#f32013' : 
          '#000000'
     };
     color: ${props => 
          props.variant === 'primary'
          ? '#ffffff' : 
          props.variant === 'secondary'
          ? '#ffffff' : 
          props.variant === 'success'
          ? '#ffffff' : 
          props.variant === 'warning'
          ? '#ffffff' : 
          props.variant === 'danger'
          ? '#ffffff' : 
          '#ffffff'
     };
`;

export default function Btn({ type,variant,className,id,onClick,link,outline,size,icon,children,tag = 'a',}) {
     return (
          tag === 'a' ?
          (<Btnstyleda
               size={size}
               type={type ? type : 'button'}
               variant={variant}
               className={className ? `btn ${className}`: 'btn'}
               id={id}
               href={link ? link : '#!'}
               outline={outline}
          >
               {children}
               {
                    icon && 
                    (
                         <RXIcon iconType={icon} size={22} className={'ms-3'} />
                    )
               }
          </Btnstyleda>) :
          (<Btnstyledb
               size={size}
               type={type ? type : 'button'}
               variant={variant}
               className={className ? `btn ${className}`: 'btn'}
               id={id}
               onClick={onClick}
               outline={outline}
          >
               {children}
               {
                    icon && 
                    (
                         <RXIcon iconType={icon} size={22} className={'ms-2'} />
                    )
               }
          </Btnstyledb>)
  )
}