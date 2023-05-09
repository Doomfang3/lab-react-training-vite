const getRandom = (min, max) => {
	return Math.round(Math.random() * (max - min) + min);
};

function Random({ min, max }) {
	return (
		<div>
			Random value between {min} and {max} {"=>"} {getRandom(min, max)}
		</div>
	);
}

export default Random;
