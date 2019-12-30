import React from 'react';
import { createPortal } from 'react-dom';
import styled from '@emotion/styled';
import { CSSTransition } from 'react-transition-group';

const Wrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 2.5rem;
    border-radius: 10px;
    transform: translate(-50%, -500px);
    opacity: 0;
    width: 90%;
    max-width: 500px;
    background-color: var(--clr-bg);
    box-shadow: 5px 5px 20px rgba(0, 0, 0, .4);
    transition: all .3s ease-out;

    &.slide-down-enter {
        opacity: 0;
        transform: translate(-50%, -500px);
    }
    
    &.slide-down-enter-done {
        transform: translate(-50%, -50%);
        opacity: 1;
    }

    &.slide-down-exit {
        transform: translate(-50%, -50%);
        opacity: 1;
    }
    
    &.slide-down-exit-active {
        opacity: 0;
        transform: translate(-50%, -500px);
    }
`;

const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .7);
    transition: opacity .1s ease-out;

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

const Modal = ({ children, close, isOpen }) => {
    const element = typeof children == 'function' ? children()  : children;
    const handleExitClick = (e) => {
        if(e.target.dataset.exit === 'exit') {
            close();
        }
    } 

    return createPortal(
        <Backdrop  onClick={handleExitClick} data-exit="exit">
            <CSSTransition in={isOpen}
                           timeout={200}
                           classNames="slide-down"
                           appear
                           unmountOnExit>
                <Wrapper>
                    {element}
                </Wrapper>
            </CSSTransition>
        </Backdrop>,
        document.querySelector('.modal')
    )
};

export default Modal;