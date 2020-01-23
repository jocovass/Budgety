import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import TotalBudget from '../TotalBudget/TotalBudget';
import TtotalIncome from '../TotalIncome/TotalIncome';
import TotalExpense from '../TotalExpense/TotalExpense';

const Wrapper = styled.section`
    display: flex;
    justify-content: space-around;
`;

const Headline = ({ totalBudget, totalExpense, totalIncome }) => {
    return (
        <Wrapper>
            <TotalBudget totalBudget={totalBudget}/>
            <TtotalIncome totalIncome={totalIncome}/>
            <TotalExpense totalExpense={totalExpense}/>
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