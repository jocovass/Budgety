import React from 'react';
import styled from '@emotion/styled';

const Btn = styled.button`
    color: ${props => `var(--clr-${props.fontColor})`};
    font-size: 1.6rem;
    padding: .4rem 1.6rem;
    border: ${props => `1px solid var(--clr-${props.fontColor})`};
    border-radius: 100px;
    box-shadow: 2px 5px 10px rgba(0, 0, 0, .05);
    background-image: ${props => `linear-gradient(120deg, transparent 0%, transparent 50%, var(--clr-${props.hoverColor}) 50%)`};
    background-size: 240%;
    transition: all .25s ease-in-out;
    margin: ${props => props.margin};

    &:hover {
        background-position: 100%;
    }
`;

const Button = ({ value, click, color, hoverColor, margin, data, disabled }) => (
    <Btn onClick={click}
         fontColor={color || 'secondary'}
         hoverColor={hoverColor || 'accent'}
         margin={margin}
         data-exit={data}
         disabled={disabled}>
        {value}
    </Btn>
);

export default Button;