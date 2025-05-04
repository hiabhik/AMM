/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F3460', // Dark blue
          light: '#1A4980',
          dark: '#092545',
          100: '#E6EDF5',
          200: '#CDDAEB',
          300: '#9BB8D6',
          400: '#6995C2',
          500: '#3773AD',
          600: '#1A5899',
          700: '#0F3460',
          800: '#092545',
          900: '#051A30',
        },
        secondary: {
          DEFAULT: '#c9a664', // Soft gold
          light: '#d9bf8c',
          dark: '#b08d3c',
          100: '#f9f4e9',
          200: '#f3e9d3',
          300: '#e8d4a7',
          400: '#ddbf7b',
          500: '#d2aa4f',
          600: '#c9a664',
          700: '#b08d3c',
          800: '#8c7130',
          900: '#675424',
        },
        accent: {
          DEFAULT: '#64748b', // Slate
          light: '#94a3b8',
          dark: '#475569',
          100: '#f8fafc',
          200: '#f1f5f9',
          300: '#e2e8f0',
          400: '#cbd5e1',
          500: '#94a3b8',
          600: '#64748b',
          700: '#475569',
          800: '#334155',
          900: '#1e293b',
        },
        tertiary: {
          DEFAULT: '#6366f1', // Indigo
          light: '#818cf8',
          dark: '#4f46e5',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        light: {
          DEFAULT: '#f5f5f5', // Light gray
          cream: '#f9f9f9',
          paper: '#ffffff',
          dark: '#e5e5e5',
        },
        dark: {
          DEFAULT: '#333333', // Dark gray
          light: '#4d4d4d',
          dark: '#1a1a1a',
        },
        gold: {
          DEFAULT: '#c9a664', // Soft gold
          light: '#d9bf8c',
          dark: '#b08d3c',
        },
        blue: {
          DEFAULT: '#0F3460', // Dark blue
          light: '#1A4980',
          dark: '#092545',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        heading: ['Rajdhani', 'sans-serif'],
        body: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Orbitron', 'sans-serif'],
        futuristic: ['Orbitron', 'Rajdhani', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'slide-down': 'slideDown 0.5s ease-in-out',
        'slide-left': 'slideLeft 0.5s ease-in-out',
        'slide-right': 'slideRight 0.5s ease-in-out',
        'scale-in': 'scaleIn 0.5s ease-in-out',
        'scale-in-bounce': 'scaleInBounce 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'rotate-in': 'rotateIn 0.5s ease-in-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'neon-pulse': 'neonPulse 1.5s ease-in-out infinite',
        'cyber-scan': 'cyberScan 3s ease-in-out infinite',
        'glitch': 'glitch 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleInBounce: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '80%': { transform: 'scale(1.05)', opacity: '0.8' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        rotateIn: {
          '0%': { transform: 'rotate(-10deg) scale(0.9)', opacity: '0' },
          '100%': { transform: 'rotate(0) scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 10px rgba(0, 210, 255, 0.5), 0 0 20px rgba(0, 210, 255, 0.2)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 20px rgba(0, 210, 255, 0.8), 0 0 40px rgba(0, 210, 255, 0.4)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        neonPulse: {
          '0%, 100%': { boxShadow: '0 0 5px #00D2FF, 0 0 10px #00D2FF, 0 0 15px #00D2FF' },
          '50%': { boxShadow: '0 0 10px #00D2FF, 0 0 20px #00D2FF, 0 0 30px #00D2FF, 0 0 40px #00D2FF' },
        },
        cyberScan: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
