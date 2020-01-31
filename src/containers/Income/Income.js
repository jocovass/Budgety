import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import empty from '../../img/empty.svg';
import Summary from '../../components/Summary/Summary';
import ChartPie from '../../components/Chart/ChartPie';
import RecentActivities from '../../components/RecentActivities/RecentActivities';

const Wrapper = styled.main`
    margin-left: 12rem;
    color: var(--clr-primary);
    padding: 2rem;

    @media ${props => props.theme.mq.tablet} {
        margin-left: 0;
    }
`;

const FlexRow = styled.div`
    display: flex;
    margin-bottom: 3rem;

    @media ${props => props.theme.mq['tablet-land']} {
        flex-direction: column;
    }
`;

const ChartWrapp = styled.div`
    width: 98%;
    height: 50rem;
    margin: 1rem auto;

    @media ${props => props.theme.mq.tablet} {
        min-width: 80rem;
    }
`;

const Title = styled.h3`
    font-size: 2.5rem;
    text-align: center;
`;

const Img = styled.img`
    width: 40rem;
    height: auto;
    display: block;
    margin: 6rem auto 0;
`;

const Text = styled.p`
    font-size: 18px;
    text-align: center;
    color: var(--clr-bg);
    margin-top: 3rem;
`;

function selectIncomes(data) {
    return data.filter((val) => {
        return val.transaction === 'Income';
    });
}  

class Income extends Component {
    renderContent = () => {
        if(!this.props.signedIn || this.props.recentActivities.length === 0) {
            return (
                <>
                    <Img src={empty} alt="Empty illustration" />
                    <Text>There is no data...</Text>
                </>
            );
        } else {
            return (
                <Wrapper>
                    <FlexRow>
                        <RecentActivities data={selectIncomes(this.props.recentActivities || [])} />
                        <Summary>
                            { () => {
                                return (
                                    <>
                                        <Title>Summary Of Your Incomes</Title>
                                        <ChartWrapp>
                                            <ChartPie data={this.props.totalIncomes}
                                            loading={this.props.loading} />
                                        </ChartWrapp>
                                    </>
                                )
                            }}
                        </Summary>
                    </FlexRow>
                </Wrapper>
            )
        }
    }

    render() {
        return this.renderContent();
    }
}

const mapStateToProps = (state) => {
    return {
        signedIn: state.auth.signedIn,
        totalIncomes: state.db.totalIncomes,
        recentActivities: state.db.recentActivities,
        loading: state.db.loading,
    };
};

export default connect(mapStateToProps)(Income);