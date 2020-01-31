import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { toggleMenu } from '../../store/actions/app';

const Wrapper = styled.div`
    display: none;

    @media ${props => props.theme.mq.tablet} {
        display: block;
        position: absolute;
        top: 25px;
        right: 15px;
        cursor: pointer;
    }
`;

const Bar = styled.div`
position: relative;
    width: 4rem;
    height: .5rem;
    background-color: var(--clr-primary);
    transform: ${props => props.open ? `rotate(-45deg)` : `rotateX(0deg)`};
    transition: transform .15s ease-in-out;

    &::after,
    &::before {
        content: '';
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: inherit;
    }

    &::before {
        top: -7px;
        display: ${props => props.open ? `none` : `block`};
    }

    &::after {
        bottom: ${props => props.open ? `-1px` : `-7px`};
        transform: ${props => props.open ? `rotate(90deg)` : `rotateX(0deg)`};
    }
`;


const BurgerButton = ({menuIsOpen, toggleMenu}) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if(open !== menuIsOpen) {
            toggleMenu(open);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    function toggle() {
        toggleMenu(!menuIsOpen);
    }

    return (
        <Wrapper onClick={toggle}>
            <Bar open={menuIsOpen}/>
        </Wrapper>
    );
};

const mapStateToProps = (state) => {
    return {
        menuIsOpen: state.app.menuIsOpen,
    };
};

export default connect(mapStateToProps, { toggleMenu })(BurgerButton);