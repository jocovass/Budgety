import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import TotalAmount from '../TotalAmount/TotalAmount';

const Wrapper = styled.section`
    display: flex;
    justify-content: space-around;

    @media ${props => props.theme.mq.mobile} {
        display: block;
    }

    @media ${props => props.theme.mq.mobile} {
        border-radius: 10px;
        background-color: var(--clr-secondary);
        box-shadow: 5px 5px 20px rgba(0, 0, 0, .1);
        max-width: 350px;
        margin: 0 auto;
    }
`;

const Headline = ({ totalBudget, totalExpense, totalIncome }) => {
    return (
        <Wrapper>
            <TotalAmount value={totalBudget} title="Budget"/>
            <TotalAmount value={totalIncome} title="Income" clr="income"/>
            <TotalAmount value={totalExpense} title="Expense" clr="expense"/>
        </Wrapper>
    )
};

const mapStateToProps = (state) => {
    return {
        totalExpense: state.db.totalExpense,
        totalIncome: state.db.totalIncome,
        totalBudget: state.db.totalBudget,
    };
};

export default connect(mapStateToProps)(Headline);