import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.section`
    width: 22rem;
    padding: 2rem;
    text-align: center;
    border: 4px solid var(--clr-bg);
    border-radius: 10px;
    color: var(--clr-primary);
    margin: 0 14rem 0 auto;
`;

const Title = styled.h2`
    font-size: 2.2rem;
    margin-bottom: 5px;
    font-weight: 700;
`;

const Amount = styled.p`
    font-size: 1.8rem;
    font-weight: 500;
`;

const Headline = () => {
    return (
        <Wrapper>
            <Title>Total Budget:</Title>
            <Amount>£ 1.257</Amount>
        </Wrapper>
    )
};

export default Headline;