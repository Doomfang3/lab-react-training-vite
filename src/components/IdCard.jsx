const IdCard = (props) => {
    //const { lastName, firstName, gender, height, birth, picture } = props;
    
    return (
        <div className="IdCard">
            <img src={props.picture} alt="img" />
            <div>
                <p><strong>First Name: </strong>{props.firstName}</p>
                <p><strong>Last Name: </strong>{props.lastName}</p>
                <p><strong>Gender: </strong>{props.gender}</p>
                <p><strong>Height: </strong>{props.height} cm</p>
                <p><strong>Birth: </strong>{props.birth.toDateString()}</p>
            </div>

        </div>
    )

}
export default IdCard;