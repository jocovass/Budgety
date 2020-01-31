import React from 'react';
import { withTheme } from 'emotion-theming';
import { css, Global } from '@emotion/core';

const makeGlobalStyles = theme => (
    css`
        *, *::before, *::after {
            box-sizing: inherit;
            padding: 0;
            margin: 0;
        }

        html {
            font-size: 62.5%; // set the root fontsize to 10px
            --clr-bg: ${theme.colors.background};
            --clr-primary: ${theme.colors.primary};
            --clr-primary-light: ${theme.colors['primary-light']};
            --clr-secondary: ${theme.colors.secondary};
            --clr-secondary-light: ${theme.colors['secondary-light']};
            --clr-accent: ${theme.colors.accent};
            --clr-error: ${theme.colors.error};
            --clr-success: ${theme.colors.success};
            --clr-income: ${theme.colors.income};
            --clr-expense: ${theme.colors.expense};

            @media ${theme.mq.laptop} {
                font-size: 56.25%;
            }

            @media ${theme.mq['tablet-land']} {
                font-size: 50%;
            }

            @media ${theme.mq.mobile} {
                font-size: 43.5%;
            }
        }

        body {
            box-sizing: border-box;
            font-family: 'Merriweather', sans-serif;
            background-color: ${theme.colors['primary-light']};
        }

        button {
            background: none;
            cursor: pointer;
            border: none;
            outline: none;
            font-family: 'Merriweather', sans-serif;
        }
        `);

const GlobalStyles = withTheme(({ theme }) => {
    return <Global styles={makeGlobalStyles(theme)}/>
})

export { GlobalStyles as default };