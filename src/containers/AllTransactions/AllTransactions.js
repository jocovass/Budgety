import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import Loader from '../../components/ui/Loader/Loader';

const Wrapper = styled.section`
    margin-left: 12rem;
`;

const Content = styled.div`
    background-color: var(--clr-secondary);
    border-radius: 10px;
    padding: 2rem 1rem;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, .1);
    width: 60%;
    margin: 0 auto;
`;

const Title = styled.h4`
    font-size: 2.1rem;
    text-align: center;
    margin-bottom: 3rem;
`;

const TransactionBox = styled.div`
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;

    &:not(:last-child) {
        border-bottom: 2px solid rgba(0,0,0, .1);
    }
`;

const TransactionItem = styled.p`
    font-size: 1.6rem;
    color: var(--clr-primary);
    text-transform: capitalize;
`;

const TransactionValue = styled.span`
    font-size: 300;
    color: ${props => props.transaction === 'Income' ? `var(--clr-income)` : `var(--clr-expense)`}
`;

const TransactionDate = styled.p`
    font-size: 1.2rem;
    opacity: .6;
`;

class AllTransactions extends Component {
    renderTransactionList() {
        if(!this.props.recentActivities) return <Loader color='bg'
                                                        size='8'
                                                        gapTop='10'
                                                        gapBottom='10'/>;
        return this.props.recentActivities.map((val) => {
            return (
                <TransactionBox key={val.id}>
                    <TransactionItem>
                        <TransactionValue transaction={val.transaction}>
                            {`${val.transaction === 'Income' ? '+' : '-'} £${val.value}`}
                        </TransactionValue>
                        {` - ${val.name}`}
                    </TransactionItem>
                    <TransactionDate>
                        {val.time.toDate().toDateString()}
                    </TransactionDate>
                </TransactionBox>
            )
        })
    }

    render() {
        return (
            <Wrapper>
                <Content>
                    <Title>Transactions</Title>
                    {this.renderTransactionList()}
                </Content>
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recentActivities: state.db.recentActivities,
    };
};

export default connect(mapStateToProps)(AllTransactions);