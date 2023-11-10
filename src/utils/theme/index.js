import { css } from '@emotion/react';

export const theme = (mode) =>
  mode === 'light'
    ? {
        colors: {
          success: '#d4edda',
          danger: '#f8d8db',
          primary: '#8b3dff',
          secondary: '#B1FF3D',
          dark: '#010409',
          white: '#ffffff',
          lightBlue: '#2196F3',
          yellow: '#f3b213',
          grey: '#38444d',
          gradient: css`
            color: rgb(139, 61, 255);
            color: linear-gradient(
              0deg,
              rgba(139, 61, 255, 1) 1%,
              rgba(97, 4, 236, 1) 100%
            );
          `,
        },
        bg: {
          primaryGradient: css`
            background: rgb(139, 61, 255);
            background: linear-gradient(
              0deg,
              rgba(139, 61, 255, 1) 1%,
              rgba(97, 4, 236, 1) 100%
            );
          `,
          primary: '#fff',
        },
        shadow: css`
          box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        `,
      }
    : {
        colors: {
          success: '#d4edda',
          danger: '#f8d8db',
          primary: '#8b3dff',
          secondary: '#B1FF3D',
          dark: '#010409',
          white: '#ffffff',
          lightBlue: '#3cc6f7',
          yellow: '#f3b213',
          grey: '#38444d',
          gradient: css`
            color: rgb(139, 61, 255);
            color: linear-gradient(
              0deg,
              rgba(139, 61, 255, 1) 1%,
              rgba(97, 4, 236, 1) 100%
            );
          `,
        },
        bg: {
          primaryGradient: css`
            background: rgb(139, 61, 255);
            background: linear-gradient(
              0deg,
              rgba(139, 61, 255, 1) 1%,
              rgba(97, 4, 236, 1) 100%
            );
          `,
          primary: '#0d1117',
        },
        shadow: css`
          box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        `,
      };
