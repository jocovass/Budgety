import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.section`
    width: 23rem;
    padding: 2rem;
    text-align: center;
    border-radius: 10px;
    color: var(--clr-primary);
    background-color: var(--clr-secondary);
    box-shadow: 5px 5px 20px rgba(0, 0, 0, .1);
`;

const Title = styled.h2`
    font-size: 1.6rem;
    margin-bottom: 3px;
    font-weight: 300;
`;

const Amount = styled.p`
    font-size: 2.3rem;
    font-weight: 700;
    color: var(--clr-expense);
`;

const TotalExpense = ({ totalExpense = 0 }) => (
    <Wrapper>
        <Title>Total Expense:</Title>
        <Amount>£ {totalExpense}</Amount>
    </Wrapper>
);

export default TotalExpense;