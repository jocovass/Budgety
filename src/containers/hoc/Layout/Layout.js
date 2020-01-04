import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import IdleTimer from 'react-idle-timer';
import { onSignOut } from '../../../store/actions/auth';
import SideBar from '../../SideBar/SideBar';
import history from '../../../history';
import Loader from '../../../components/ui/Loader/Loader';
import Header from '../../Header/Header';

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
            <>
                {this.props.signedIn ? <IdleTimer ref={this.idleTimer}
                                            element={document}
                                            onActive={this.onActive}
                                            onIdle={this.onIdle}
                                            onAction={this.onAction}
                                            debounce={250}
                                            timeout={this.state.timeout} />
                                     : null}
                <SideBar />
                <Header />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        signedIn: state.auth.signedIn,
    };
};

export default connect(mapStateToProps, { onSignOut })(Layout);