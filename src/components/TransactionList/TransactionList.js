import React from 'react';
import styled from '@emotion/styled';
import Transaction from './Transaction/Transaction';

const data = [
    {
      "id": "hack",
      "label": "hack",
      "value": 368,
      "color": "hsl(39, 70%, 50%)",
      "transaction": "income",
      "sign": "+",
    },
    {
      "id": "ruby",
      "label": "ruby",
      "value": 531,
      "color": "hsl(272, 70%, 50%)",
      "transaction": "income",
      "sign": "+",
    },
    {
      "id": "lisp",
      "label": "lisp",
      "value": 60,
      "color": "hsl(24, 70%, 50%)",
      "transaction": "expanse",
      "sign": "-",
    },
    {
      "id": "java",
      "label": "java",
      "value": 379,
      "color": "hsl(43, 70%, 50%)",
      "transaction": "expanse",
      "sign": "-",
    },
    {
      "id": "erlang",
      "label": "erlang",
      "value": 98,
      "color": "hsl(134, 70%, 50%)",
      "transaction": "expanse",
      "sign": "-",
    }
  ];

const List = styled.ul`
  list-style: none;
`;

const TransactionList = () => {
    function renderList() {
        return data.map((val, index) => {
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