import React from 'react'
import "./company.css"
import image from "../../assets/companies.png"
import { Card } from './Card'

export const Company = () => {
  return (
    <>
    <section className="comapny" id="company">
        <div className="company__title">
            <h1>LEADING COMPANIES BUILD TEAMS ON PROHIRE</h1>
        </div>

        <div className="company__img">
            <img src={image} alt="" srcset="" />
        </div>

        <div className="company__card__section">
           <Card 
           title = "3x"
           para = "faster candidate submissions" 
           />
           <Card
           title = "30%"
           para = "more candidate placements"
           />
           <Card 
           title = "100%"
           para = "client satisfaction"
           />

        </div>
    </section>
    </>
  )
}
