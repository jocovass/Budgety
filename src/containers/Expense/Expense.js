import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import empty from '../../img/empty.svg';
import Summary from '../../components/Summary/Summary';
import RecentActivities from '../../components/RecentActivities/RecentActivities';
import ChartPie from '../../components/Chart/ChartPie';

const Wrapper = styled.main`
    margin-left: 12rem;
    color: var(--clr-primary);
    padding: 2rem 0;
`;

const FlexRow = styled.div`
    display: flex;
    margin-bottom: 3rem;
`;

const ChartWrapp = styled.div`
    width: 90%;
    height: 500px;
    margin: 1rem auto;
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

function selectExpenses(data) {
    return data.filter((val) => {
        return val.transaction === 'Expense';
    });
}

class Expense extends Component {
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
                        <Summary>
                            { () => {
                                return (
                                    <>
                                        <Title>Summary Of Your Expenses</Title>
                                        <ChartWrapp>
                                            <ChartPie data={this.props.totalCosts}
                                            loading={this.props.loading}/>
                                        </ChartWrapp>
                                    </>
                                )
                            }}
                        </Summary>
                        <RecentActivities data={selectExpenses(this.props.recentActivities || [])} />
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
        totalCosts: state.db.totalCosts,
        recentActivities: state.db.recentActivities,
        loader: state.db.loader,
    };
};

export default connect(mapStateToProps)(Expense);