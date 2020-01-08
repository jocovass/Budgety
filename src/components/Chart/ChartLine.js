import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'Jan', Income: 4000, Expense: 2400, amt: 2400,
  },
  {
    name: 'Feb', Income: 3000, Expense: 1398, amt: 2210,
  },
  {
    name: 'March', Income: 2000, Expense: 9800, amt: 2290,
  },
  {
    name: 'April', Income: 2780, Expense: 3908, amt: 2000,
  },
  {
    name: 'May', Income: 1890, Expense: 4800, amt: 2181,
  },
  {
    name: 'June', Income: 2390, Expense: 3800, amt: 2500,
  },
  {
    name: 'July', Income: 3490, Expense: 4300, amt: 2100,
  },
  {
    name: 'August', Income: 3490, Expense: 4300, amt: 2100,
  },
  {
    name: 'Sept', Income: 3490, Expense: 4300, amt: 2100,
  },
  {
    name: 'Okt', Income: 3490, Expense: 4300, amt: 2100,
  },
  {
    name: 'Nov', Income: 3490, Expense: 4300, amt: 2100,
  },
  {
    name: 'Dec', Income: 3490, Expense: 4300, amt: 2100,
  },
];

export default class Example extends PureComponent {

  render() {
    return (
    <ResponsiveContainer width="100%" 
                         height={400}>
        <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Income" stroke="#02d1b9" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="Expense" stroke="#d1069b" />
        </LineChart>
    </ResponsiveContainer>
    );
  }
}
