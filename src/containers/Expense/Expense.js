import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import empty from '../../img/empty.svg';

const Wrapper = styled.main`
    margin-left: 12rem;
    color: var(--clr-primary);
    padding: 2rem 0;
`;

const FlexRow = styled.div`
    display: flex;
    margin-bottom: 3rem;
`;

const Title = styled.h3`
    font-size: 2.5rem;
    text-align: center;
`;

const Img = styled.img`
    width: 40rem;
    height: auto;
    display: block;
    margin: 6rem auto 0;
`;

class Expense extends Component {

    renderContent = () => {
        if(!this.props.signedIn) {
            return <Img src={empty} alt="Empty illustration" />
        }
    }

    render() {
        return this.renderContent();
    }
}

const mapStateToProps = (state) => {
    return {
        signedIn: state.auth.signedIn,
    };
};

export default connect(mapStateToProps)(Expense);