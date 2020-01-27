import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import Logo from '../../components/Logo/Logo';
import Headline from '../../components/Headline/Headline';
import Alert from '../../components/Alert/Alert';

const Wrapper = styled.header`
    margin-left: 12rem;
    padding: 4rem;
    position: relative;
`;

class Header extends Component {

    render() {
        const { signedIn, verified } = this.props;
        return (
            <Wrapper>
                <Logo />
                <Headline />
                {signedIn && !verified ? <Alert /> : null}
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