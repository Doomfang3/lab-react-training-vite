import Rating from "./Rating";

function DriverCard({ name, rating, img, car }) {
	return (
		<div>
			<img src={img} alt="profile" style={{ width: 200 }} />
			<h2>{name}</h2>
			<Rating>{rating}</Rating>
			<p>
				{car.model} - {car.licensePlate}
			</p>
		</div>
	);
}

export default DriverCard;
