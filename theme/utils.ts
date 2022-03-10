/* Generates fixed pallete for colors */
export function makeOpacity(color: string) {
	return {
		100: `rgba(${color}, 0.1)`,
		200: `rgba(${color}, 0.2)`,
		300: `rgba(${color}, 0.3)`,
		400: `rgba(${color}, 0.4)`,
		500: `rgba(${color}, 0.5)`,
		600: `rgba(${color}, 0.6)`,
		700: `rgba(${color}, 0.7)`,
		800: `rgba(${color}, 0.8)`,
		900: `rgba(${color}, 0.9)`,
	};
}
