import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			container: {
				center: true,
				padding: "2rem"
			},
			screens: {
				xs: "450px"
			}
		}
	},
	plugins: [daisyui],
	daisyui: {
		themes: ["sunset"]
	}
};
