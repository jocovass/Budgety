import React from 'react';
import styled from '@emotion/styled';

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .7);
    transition: opacity .1s ease-out;
    z-index: 100;

    &.appear-enter {
        opacity: 0;
    }

    &.appear-enter-done {
        opacity: 1;
    }

    &.appear-exit {
        opacity: 0;
    }

    &.appear-exit-done {
        opacity: 1;
    }
`;

const Backdrop = ({close, children}) => (
    <Background onClick={close} data-exit="exit">
        {children}
    </Background>
);

export default Backdrop;