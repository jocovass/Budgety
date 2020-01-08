import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
    width: 40%;
    display: inline-block;
    margin: 0 2rem 2rem;
`;

const Title = styled.p`
    font-size: 1.6rem;
    font-weight: 300;
    margin-bottom: 5px;
    text-transform: capitalize;
    margin-left: 2rem;
`;

const Bar = styled.div`
    padding: .65rem;
    background-color: rgba(0, 0, 0, .5);
    border-radius: 100px;
    box-shadow: inset 0 -1px 1px rgba(255,255,255,0.3);
`;

const Meter = styled.span`
    display: block;
    width: 100%;
    height: 2rem;
    border-radius: 100px;
    background-color: #c3c3c3;
    box-shadow: inset 0 -1px 1px rgba(255,255,255,0.3),
                inset 0 1px 9px rgba(0,0,0,0.3);
`;

const Progress = styled.span`
    display: block;
    width: 40%;
    height: 100%;
    border-radius: 100px;
    background-color: var(--clr-income);
    box-shadow: inset 0 2px 9px  rgba(255,255,255,0.3),
                inset 0 -2px 6px rgba(0,0,0,0.4);
    overflow: hidden;
    text-align: center;
`;

const Value = styled.p`
    color: var(--clr-secondary);
    font-size: 1.4rem;
`;

const CostsItem = () => {
    return (
        <Wrapper>
            <Title>Food</Title>
            <Bar>
                <Meter>
                    <Progress>
                        <Value>40%</Value>
                    </Progress>
                </Meter>
            </Bar>
        </Wrapper>
    );
};

export default CostsItem;