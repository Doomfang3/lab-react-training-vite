import visaImg from "../assets/images/visa.png";
import masterImg from "../assets/images/master-card.svg";

function CreditCard({
	type,
	number,
	expirationMonth,
	expirationYear,
	bank,
	owner,
	bgColor,
	color,
}) {
	return (
		<div
			className="credit-card"
			style={{
				color: color,
				backgroundColor: bgColor,
				borderRadius: 20,
				padding: 20,
				width: 400,
			}}
		>
			<img src={type === "Visa" ? visaImg : masterImg} alt="" />
			<p>•••• •••• •••• {number.slice(-4)}</p>
			<p>
				Expires{" "}
				{expirationMonth < 10
					? "0" + expirationMonth.toString()
					: expirationMonth}{" "}
				/{expirationYear.toString().slice(-2)}
			</p>
			<p>{bank}</p>
			<p>{owner}</p>
		</div>
	);
}

export default CreditCard;
