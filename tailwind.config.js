// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    'animate-fade-in',
    'animate-fade-out',
    'animate-slide-up',
    'animate-slide-down',
    'animate-slide-right',
    'animate-slide-left',
    'animate-fade-in-up',
    'animate-fade-out-down',
    'animate-fade-in-down',
    'animate-fade-out-up',
    'animate-fade-in-left',
    'animate-fade-out-right',
    'animate-fade-in-right',
    'animate-fade-out-left',
    'animate-scale-in',
    'animate-scale-out'
  ],
  theme: {
    extend: {
      fontFamily: {
        'scto': ['"Scto Grotesk A Medium"', 'sans-serif'],
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
      },
      colors: {
        'pink': {
          100: '#ffe0e0',
          200: '#ffb6b6',
          300: '#ff8c8c',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in forwards',
        'fade-out': 'fadeOut 1s ease-out forwards',
        'slide-up': 'slideUp 1s ease-in forwards',
        'slide-down': 'slideDown 1s ease-out forwards',
        'slide-right': 'slideRight 1s ease-in forwards',
        'slide-left': 'slideLeft 1s ease-out forwards',
        
        // New animations for scroll effects
        'fade-in-up': 'fadeInUp 0.8s ease forwards',
        'fade-out-down': 'fadeOutDown 0.8s ease forwards',
        'fade-in-down': 'fadeInDown 0.8s ease forwards',
        'fade-out-up': 'fadeOutUp 0.8s ease forwards',
        'fade-in-left': 'fadeInLeft 0.8s ease forwards',
        'fade-out-right': 'fadeOutRight 0.8s ease forwards',
        'fade-in-right': 'fadeInRight 0.8s ease forwards',
        'fade-out-left': 'fadeOutLeft 0.8s ease forwards',
        'scale-in': 'scaleIn 0.8s ease forwards',
        'scale-out': 'scaleOut 0.8s ease forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(50px)', opacity: '0' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-50px)', opacity: '0' },
        },
        
        // New keyframes for scroll effects
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOutDown: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(30px)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOutUp: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-30px)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeOutRight: {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(30px)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeOutLeft: {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(-30px)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        scaleOut: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.9)' },
        },
      },
      borderColor: {
        DEFAULT: 'hsl(var(--border))',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};