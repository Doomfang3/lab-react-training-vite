import React from 'react'

function CreditCard(props) {
  return (
    <div style={{backgroundColor: props.bgColor, color: props.color}}>
        <div className='cardInner'>
      {props.type}
      <br />
      {String(props.number).slice (-4)}

      <p>{props.expirationMonth}/ {String(props.expirationYear).slice(-2)}  {props.bank}
      </p>   
      <p>{props.owner}</p>    
      </div>
    </div>
  )
}

export default CreditCard

