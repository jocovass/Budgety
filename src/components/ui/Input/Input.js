import React from 'react';
import styled from '@emotion/styled';
import sprite from '../../../img/sprite.svg';

const Row = styled.div`
    width: 100%;
    margin-bottom: 3rem;
    position: relative;
    height: 4rem;
    border-radius: 100px;
    background-color: var(--clr-accent);
`;

const Input = styled.input`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50px;
    width: 88%;
    font-size: 1.6rem;
    color: var(--clr-secondary);
    background-color: transparent;
    outline: none;
    border: none;
`;

const Label = styled.label`
    color: var(--clr-secondary);
    position: absolute;
    top: 9px;
    left: 15px;
`;

const Svg = styled.svg`
    fill: var(--clr-secondary);
    width: 2rem;
    height: 2rem;
`;

export const renderInput = ({input, type, label, id, meta: {touched, error}}) => {
    return (
        <Row>
            <Input {...input}
                   type={type}
                   id={id}
                   autoComplete="off"/>
            <Label htmlFor={input.name}>
                <Svg role="button" aria-labelledby="title desc">
                    <use xlinkHref={`${sprite}#icon-${label}`}></use>
                </Svg>
            </Label>
        </Row>
    );
};