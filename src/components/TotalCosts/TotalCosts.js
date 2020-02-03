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
    width: 100%;
`;

const Title = styled.h3`
    font-size: 2.5rem;
    margin: 0 0 3rem 5rem;
`;

const TotalCosts = ({ totalCosts, totalIncome }) => {

    function countPercentage(value) {
        return (100 * value) / totalIncome || 0;
    }

    return (
        <Wrapper>
            <Title>All Costs</Title>
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
        totalIncome: state.db.totalIncome,
    };
};

export default connect(mapStateToProps)(TotalCosts);