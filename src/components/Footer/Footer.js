import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.footer`
    margin-left: 12rem;
    text-align: center;
    padding: 8px;

    @media ${props => props.theme.mq.tablet} {
        margin-left: 0;
    }
`;

const Text = styled.p`
    font-size: 1.4rem;
    color: var(--clr-primary);
    font-weight: 300;
`;

const Footer = () => (
    <Wrapper>
        <Text>2020&copy; Joco</Text>
    </Wrapper>
);

export default Footer;