export function generateTexture() {
	const canvas = document.createElement("canvas");
	canvas.width = 2;
	canvas.height = 2;

	const context = canvas.getContext("2d")!;
	context.fillStyle = "green";
	context.fillRect(0, 0, 2, 2);

	return canvas;
}
