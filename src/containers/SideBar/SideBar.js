import React, { Component } from 'react';
import styled from '@emotion/styled';
import Login from '../../components/Login/Login';
import Navigation from '../../components/Navigation/Navigation';
import Add from '../../components/Add/Add';

const Wrapper = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 12rem;
    height: 100vh;
    background-color: var(--clr-bg);
    padding: 3rem 0;
    text-align: center;
    box-shadow: inset 5px 5px 20px rgba(250, 250, 250, .1),
                5px 5px 15px rgba(0, 0, 0, .3);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

class SideBar extends Component {
    render() {
        return (
            <Wrapper>
                <Login />
                <Navigation />
                <Add />
            </Wrapper>
        )
    }
}

export default SideBar;