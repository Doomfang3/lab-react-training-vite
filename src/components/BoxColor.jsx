const BoxColor = (props) => {
    const {r,g,b } = props;
    const color = `rgb(${r}, ${g}, ${b})`;
    const style = {
        backgroundColor: color,
        width: "200px",
        height: "100px"}
    
    return (
        <div className="BoxColor">
            <div style={style}>{color}</div>

        </div>
    )

}
export default BoxColor;