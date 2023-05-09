const chooseLang = (lang) => {
	let string = "Hello";
	switch (lang) {
		case "de":
			string = "Hallo";
			break;
		case "fr":
			string = "Bonjour";
			break;
		case "es":
			string = "Hola";
			break;
		default:
			break;
	}
	return string;
};

function Greetings({ lang, children }) {
	return <div>{chooseLang(lang) + " " + children}</div>;
}

export default Greetings;
