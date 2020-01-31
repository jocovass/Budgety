import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
    width: 40%;
    display: inline-block;
    margin: 0 2rem 2rem;

    @media ${props => props.theme.mq.mobile} {
        widtH: 100%;
        margin: 0 0 2rem;
    }
`;
    
    const Title = styled.p`
    font-size: 1.6rem;
    font-weight: 300;
    margin-bottom: 5px;
    text-transform: capitalize;
    margin-left: 2rem;
    text-transform: capitalize;
    `;
    
    const Bar = styled.div`
    padding: .65rem;
    background-color: rgba(0, 0, 0, .5);
    border-radius: 100px;
    box-shadow: inset 0 -1px 1px rgba(255,255,255,0.3);
    position: relative;
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
    width: ${props => props.w}%;
    height: 100%;
    border-radius: 100px;
    background-color: ${props => props.w.toFixed() < 50 ? `var(--clr-income)` : `var(--clr-expense)`};
    box-shadow: inset 0 2px 9px  rgba(255,255,255,0.3),
                inset 0 -2px 6px rgba(0,0,0,0.4);
    overflow: hidden;
    text-align: center;
`;

const Value = styled.p`
    color: var(--clr-secondary);
    font-size: 1.4rem;
    position: absolute;
    top: 6px;
    left: 50%;

    @media ${props => props.theme.mq.mobile} {
        top: 4px;
    }
`;

const CostsItem = ({ name, value }) => {
    return (
        <Wrapper>
            <Title>{name}</Title>
            <Bar>
                <Meter>
                    <Progress w={value}>
                        <Value>{value === 0 ? `${value}%` : `${value.toFixed(1)}%`}</Value>
                    </Progress>
                </Meter>
            </Bar>
        </Wrapper>
    );
};

export default CostsItem;