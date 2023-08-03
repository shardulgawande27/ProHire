import React from 'react'

export const Card = (props) => {
  return (
    <>
    <div className="company__card">
                <h1>{props.title}</h1>
                <p>{props.para}</p>
    </div>
           
    </>
  )
}
