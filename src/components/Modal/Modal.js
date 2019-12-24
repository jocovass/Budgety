import React from 'react';
import { createPortal } from 'react-dom';
import styled from '@emotion/styled';

const Wrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 400px;
    background-color: var(--clr-secondary);
`;

const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .7);
`;

const Modal = ({ children, click }) => {
    const element = typeof children == 'function' ? children()  : children;
    return (
        createPortal(
        <Backdrop onClick={click}>
            <Wrapper>
                {element}
            </Wrapper>
        </Backdrop>,
        document.querySelector('.modal'))
    );
};

export default Modal;