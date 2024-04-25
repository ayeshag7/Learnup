/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"],
  theme: {
		container: {
			center: true,
			padding: "1.5rem",
			screens: {
				"2xl": "1600px",
			},
		},
		extend: {
			colors: {
				primary: {
					100: "#e0edd6",
					200: "#b8ed4a",
					300: "#06704d",
					400: "#052e33",
				},
				"headergreen": "#065542",
				"headeryellow": "#B8ED4A",
				"headerskin": "#E0EDD6",
				"headerlemon": "#B8ED4A",
				"buttondarkgreen": "#052E33",
				"darkscreen": "#1F2937"
			}
		},
	},
  plugins: [],
};
