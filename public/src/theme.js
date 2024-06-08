// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            light: '#4d9bb1',
            main: '#02668a',
            dark: '#00405c',
            contrastText: '#ffffff'
        },
        secondary: {
            light: '#76d7ea',
            main: '#29abe2',
            dark: '#007ab8',
            contrastText: '#000000'
        },
        error: {
            light: '#e57373',
            main: '#f44336',
            dark: '#d32f2f',
            contrastText: '#ffffff'
        },
        warning: {
            light: '#ffb74d',
            main: '#ff9800',
            dark: '#f57c00',
            contrastText: '#000000'
        },
        info: {
            light: '#64b5f6',
            main: '#2196f3',
            dark: '#1976d2',
            contrastText: '#ffffff'
        },
        success: {
            light: '#81c784',
            main: '#4caf50',
            dark: '#388e3c',
            contrastText: '#ffffff'
        },
        background: {
            default: '#f4f6f8',
            paper: '#ffffff'
        },
        text: {
            primary: '#000000',
            secondary: '#ffffff'
        }
    }
});

export default theme;
