import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { app } from '../../config/firebase';
import { signInSuccess, emailVerified, signOutSuccess } from '../../store/actions/auth';
import { toggleMenu } from '../../store/actions/app';
import Login from '../../components/Login/Login';
import Navigation from '../../components/Navigation/Navigation';
import Add from '../../components/Add/Add';
import Logout from '../../components/Logout/Logout';
import Loader from '../../components/ui/Loader/Loader';

const Wrapper = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 12rem;
    height: 100vh;
    background-color: var(--clr-bg);
    padding: 3rem 0;
    text-align: center;
    box-shadow: inset 1px 1px 10px rgba(250, 250, 250, .1),
                5px 5px 15px rgba(0, 0, 0, .3);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 5;
    transition: transform .15s ease-in-out;

    @media ${props => props.theme.mq.tablet} {
        transform: ${props => props.open ? `translateX(0%)` : `translateX(-100%)`};
    }
`;

class SideBar extends Component {
    componentDidMount() {
        this.removeAuthListener = app.auth().onAuthStateChanged(user => {
            this.onAuthChange(!!user, user);
        });
    }

    componentWillUnmount() {
        this.removeAuthListener();
    }

    // Every time the auth state changes this function runs
    onAuthChange = (signedIn, user) => {
        if(signedIn) {
            const userId = user.uid;
            const userName = user.displayName;
            user.getIdToken() 
                .then(token => {
                    if(user.emailVerified) {
                        this.props.emailVerified();
                    }
                    this.props.signInSuccess(userName, userId, token);
                });
        } else {
            this.props.signOutSuccess();
        }
    };

    toggle = (e) => {
        if(e.target.closest('section > button') || e.target.closest('a')) {
           this.props.toggleMenu(!this.props.menuIsOpen);
        }
    }

    renderBtn() {
        if(this.props.signedIn === null) {
            return <Loader size="5" />
        } else if(this.props.signedIn) {
            return <Logout />;
        } else {
            return <Login />;
        }
    }

    render() {
        return (
            <Wrapper open={this.props.menuIsOpen} onClick={this.toggle}>
                {this.renderBtn()}
                <Navigation />
                <Add />
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        signedIn: state.auth.signedIn,
        menuIsOpen: state.app.menuIsOpen,
    };
};

export default connect(mapStateToProps, 
                      { signInSuccess, signOutSuccess, emailVerified, toggleMenu })(SideBar);