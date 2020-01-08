import React from 'react';
import styled from '@emotion/styled';
import TransactionList from '../TransactionList/TransactionList';

const Wrapper = styled.section`
    background-color: var(--clr-secondary);
    border-radius: 10px;
    flex: 1;
    padding: 2rem 1rem;
    margin: 0 1rem;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, .1);
`;

const Title = styled.h4`
    font-size: 2.1rem;
    text-align: center;
    margin-bottom: 3rem;
`;

const RecentActivities = () => {

    return (
        <Wrapper>
            <Title>Recent Activites:</Title>
            <TransactionList />
        </Wrapper>
    );
};

export default RecentActivities;