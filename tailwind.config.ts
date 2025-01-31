/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			coral: {
  				'50': '#fff1ee',
  				'100': '#ffe4dd',
  				'200': '#ffc8bb',
  				'300': '#ffa088',
  				'400': '#ff7b5f',
  				'500': '#ff5533',
  				'600': '#ff3311',
  				'700': '#ff1100',
  				'800': '#cc0e00',
  				'900': '#a60b00'
  			},
  			terra: {
  				'50': '#fcf9f5',
  				'100': '#f8f1e9',
  				'200': '#efdcc8',
  				'300': '#e5c4a7',
  				'400': '#d49b74',
  				'500': '#c37f52',
  				'600': '#8b4513',
  				'700': '#723a0f',
  				'800': '#5a2e0c',
  				'900': '#42220a'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			}
  		},
  		fontFamily: {
  			playfair: [
  				'var(--font-playfair)'
  			],
  			space: [
  				'var(--font-space-mono)'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [import("tailwindcss-animate"), import("tailwindcss-animate")],
}

