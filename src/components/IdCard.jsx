const fomatDate = (date) => {
	return date.toString().split(" ").splice(0, 4).join(" ");
};

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
	return (
		<div className="id-card">
			<img src={picture} alt="profile" />
			<div>
				<p>
					<strong>First name: </strong>
					{firstName}
				</p>
				<p>
					<strong>Last name: </strong>
					{lastName}
				</p>
				<p>
					<strong>Gender: </strong>
					{gender}
				</p>
				<p>
					<strong>Height: </strong>
					{height}
				</p>
				<p>
					<strong>Birth: </strong>
					{fomatDate(birth)}
				</p>
			</div>
		</div>
	);
}

export default IdCard;
