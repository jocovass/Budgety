import React from 'react';
import styled from '@emotion/styled';
import sprite from '../../../img/sprite.svg';

const Row = styled.div`
    width: 100%;
    margin-bottom: 3.5rem;
    position: relative;
    height: 4rem;
    border-radius: 100px;
    background-color: var(--clr-accent);
    border: 2px solid transparent;
    border-color: ${props => props.isError ? `var(--clr-error)` : `transparent`};
`;

const Input = styled.input`
    height: 100%;
    margin-left: 50px;
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
    fill: ${props => props.isError ? `var(--clr-error)` : `var(--clr-secondary)`};
    width: 2rem;
    height: 2rem;
`;

const InputError = styled.span`
    color: var(--clr-error);
    font-size: 1.4rem;
    display: block;
    text-align: center;
    margin-top: 3px;
`;

export const renderInput = ({input, type, label, id, meta: {touched, error}}) => {
    const isError = touched && error ? true : false;
    return (
        <Row isError={isError}>
            <Input {...input}
                   type={type}
                   id={id}
                   autoComplete="off"/>
            <Label htmlFor={input.name}>
                <Svg role="button" aria-labelledby="title desc" isError={isError}>
                    <use xlinkHref={`${sprite}#icon-${label}`}></use>
                </Svg>
            </Label>
            {touched && error ? <InputError>{error}</InputError> : null}
        </Row>
    );
};