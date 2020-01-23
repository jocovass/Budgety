import React from 'react';
import styled from '@emotion/styled';
import Transaction from './Transaction/Transaction';
import notFound from '../../img/notfound.svg';

const List = styled.ul`
  list-style: none;
`;

const Svg = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 2rem;
`;

const NotFoundWrapp = styled.div`
    margin: 5rem auto 0;
    width: 80%;
`;

const Message = styled.p`
    font-size: 1.4rem;
    text-align: center;
`;

const TransactionList = ({ recentActivities }) => {
    function renderList() {
      if(recentActivities.length === 0) {
        return (
            <NotFoundWrapp>
                <Svg src={notFound} />
                <Message>No transactions...</Message>
            </NotFoundWrapp>
        );
      }

      return recentActivities.map((val, index) => {
            return <Transaction value={val} key={val.id} />
        });
    }

    return (
        <List>
            {renderList()}
        </List>
    )
};

export default TransactionList;