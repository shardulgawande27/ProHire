import React from 'react'
import Image from "../../assets/icon1.png"

export const Card = (props) => {
  return (
    <>
    <div className="card">
        <div className="card__img">
            <img src={props.image} alt="" srcset="" />
        </div>

        <div className="card__content">
            <h4>{props.cardTitle}</h4>
            <p>{props.cardPara}</p>
        </div>
    </div>
    </>
  )
}
