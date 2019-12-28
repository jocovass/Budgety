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
            font-size: 62%; // set the root fontsize to 10px
            --clr-bg: ${theme.colors.background};
            --clr-primary: ${theme.colors.primary};
            --clr-secondary: ${theme.colors.secondary};
            --clr-secondary-light: ${theme.colors['secondary-light']};
            --clr-accent: ${theme.colors.accent};
            --clr-error: ${theme.colors.error};
            --clr-success: ${theme.colors.success};
        }

        body {
            box-sizing: border-box;
            font-family: 'Roboto Mono', sans-serif;
        }

        button {
            background: none;
            cursor: pointer;
            border: none;
            outline: none;
            font-family: 'Roboto Mono', sans-serif;
        }
        `);

const GlobalStyles = withTheme(({ theme }) => {
    return <Global styles={makeGlobalStyles(theme)}/>
})

export { GlobalStyles as default };