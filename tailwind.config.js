const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            zIndex: {
				1: '1',
				'-1': '-1',
				2: '2',
				'-2': '-2',
				3: '3',
				'-3': '-3',
				4: '4',
				'-4': '-4',
				5: '5',
				'-5': '-5',
				6: '6',
				'-6': '-6',
				7: '7',
				'-7': '-7',
				8: '8',
				'-8': '-8',
				9: '9',
				'-9': '-9',
			},
        },
    },
    variants: {
        extend: {
            backgroundColor: ['active'],
        }
    },
    content: [
        './app/**/*.php',
        './resources/**/*.html',
        './resources/**/*.js',
        './resources/**/*.jsx',
        './resources/**/*.ts',
        './resources/**/*.tsx',
        './resources/**/*.php',
        './resources/**/*.vue',
        './resources/**/*.twig',
    ],
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}
