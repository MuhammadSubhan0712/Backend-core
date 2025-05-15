/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		    colors: {
        cyberpunk: {
          cyan: "#00f0ff",
          pink: "#ff00f6",
          dark: "#0a0a0a",
          card: "#111",
        },
		fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
      },
  	},
  },
  plugins: [require("tailwindcss-animate")],
}
}