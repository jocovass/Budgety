import React from 'react';
import styled from '@emotion/styled';
import sprite from '../../../img/sprite.svg';
import DropDown from '../DropDown/DropDown';

const Row = styled.div`
    position:relative;
    width: 100%;
    margin-bottom: 3rem;
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
    top: 1rem;
    left: 1.5rem;
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

const renderInput = ({input, type, label, id, meta: {touched, error}}) => {
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

const RadioInput = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;

    &:checked + span::after {
        display: block;
    }
`;

const RadioLabel = styled.label`
    color: var(--clr-secondary);
    font-size: 1.5rem;
    margin-right: 4.5rem;
    user-select: none;
    position: relative;
    cursor: pointer;
`;

const RadioDot = styled.span`
    position: absolute;
    top: 0;
    right: -2.5rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: var(--clr-accent);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .3),
                inset 0 -1px 1px rgba(255, 255, 255, .3);

    &::after {
        content: '';
        position: absolute;
        top: 5px;
        left: 5px;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background-color: var(--clr-secondary);
        display: none;
    }
`;

const renderRadioButton = ({ input, setSelect, checked, type, label, id, meta: { touched, error } }) => {
    const isError = touched && error ? true : false;
    return (
        <RadioLabel htmlFor={label}>{`${input.value}:`}
            <RadioInput {...input}
                    type={type}
                    id={id}
                    checked={checked}
                    onClick={() => setSelect(input.value)}/>
            <RadioDot error={isError}/>
        </RadioLabel>
    );
};

const incomes = ['salary', 'gift', 'win'];
const expenses = ['groceries', 'rent', 'holiday', 'pet', 'bill', 'entertainment', 'beautycare', 'facilities'];

const renderDropdownOpt = (select) => {
    if(select === 'Income') {
        return incomes;
    } else if(select === 'Expense') {
        return expenses
    } else {
        return incomes.concat(expenses);
    }
}

const renderDropdown = ({ input, select, meta: { touched, error } }) => {
    const isError = touched && error ? true : false;

    return <DropDown {...input} clr="bg" opt={renderDropdownOpt(select)} isError={isError} message={error} />
}

export { renderInput, renderRadioButton, renderDropdown };