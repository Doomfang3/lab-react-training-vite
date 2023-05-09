const displayRating = (num) => {
	const rating = Math.round(Math.min(Math.max(num, 0), 5));
	return "★".repeat(rating) + "☆".repeat(5 - rating);
};

function Rating({ children }) {
	return <div>{displayRating(children)}</div>;
}

export default Rating;
