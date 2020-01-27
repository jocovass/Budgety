import React from 'react';
import styled from '@emotion/styled';

const Item = styled.li`
    font-size: 1.6rem;
    color: var(--clr-primary);
    padding: 1rem;
    margin-bottom: 1rem;
    text-transform: capitalize;

    &:not(:last-child) {
        border-bottom: 2px solid rgba(0,0,0,.1);
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
            {` - ${name}`}
        </Item>
    )
};

export default Transaction;