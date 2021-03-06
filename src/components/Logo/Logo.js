import React from 'react';
import styled from '@emotion/styled';
import logo from '../../img/logo.png';

const H1 = styled.h1`
    margin-left: 6rem;
    margin-bottom: 5rem;

    @media ${props => props.theme.mq.mobile} {
        margin: 0 2rem 4rem;
    }
`;

const Img = styled.img`
    width: 20rem;

    @media ${props => props.theme.mq.mobile} {
        width: 17rem;
    }
`;

const Logo = () => {

    return (
        <H1>
            <Img src={logo} alt="Manage your money"/>
        </H1>
    );
};

export default Logo;