import { Color } from "three";

const pallete = [
	"#f44336",
	"#e91e63",
	"#9c27b0",
	"#673ab7",
	"#3f51b5",
	"#2196f3",
	"#03a9f4",
	"#00bcd4",
	"#009688",
	"#4caf50",
	"#8bc34a",
	"#cddc39",
	"#ffeb3b",
	"#ffc107",
	"#ff9800",
	"#ff5722",
	"#795548",
	"#607d8b",
];
/*
	Gets random color from pallete based on the item index
*/
export const getRandomColorFromPallete = (index: number): Color =>
	new Color(pallete[index % pallete.length]);
