/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"DM Sans"', 'sans-serif'],
                display: ['"Cormorant Garamond"', 'serif'],
            },
            colors: {
                brand: {
                    cream: '#F9F8F6', // Soft creamy paper background
                    ink: '#1A1C20', // Tailored charcoal
                    gold: '#C29A62', // Muted elegant gold
                    terracotta: '#D47559', // Organic accent
                    sage: '#A6B2A1', // Earthy green
                    navy: '#233140', // Refined navy
                }
            },
            boxShadow: {
                'editorial': '0 24px 60px -15px rgba(26, 28, 32, 0.08)',
                'editorial-sm': '0 10px 30px -10px rgba(26, 28, 32, 0.05)',
            },
            animation: {
                'fade-up': 'fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'fade-in': 'fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                }
            }
        },
    },
    plugins: [],
}
