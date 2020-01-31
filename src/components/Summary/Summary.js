import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.section`
    position: relative;
    flex: 3;
    background-color: var(--clr-secondary);
    border-radius: 10px;
    padding: 2rem 1rem;
    margin: 0;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, .1);

    @media ${props => props.theme.mq.tablet} {
        overflow-x: scroll;
    }
`;

const Summary = ({ children }) => {

    return (
        <Wrapper>
            {children()}
        </Wrapper>
    );
};

export default Summary;