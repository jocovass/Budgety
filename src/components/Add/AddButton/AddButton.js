import React from 'react';
import styled from '@emotion/styled';
import sprite from '../../../img/sprite.svg';

const Button = styled.button`
    margin-top: auto;
    transition: transform .3s ease-in-out,
                opacity .15s ease-in-out;
    opacity: .6;
    transform ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};

    &:hover {
        opacity: 1;
    }
`;

const Svg = styled.svg`
    fill: var(--clr-secondary);
    width: 3.5rem;
    height: 3.5rem;
    margin-top: auto;
`;


const AddButton = ({ icon, click, isOpen }) => {
    return (
        <Button onClick={click}
                isOpen={isOpen}>
            <Svg role="button" aria-labelledby="title desc">
                <use xlinkHref={`${sprite}#icon-${icon}`}></use>
            </Svg>
        </Button>
    );
};

export default AddButton