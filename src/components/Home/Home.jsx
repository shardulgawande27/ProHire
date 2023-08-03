import React from 'react'
import "./home.css"
import { Card } from './Card'
import image1 from "../../assets/icon1.png"
import image2 from "../../assets/icon2.png"
import image3 from "../../assets/feature_icon_2.png"
// import bg from "../../assets/home_bg.png"


export const Home = () => {
  return (
    <>
    <section className="home" id="home">
        <div className="home__title">
            <h1>Find your next top tech job in 1 week.</h1>
        </div>

        <div className="home__para">
            <p>
            <b>Are you a top 2% </b>Software Engineer, Product Manager or Data Scientist?
Let leading Indian technology<b> companies compete to hire you.</b>
            </p>
        </div>
        <div className='btn'>
        <a href="" className='h__btn'>Apply to Join</a>
        </div>

        <div className="card__section">
        <Card 
        id = "1"
        image = {image1}
        cardTitle ="STEP 1: COMPLETE PROFILE"
        cardPara = "Once you are approved, we showcase you to leading Indian technology startups"
        />
        <Card 
        id = "2"
        image = {image2}
        cardTitle ="STEP 2: RECEIVE JOB OFFERS"
        cardPara = "Companies start sending interview requests. Talk to only the ones you like."
        />
        <Card
        id = "3"
        image = {image3}
        cardTitle ="STEP 3: ACCEPT DREAM JOB"
        cardPara = "Compare your offers and accept the best one. Hired!"
        />
        </div>
    </section>
    </>
  )
}
