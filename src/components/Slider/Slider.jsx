import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import "./slider.css"
import data from "./data"

export const Slider = () => {
  const[people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length -1;

    if (index < 0) {
      setIndex(lastIndex);
    }

    if (index > lastIndex) {
      setIndex(0);
    }
  },[index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);

    return () => {
      clearInterval(slider);
    };
  },[index]);

  return (
    <>
    <section className="section slider" id="slider">
      <div className="title">
        <h2>Our Success Stories</h2><br/>
      </div>
      <div className='section-center'> 
      {people.map((item, indexPeople) => {
        const {id, image, name , title, quote} = item;
        let position = "nextSlide";
        if (indexPeople === index) {
          position = 'activeSlide'
        }
        if (indexPeople === index - 1 ||(index === 0 && indexPeople === people.length - 1) ) {
          position = "lastSlide"
        }

        return(
          <article className = {position} key = {id}>
            <img src={image} alt={name} className='person-img' />
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
          </article>
        )
      })}
      <button className='prev' onClick={() => setIndex(index - 1)}>
      <i class='bx bx-chevron-left' ></i>      
      </button>

      <button className='next' onClick={() => setIndex(index + 1)}>
      <i class='bx bx-chevron-right'></i>
      </button>
      </div>
    </section>
    </>
  )
}
