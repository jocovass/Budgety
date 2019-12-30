import React from 'react';
import styled from '@emotion/styled';
import sprite from '../../../img/sprite.svg';

const Row = styled.div`
    position:relative;
    width: 100%;
    margin-bottom: 4rem;
    `;
    
    const Input = styled.input`
    height: 4.5rem;
    width: 100%;
    font-size: 1.6rem;
    color: var(--clr-secondary);
    background-color: var(--clr-accent);
    border: 2px solid transparent;
    border-color: ${props => props.isError ? `var(--clr-error)` : `transparent`};
    border-radius: 100px;
    padding-left: 50px;
    outline: none;
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
    position: absolute;
    left: 0;
    top: 104%;
    width: 100%;
    text-align: center;
`;

export const renderInput = ({input, type, label, id, meta: {touched, error}}) => {
    const isError = touched && error ? true : false;
    return (
        <>
            <Row>
                <Input {...input}
                    type={type}
                    id={id}
                    isError={isError}
                    autoComplete="off" />
                <Label htmlFor={input.name}>
                    <Svg role="button" aria-labelledby="title desc" isError={isError}>
                        <use xlinkHref={`${sprite}#icon-${label}`}></use>
                    </Svg>
                </Label>
            {touched && error ? <InputError>{error}</InputError> : null}
            </Row>
        </>
    );
};