import React from 'react';
import styled from '@emotion/styled';
import TransactionList from '../TransactionList/TransactionList';

const Wrapper = styled.section`
    background-color: var(--clr-secondary);
    border-radius: 10px;
    flex: 1;
    padding: 2rem 1rem;
    margin-right: 1.5rem;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, .1);

    @media ${props => props.theme.mq['tablet-land']} {
        margin: 0 auto 3rem;
        width: 100%;
        max-width: 65rem;
    }
`;

const Title = styled.h4`
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
`;

const RecentActivities = ({ data }) => {
    return (
        <Wrapper>
            <Title>Recent Activites:</Title>
            <TransactionList recentActivities={data.slice(0, 9)} />
        </Wrapper>
    );
};

export default RecentActivities;