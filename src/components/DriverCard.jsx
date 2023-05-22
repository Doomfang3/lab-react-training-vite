import React from 'react'

function DriverCard(props) {
    return (
        <div style={{backgroundColor: "navy-blue"}}>
            <div>
                {props.img}
                {props.name}
                {props.car.model} - {props.car.licensePlate}
            </div>

        </div>
    )
}

export default DriverCard
