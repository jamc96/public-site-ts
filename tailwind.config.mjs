/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from 'tailwindcss-animate'
import typography from '@tailwindcss/typography'

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  plugins: [tailwindcssAnimate, typography],
  prefix: '',
  safelist: [
    'lg:col-span-4',
    'lg:col-span-6',
    'lg:col-span-8',
    'lg:col-span-12',
    'border-border',
    'bg-card',
    'border-error',
    'bg-error/30',
    'border-success',
    'bg-success/30',
    'border-warning',
    'bg-warning/30',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        '2xl': '4rem',
        DEFAULT: '1rem',
        lg: '4rem',
        md: '2rem',
        sm: '1rem',
        xl: '4rem',
      },
      screens: {
        '2xl': '86rem',
        lg: '64rem',
        md: '48rem',
        sm: '40rem',
        xl: '80rem',
      },
    },
    extend: {
      fontFamily: {
        primary: ['"Golos Text"', 'var(--font-geist-sans)', 'sans-serif'],
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '20px', letterSpacing: '0.12px' }],
        sm: ['0.875rem', { lineHeight: '22px', letterSpacing: '0.16px' }],
        base: ['1rem', { lineHeight: '24px', letterSpacing: '0.16px' }],
        lg: ['1.125rem', { lineHeight: '26px', letterSpacing: '0.18px' }],
        xl: ['1.5rem', { lineHeight: '32px', letterSpacing: '0.21px' }],
        'xl-uppercase': ['1.5rem', { lineHeight: '26px', letterSpacing: '0.21px' }],
        '2xl': ['2rem', { lineHeight: '40px' }],
        '3xl': ['3rem', { lineHeight: '54px' }],
        '4xl': ['4rem', { lineHeight: '68px' }],
        '20': ['1.25rem', { lineHeight: '32px', letterSpacing: '0.21px' }],
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: '#0084c8',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsla(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        success: '#00b298',
        warning: '#fb8c00',
        error: 'hsl(var(--error))',
        'state-blue': '#284864',
        base: '#fff',
        dark: '#20201c',
        light: '#f1f1f1',
        'base-ui-1': '#323435',
        'base-ui-2': '#485058',
        'base-ui-3': '#8c949a',
        'base-ui-4': '#dadee0',
        info: '#00dbff',
        'info-80': 'rgba(0, 219, 255, 0.8)',
        'info-2': '#00f0c4',
        danger: '#ff0055',
        'light-w': '#f4f2ed',
        'light-w-ui-1': '#403e3c',
        'light-w-ui-2': '#9c948c',
        'light-w-ui-3': '#d6cfc3',
        'light-w-ui-4': '#dadee0',
        'chart-1': 'oklch(0.646 0.222 41.116)',
        'chart-2': 'oklch(0.6 0.118 184.704)',
        'chart-3': 'oklch(0.398 0.07 227.392)',
        'chart-4': 'oklch(0.828 0.189 84.429)',
        'chart-5': 'oklch(0.769 0.188 70.08)',
        sidebar: 'oklch(0.985 0 0)',
        'sidebar-foreground': 'oklch(0.145 0 0)',
        'sidebar-primary': 'oklch(0.205 0 0)',
        'sidebar-primary-foreground': 'oklch(0.985 0 0)',
        'sidebar-accent': 'oklch(0.97 0 0)',
        'sidebar-accent-foreground': 'oklch(0.205 0 0)',
        'sidebar-border': 'oklch(0.922 0 0)',
        'sidebar-ring': 'oklch(0.708 0 0)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        pulse: 'pulse 1.2s ease-in-out infinite',
      },
      typography: () => ({
        DEFAULT: {
          css: [
            {
              '--tw-prose-body': 'var(--text)',
              '--tw-prose-headings': 'var(--text)',
              h1: {
                fontWeight: 'normal',
                marginBottom: '0.25em',
              },
            },
          ],
        },
        base: {
          css: [
            {
              h1: {
                fontSize: '2.5rem',
              },
              h2: {
                fontSize: '1.25rem',
                fontWeight: 600,
              },
            },
          ],
        },
        md: {
          css: [
            {
              h1: {
                fontSize: '3.5rem',
              },
              h2: {
                fontSize: '1.5rem',
              },
            },
          ],
        },
      }),
    },
  },
}

export default config