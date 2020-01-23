import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import sprite from '../../../img/sprite.svg';

const ListItem = styled.li`
    list-style: none;
    margin-bottom: 4rem;
    transition: all .35s cubic-bezier(0.25, 0.46, 0.75, 1.36);
    
    &.slide-enter, &.slide-appear {
        opacity: 0;
        transform: translateX(-100px);
    }

    &.slide-enter-active-done , &.slide-appear-done {
        opacity: 1;
        transform: translateX(0);
    }

    &:hover svg {
        opacity: 1;
    }
`;

const LinkItem = styled(Link)`
    text-decoration: none;
`;

const Svg = styled.svg`
    fill: var(--clr-secondary);
    width: 3rem;
    height: 3rem;
    transition: opacity .12s ease-in;
    opacity: .6;
`;

const NavigationItem = ({ value, to }) => (
    <ListItem>
        <LinkItem to={to} title={to}>
            <Svg role="button" aria-labelledby="title desc">
                <use xlinkHref={`${sprite}#icon-${value}`}></use>
            </Svg>
        </LinkItem>
    </ListItem>
);

export default NavigationItem;