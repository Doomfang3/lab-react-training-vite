const componentToHex = (c) => {
	const hex = c.toString(16);
	return hex.length === 1 ? "0" + hex : hex;
};

const rgbToHex = (r, g, b) => {
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

function BoxColor({ r, g, b }) {
	const hexColor = rgbToHex(r, g, b);
	return (
		<div
			style={{
				backgroundColor: hexColor,
				width: "200px",
				height: "100px",
			}}
		>
			<p>
				rgb({r}, {g}, {b})
			</p>
			<p>{hexColor}</p>
		</div>
	);
}

export default BoxColor;
