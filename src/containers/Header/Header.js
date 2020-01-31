import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import Logo from '../../components/Logo/Logo';
import BurgerButton from '../../components/BurgerButton/BurgerButton';
import Headline from '../../components/Headline/Headline';
import Alert from '../../components/Alert/Alert';

const Wrapper = styled.header`
    margin-left: 12rem;
    padding: 4rem;
    position: relative;

    @media ${props => props.theme.mq.tablet} {
        margin: 0;
        padding: 4rem 2rem;
    }
`;

class Header extends Component {

    render() {
        const { signedIn, verified } = this.props;
        return (
            <Wrapper>
                <BurgerButton />
                <Logo />
                {signedIn && !verified ? <Alert /> : null}
                <Headline />
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        signedIn: state.auth.signedIn,
        verified: state.auth.verified,
    };
};

export default connect(mapStateToProps)(Header);