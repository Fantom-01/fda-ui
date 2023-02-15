import React from 'react'
import network from '../assets/network.png'
import('../testimonial.css');

const testimonial = () => {
  return (
    <section className='testimonial'>
        <div className='testimonial--text--div'>
            <h5>Testimonial</h5>
            <h2>What our <span className='red--span'>customers</span> are saying</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quasi qui minus quos sit perspiciatis inventore quis provident placeat fugiat!</p>
            <p>""Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis atque, quam minus totam maiores laborum! Impedit consectetur illum aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus quis dolorem quas!""</p>
        </div>
        <div className="testimonial--image">
            <img src={network} alt=""/>
        </div>
    </section>
  )
}

export default testimonial