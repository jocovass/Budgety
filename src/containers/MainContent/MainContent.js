import React, { Component } from 'react';
import styled from '@emotion/styled';
import Summary from '../../components/Summary/Summary';
import RecentActivities from '../../components/RecentActivities/RecentActivities';
import TotalCosts from '../../components/TotalCosts/TotalCosts';

const Wrapper = styled.main`
    margin-left: 12rem;
    color: var(--clr-primary);
    padding: 2rem 0;
`;

const FlexRow = styled.div`
    display: flex;
    margin-bottom: 3rem;
`;

class MainContent extends Component {

    render() {
        return (
            <Wrapper>
                <FlexRow>
                    <Summary />
                    <RecentActivities />
                </FlexRow>
                <TotalCosts />
            </Wrapper>
        )
    }
}

export default MainContent;