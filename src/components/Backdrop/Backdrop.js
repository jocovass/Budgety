import React from 'react';
import styled from '@emotion/styled';

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .7);
`;

const Backdrop = ({click, children}) => (
    <Background onClick={click}>
        {children}
    </Background>
);

export default Backdrop;