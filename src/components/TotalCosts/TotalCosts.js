import React from 'react';
import styled from '@emotion/styled';
import CostsItem from '../CostsItem/CostsItem';

const Wrapper = styled.div`
    background-color: var(--clr-secondary);
    box-shadow: 5px 5px 20px rgba(0, 0, 0, .1);
    border-radius: 10px;
    padding: 3rem 2rem 2rem;
    margin: 0 auto;
    width: 97%;
`;

const TotalCosts = () => {

    return (
        <Wrapper>
            <CostsItem />
            <CostsItem />
            <CostsItem />
            <CostsItem />
            <CostsItem />
            <CostsItem />
            <CostsItem />
            <CostsItem />
        </Wrapper>
    );
};

export default TotalCosts;