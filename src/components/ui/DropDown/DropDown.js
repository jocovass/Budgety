import React from 'react';
import styled from '@emotion/styled';

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

export default DropDown;