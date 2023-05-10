const Greetings = (props) => {
    const {lang, children} = props;
    let greetings;
    if(lang === 'de'){
        greetings = `Hallo ${children}!`
    }
    else if (lang === 'fr'){
        greetings = `Bonjour ${children}!`
    }
    return (
        <div className="greetings">
          {greetings}
        </div>
      );
}
export default Greetings;