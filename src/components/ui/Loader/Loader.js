import React from 'react';
import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Div = styled.div`
    border-radius: 50%;
    width: ${props => `${props.size}rem`};
    height: ${props => `${props.size}rem`};
    margin: ${props => `${props.gapTop}rem auto ${props.gapBottom}rem auto`};
    font-size: 10px;
    position: relative;
    border-top: .5rem solid rgba(0, 0, 0, 0.2);
    border-right: .5rem solid rgba(0, 0, 0, 0.2);
    border-bottom: .5rem solid rgba(0, 0, 0, 0.2);
    border-left: ${props => `.5rem solid var(--clr-${props.clr})`} ;
    transform: translateZ(0);
    animation: ${spin} 1.1s infinite linear;


    &::after {
        border-radius: 50%;
        width: ${props => `${props.size}rem`};
        height: ${props => `${props.size}rem`};
    }

`;

const Loader = ({ color = 'secondary', size = '6', gapBottom = 0, gapTop = 0 }) => {
    return <Div clr={color} 
                role="loader"
                size={size}
                gapBottom={gapBottom} 
                gapTop={gapTop}>

    </Div>;
};

export default Loader;