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

function selectIncomes(data) {
    return data.filter((val) => {
        return val.transaction === 'Income';
    });
}  

class Income extends Component {
    renderContent = () => {
        if(!this.props.signedIn) {
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
                                        <Title>Summary Of Your Incomes</Title>
                                        <ChartWrapp>
                                            <ChartPie data={this.props.totalIncomes}/>
                                        </ChartWrapp>
                                    </>
                                )
                            }}
                        </Summary>
                        <RecentActivities data={selectIncomes(this.props.recentActivities || [])} />
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
    };
};

export default connect(mapStateToProps)(Income);