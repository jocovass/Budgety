import React from 'react';
import styled from '@emotion/styled';

const Item = styled.li`
    font-size: 1.6rem;
    color: var(--clr-primary);
    // background-color: var(--clr-accent);
    padding: 1rem;
    margin-bottom: 1rem;
    
    &:not(:last-child) {
        border-bottom: 1px solid var(--clr-accent);
    }
`;

const Prefix = styled.span`
    font-size: 300;
    color: ${props => props.transaction === 'income' ? `var(--clr-income)` : `var(--clr-expense)`}
`;

const Transaction = ({ value }) => {

    return (
        <Item>
            <Prefix transaction={value.transaction}>
                {`${value.sign} £${value.value}`}
            </Prefix>
            {` - ${value.label.toUpperCase()}`}
        </Item>
    )
};

export default Transaction;