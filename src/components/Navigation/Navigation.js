import React from 'react';
import styled from '@emotion/styled';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import NavigationItem from './NavigationItem/NavigationItem';

const Ul = styled.ul`
    list-style: none;
    margin-top: 15rem;
`;

const Navigation = () => {
    return (
        <nav>
            <Ul>
                <TransitionGroup component={null}>
                    <CSSTransition timeout={10} 
                                   classNames='slide'
                                   in={true} 
                                   appear >
                        <NavigationItem value="home" to="/" />
                    </CSSTransition>
                    <CSSTransition timeout={10} 
                                   classNames='slide'
                                   in={true} 
                                   appear >
                        <NavigationItem value="income" to="income" />
                    </CSSTransition>
                    <CSSTransition timeout={100} 
                                   classNames='slide'
                                   in={true} 
                                   appear >
                        <NavigationItem value="credit-card" to="expense" />
                    </CSSTransition>
                    <CSSTransition timeout={200} 
                                   classNames='slide' 
                                   in={true}
                                   appear >
                        <NavigationItem value="calendar" to="calendar" />
                    </CSSTransition>
                </TransitionGroup>
            </Ul>
        </nav>
    )
};

export default Navigation;