import { createTheme } from '@mantine/core'

import components from './overrides'

export const theme = createTheme({
    components,
    cursorType: 'pointer',
    fontFamily:
        'Manrope, Inter, Montserrat, Vazirmatn, Apple Color Emoji, Noto Sans SC, Twemoji Country Flags, sans-serif',
    fontFamilyMonospace: 'Fira Mono, JetBrains Mono, monospace',
    breakpoints: {
        xs: '25em',
        sm: '30em',
        md: '48em',
        lg: '64em',
        xl: '80em',
        '2xl': '96em',
        '3xl': '120em',
        '4xl': '160em'
    },
    scale: 1,
    fontSmoothing: true,
    focusRing: 'auto',
    white: '#f4f8f5',
    black: '#040805',
    colors: {
        dark: [
            '#f3f7f4',
            '#d9e2dc',
            '#aab8af',
            '#7d8d82',
            '#536158',
            '#344139',
            '#202a23',
            '#121a15',
            '#0a100c',
            '#040805'
        ],
        matrix: [
            '#e8ffed',
            '#c8ffd4',
            '#9cffad',
            '#73fa8d',
            '#55f27a',
            '#2dde5b',
            '#18c947',
            '#0fa33a',
            '#087c2d',
            '#03521d'
        ],
        green: [
            '#e8ffed',
            '#c8ffd4',
            '#9cffad',
            '#73fa8d',
            '#55f27a',
            '#2dde5b',
            '#18c947',
            '#0fa33a',
            '#087c2d',
            '#03521d'
        ],
        blue: [
            '#e7f5ff',
            '#d0ebff',
            '#a5d8ff',
            '#74c0fc',
            '#4dabf7',
            '#339af0',
            '#228be6',
            '#1c7ed6',
            '#1971c2',
            '#1864ab'
        ],
        yellow: [
            '#fff9db',
            '#fff3bf',
            '#ffec99',
            '#ffe066',
            '#ffd43b',
            '#fcc419',
            '#fab005',
            '#f59f00',
            '#f08c00',
            '#e67700'
        ],
        orange: [
            '#fff4e6',
            '#ffe8cc',
            '#ffd8a8',
            '#ffc078',
            '#ffa94d',
            '#ff922b',
            '#fd7e14',
            '#f76707',
            '#e8590c',
            '#d9480f'
        ]
    },
    primaryShade: 6,
    primaryColor: 'matrix',
    autoContrast: true,
    luminanceThreshold: 0.42,
    headings: {
        fontFamily: 'Unbounded, Manrope, Vazirmatn, Apple Color Emoji, Noto Sans SC, sans-serif',
        fontWeight: '600'
    },
    defaultRadius: 'lg'
})
