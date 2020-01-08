import React from 'react';
import styled from '@emotion/styled';
import DropDown from '../ui/DropDown/DropDown';
import ChartLine from '../Chart/ChartLine';

const Wrapper = styled.section`
    position: relative;
    flex: 3;
    background-color: var(--clr-secondary);
    border-radius: 10px;
    padding: 2rem 1rem;
    margin: 0 1rem;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, .1);
`;

const Title = styled.h3`
    font-size: 2.5rem;
    text-align: center;
`;

const ChartWrapp = styled.div`
    width: 80%;
    margin: 5rem auto 1rem;
`;

const Summary = () => {

    return (
        <Wrapper>
            <Title>Summary Of Your Balance</Title>
            <DropDown />
            <ChartWrapp>
                <ChartLine />
            </ChartWrapp>
        </Wrapper>
    );
};

export default Summary;