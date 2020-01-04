import React, { Component } from 'react';
import styled from '@emotion/styled';
import Logo from '../../components/Logo/Logo';
import Headline from '../../components/Headline/Headline';

const Wrapper = styled.header`
    margin-left: 12rem;
    padding: 4rem;
`;

class Header extends Component {

    render() {
        return (
            <Wrapper>
                <Logo />
                <Headline />
            </Wrapper>
        )
    }
}

export default Header;