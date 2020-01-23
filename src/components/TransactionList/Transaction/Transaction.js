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
    color: ${props => props.transaction === 'Income' ? `var(--clr-income)` : `var(--clr-expense)`}
`;

const Transaction = ( {value: { value, name, transaction }} ) => {

    return (
        <Item>
            <Prefix transaction={transaction}>
                {`${transaction === 'Income' ? '+' : '-'} £${value}`}
            </Prefix>
            {` - ${name.toUpperCase()}`}
        </Item>
    )
};

export default Transaction;