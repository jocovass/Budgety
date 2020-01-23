import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import Summary from '../../components/Summary/Summary';
import RecentActivities from '../../components/RecentActivities/RecentActivities';
import TotalCosts from '../../components/TotalCosts/TotalCosts';
import ChartLine from '../../components/Chart/ChartLine';
import Advert from '../../components/Advert/Advert';


const Wrapper = styled.main`
    margin-left: 12rem;
    color: var(--clr-primary);
    padding: 2rem 0;
`;

const FlexRow = styled.div`
    display: flex;
    margin-bottom: 3rem;
`;

const Title = styled.h3`
    font-size: 2.5rem;
    text-align: center;
`;

const ChartWrapp = styled.div`
    width: 90%;
    height: 500px;
    margin: 1rem auto;
`;

class MainContent extends Component {
    renderContent = () => {
        if(!this.props.signedIn) {
            return (
                <Advert />
            )
        }

        return (
            <>
                <Summary>
                    {
                    (data, year) => {
                        return (
                            <>
                                <Title>Summary Of Your Balance</Title>
                                <ChartWrapp>
                                    <ChartLine data={data} year={year} />
                                </ChartWrapp>
                            </>
                        )
                    }
                    }
                </Summary>
                <RecentActivities />
            </>
        )
    }

    render() {
        return (
            <Wrapper>
                <FlexRow>
                    {this.renderContent()}
                </FlexRow>
                <TotalCosts />
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        signedIn: state.auth.signedIn,
    };
};

export default connect(mapStateToProps)(MainContent);