import React from 'react';
import styled from '@emotion/styled';

const Btn = styled.button`
    color: var(--clr-secondary);
    font-size: 1.6rem;
    padding: .4rem 1.6rem;
    border: 1px solid var(--clr-secondary);
    border-radius: 100px;
    box-shadow: 2px 5px 10px rgba(0, 0, 0, .05);
    background-image: linear-gradient(120deg, transparent 0%, transparent 50%, var(--clr-accent) 50%);
    background-size: 240%;
    transition: all .25s ease-in-out;

    &:hover {
        background-position: 100%;
    }
`;

const Button = ({ value, icon }) => (
    <Btn>{value}</Btn>
);

export default Button;