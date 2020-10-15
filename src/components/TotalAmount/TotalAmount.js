import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.section`
    width: 23rem;
    padding: 2rem;
    text-align: center;
    border-radius: 10px;
    color: var(--clr-primary);
    background-color: var(--clr-secondary);
    box-shadow: 5px 5px 20px rgba(0, 0, 0, .1);

    @media ${props => props.theme.mq.tablet} {
        width: 20rem;
    }

    @media ${props => props.theme.mq.mobile} {
        width: 100%;
        padding: 1rem 0;
        background-color: transparent;
        box-shadow: none;
        border-radius: 0;

        :not(:last-child) {
            border-bottom: 2px solid rgba(0,0,0,.1);
        }
    }
`;

const Title = styled.h2`
    font-size: 1.6rem;
    margin-bottom: 3px;
    font-weight: 300;
`;

const Amount = styled.p`
    font-size: 2.3rem;
    font-weight: 700;
    color: ${props => `var(--clr-${props.clr})`};
`;

const TtotalIncome = ({ value, title, clr = 'bg' }) => (
    <Wrapper>
        <Title>Total {title}:</Title>
        <Amount clr={clr}>£ {value.toFixed(2)}</Amount>
    </Wrapper>
);

export default TtotalIncome;