import React from 'react';
import styled from '@emotion/styled';
import TotalBudget from '../TotalBudget/TotalBudget';
import TtotalIncome from '../TotalIncome/TotalIncome';
import TotalExpense from '../TotalExpense/TotalExpense';

const Wrapper = styled.section`
    display: flex;
    justify-content: space-around;
`;

const Headline = () => {
    return (
        <Wrapper>
            <TotalBudget />
            <TtotalIncome />
            <TotalExpense />
        </Wrapper>
    )
};

export default Headline;