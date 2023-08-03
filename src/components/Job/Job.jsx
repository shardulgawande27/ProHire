import React from 'react'
import "./job.css"
import image1 from "../../assets/pic1.png"

export const Job = () => {
  return (
    <>
    <section className="job" id="job">
        <div className="title">
        <h1>
        What can ProHire help you with?
        </h1>
        </div>

        <div className="content">
            <div className="content__data">
                <h1>
                <u>Find</u> your next job, effortlessly.
                </h1>

                <p>     
                    You deserve better than spammy job boards.</p> <br /><p>
                    In less than 5 mins, get matched to just the right opportunities you want. Connect with the actual hiring teams and get super fast responses back.
                </p>

                <div className="content_btn">
                    <a href="" className="btn1">Find jobs now</a>
                    <a href="" className="btn2">Learn More</a>
                </div>
            </div>
            <div className="content__img">
                <img src={image1} alt="" srcset="" />
            </div>
        </div>

        
    </section>
    </>
  )
}
