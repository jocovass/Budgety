import React from 'react';
import styled from '@emotion/styled';
import sprite from '../../../img/sprite.svg';

const Row = styled.div`
    position:relative;
    width: 100%;
    margin-bottom: 3rem;

    @media ${props => props.theme.mq['tablet-land']} {
        width: 85%;
        margin-left: auto;
        margin-right: auto;
    }
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
    padding-left: 5rem;
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
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
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

const Wrapper = styled.div`
    position: absolute;
    top: ${props => props.pos.top};
    right: ${props => props.pos.right};
    border-radius: 10px;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, .1);
`;

const Arrow = styled.span`
    font-size: 2.5rem;
    position: absolute;
    top: 0px;
    right: 7px;
    pointer-events: none;
    color: var(--clr-secondary);
     @media ${props => props.theme.mq.mobile} {
         top: 1px;
         right: 9px;
     }
`;

const Select = styled.select`
    font-size: 1.7rem;
    width: 15rem;
    padding: .7rem 1rem;
    appearance: none;
    border: 2px solid transparent;
    border-color: ${props => props.isError ? `var(--clr-error)` : `transparent`};
    border-radius: 10px;
    background-color: ${props => props.clr === 'bg' ? `var(--clr-accent)` : `var(--clr-bg)`};
    color: var(--clr-secondary);
    outline: none;
    text-transform: capitalize;
`;

const Option = styled.option`
    background-color: red;
`;

const DropDown = ({ opt, clr = 'secondary', isError, message, positions = {top: '2rem', right: '2rem' }, ...props}) => {

    function renderDates() {
        return opt.map(function createOpt(value, index) {
            
            return <Option value={value} key={value}>{value}</Option>;
        });
    }

    return (
        <Wrapper pos={positions}>
            <Arrow>&#x025BE;</Arrow>
            <Select clr={clr} {...props} isError={isError}>
                <Option value="">Select ...</Option>
                {renderDates()}
            </Select>
            {isError ? <InputError>{message}</InputError> : null}
        </Wrapper>
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