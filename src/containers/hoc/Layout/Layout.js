import React, { Component, createRef } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import IdleTimer from 'react-idle-timer';
import styled from '@emotion/styled';
import { onSignOut } from '../../../store/actions/auth';
import SideBar from '../../SideBar/SideBar';
import history from '../../../history';
import Header from '../../Header/Header';
import MainContent from '../../MainContent/MainContent';
import Income from '../../Income/Income';
import Footer from '../../../components/Footer/Footer';

const Wrapper = styled.div`
    max-width: 1600px;
    margin: 0 auto;
    position: relative;
`;

const StickyFooter = styled.div`
    min-height: calc(100vh - 34px);
`;

class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timeout:1000 * 15 * 1,
            isTimedOut: false
        };
        this.idleTimer = createRef();
    }

    onAction = (e) => {
        console.log('user did something', e)
        this.setState({isTimedOut: false})
      }
     
    onActive = (e) => {
        console.log('user is active', e)
        this.setState({isTimedOut: false})
      }
     
    onIdle = (e) => {
        console.log('user is idle', e)
        const isTimedOut = this.state.isTimedOut
        if (isTimedOut && this.props.signedIn) {
            this.props.onSignOut();
            history.push('/');
        } else {
          this.idleTimer.current.reset();
          this.setState({isTimedOut: true})
        }
        
      }

    render() {
        return (
            <Wrapper>
                <StickyFooter>
                    {this.props.signedIn ? <IdleTimer ref={this.idleTimer}
                                                element={document}
                                                onActive={this.onActive}
                                                onIdle={this.onIdle}
                                                onAction={this.onAction}
                                                debounce={250}
                                                timeout={this.state.timeout} />
                                        : null}
                    <SideBar />
                    <Route path="/" component={Header}/>
                    <Switch>
                        <Route path="/" exact component={MainContent}/>
                        <Route path="/income" component={Income}/>
                    </Switch>
                </StickyFooter>
                <Footer />
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        signedIn: state.auth.signedIn,
    };
};

export default connect(mapStateToProps, { onSignOut })(Layout);