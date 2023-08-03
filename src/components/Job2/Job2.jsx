import React from 'react'
import image1 from "../../assets/pic2.png"
import "./job.css"


export const Job2 = () => {
  return (
    <>
        <section className="job2" id="job2">
        <div className="content">
        <div className="content__img">
                <img src={image1} alt="" srcset="" />
            </div>
            <div className="content__data">
                <h1>
                <u>Hire</u> 10x top tech talent. 0x backouts.
                </h1>

                <p>     
                    You deserve better than spammy job boards.</p> <br /><p>
                    In less than 5 mins, get matched to just the right opportunities you want. Connect with the actual hiring teams and get super fast responses back.
                </p>

                <div className="content_btn">
                    <a href="" className="btn1">Hire Top Talent now</a>
                    <a href="" className="btn2">View pricing</a>
                </div>
            </div>
           
        </div>
        </section>
    </>
  )
}
