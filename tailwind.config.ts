
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
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
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Enhanced cyberpunk colors
				cyber: {
					black: '#0f0f12',
					dark: '#121420',
					purple: '#cc00ff',
					pink: '#ff0099',
					blue: '#00ffff',
					yellow: '#ffff00',
					green: '#39ff14'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				mono: ['Roboto Mono', 'monospace'],
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'divine-aurora': 'linear-gradient(45deg, rgba(204, 0, 255, 0.3), rgba(0, 255, 255, 0.3), rgba(255, 0, 153, 0.3), rgba(255, 255, 0, 0.3), rgba(57, 255, 20, 0.3))',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'gradient-shift': {
					'0%, 100%': { 
						'background-position': '0% 50%',
					},
					'50%': {
						'background-position': '100% 50%',
					},
				},
				'neon-pulse': {
					'0%, 100%': {
						filter: 'drop-shadow(0 0 0.5rem rgba(204, 0, 255, 0.7))',
					},
					'50%': {
						filter: 'drop-shadow(0 0 1.5rem rgba(204, 0, 255, 1))',
					},
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0) rotate(0deg)',
					},
					'33%': {
						transform: 'translateY(-15px) rotate(120deg)',
					},
					'66%': {
						transform: 'translateY(-10px) rotate(240deg)',
					},
				},
				'slide-up': {
					'0%': {
						transform: 'translateY(30px)',
						opacity: '0',
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1',
					},
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)',
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)',
					},
				},
				'rotate-slow': {
					'0%': {
						transform: 'rotate(0deg)',
					},
					'100%': {
						transform: 'rotate(360deg)',
					},
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.8)',
						opacity: '0',
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1',
					},
				},
				'divine-shimmer': {
					'0%': {
						background-position: '-200% 0',
					},
					'100%': {
						background-position: '200% 0',
					},
				},
				'aurora': {
					'0%, 100%': {
						transform: 'translateX(-50%) translateY(-50%) rotate(0deg) scale(1)',
					},
					'33%': {
						transform: 'translateX(-50%) translateY(-50%) rotate(120deg) scale(1.1)',
					},
					'66%': {
						transform: 'translateX(-50%) translateY(-50%) rotate(240deg) scale(0.9)',
					},
				},
				'orbit': {
					'0%': {
						transform: 'rotate(0deg) translateX(100px) rotate(0deg)',
					},
					'100%': {
						transform: 'rotate(360deg) translateX(100px) rotate(-360deg)',
					},
				},
				'tilt': {
					'0%, 50%, 100%': {
						transform: 'rotate(0deg)',
					},
					'25%': {
						transform: 'rotate(1deg)',
					},
					'75%': {
						transform: 'rotate(-1deg)',
					},
				},
				'glow-pulse': {
					'0%, 100%': {
						box-shadow: '0 0 20px rgba(204, 0, 255, 0.5), 0 0 40px rgba(204, 0, 255, 0.3), 0 0 60px rgba(204, 0, 255, 0.1)',
					},
					'50%': {
						box-shadow: '0 0 40px rgba(204, 0, 255, 0.8), 0 0 80px rgba(204, 0, 255, 0.6), 0 0 120px rgba(204, 0, 255, 0.4)',
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'gradient-shift': 'gradient-shift 8s ease infinite',
				'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
				'float': 'float 8s ease-in-out infinite',
				'slide-up': 'slide-up 0.6s ease-out forwards',
				'fade-in': 'fade-in 0.8s ease-out forwards',
				'rotate-slow': 'rotate-slow 20s linear infinite',
				'scale-in': 'scale-in 0.5s ease-out forwards',
				'divine-shimmer': 'divine-shimmer 3s linear infinite',
				'aurora': 'aurora 12s ease-in-out infinite',
				'orbit': 'orbit 15s linear infinite',
				'tilt': 'tilt 10s infinite linear',
				'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
			},
			boxShadow: {
				'neon-purple': '0 0 10px rgba(204, 0, 255, 0.7), 0 0 30px rgba(204, 0, 255, 0.5), 0 0 50px rgba(204, 0, 255, 0.3)',
				'neon-blue': '0 0 10px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.5), 0 0 50px rgba(0, 255, 255, 0.3)',
				'neon-pink': '0 0 10px rgba(255, 0, 153, 0.7), 0 0 30px rgba(255, 0, 153, 0.5), 0 0 50px rgba(255, 0, 153, 0.3)',
				'divine': '0 0 20px rgba(204, 0, 255, 0.4), 0 0 40px rgba(0, 255, 255, 0.3), 0 0 60px rgba(255, 0, 153, 0.2)',
				'ethereal': '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 40px rgba(204, 0, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
			},
			backdropBlur: {
				xs: '2px',
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
