import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import CostsItem from '../CostsItem/CostsItem';

const Wrapper = styled.div`
    background-color: var(--clr-secondary);
    box-shadow: 5px 5px 20px rgba(0, 0, 0, .1);
    border-radius: 10px;
    padding: 3rem 2rem 2rem;
    margin: 0 auto;
    width: 97%;
`;

const TotalCosts = ({ totalCosts, totalExpense }) => {

    function countPercentage(value) {
        return (100 * value) / totalExpense || 0;
    }

    return (
        <Wrapper>
            <CostsItem name="groceries" value={countPercentage(totalCosts.groceries)}/>
            <CostsItem name="bill" value={countPercentage(totalCosts.bill)} />
            <CostsItem name="rent" value={countPercentage(totalCosts.rent)} />
            <CostsItem name="entertainment" value={countPercentage(totalCosts.entertainment)} />
            <CostsItem name="holiday" value={countPercentage(totalCosts.holiday)} />
            <CostsItem name="beautycare" value={countPercentage(totalCosts.beautycare)} />
            <CostsItem name="pet" value={countPercentage(totalCosts.pet)} />
            <CostsItem name="facilities" value={countPercentage(totalCosts.facilities)} />
        </Wrapper>
    );
};

const mapStateToProps = (state) => {
    return {
        totalCosts: state.db.totalCosts,
        totalExpense: state.db.totalExpense,
    };
};

export default connect(mapStateToProps)(TotalCosts);