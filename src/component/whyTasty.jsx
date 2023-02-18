import React from 'react'
import Delivery from '../assets/delivery2.png'
import '../whyTasty.css'

const whyTasty = () => {
  return (
    <section className='whyTasty'>
        <div className="whyTastydiv1">
            <img src={Delivery} alt="" className='deliveryPng'/>
        </div>
        <div className='whyTastyText whyTastydiv2'>
            <h2>Why <span className='red--span'>Tasty Treat?</span></h2>
            <p className='whyTastyP'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, minus. <br /> Tempora reprehenderit a corporis velit, laboriosam vitae ullam, repellat illo <br /> sequi odio esse iste fugiat dolor, optio incidunt eligendi deleniti!</p>
            <ul>
                <li className='whyListText'>
                    <h5><i class="fas fa-check-circle"></i>Fresh and tasty foods</h5>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,<br/> voluptatibus.</p>
                </li>
                <li className='whyListText'>
                    <h5><i class="fas fa-check-circle"></i>Quality support</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, earum.</p>
                </li>
                <li className='whyListText'>
                    <h5><i class="fas fa-check-circle"></i>Order from any location</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, earum.</p>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default whyTasty