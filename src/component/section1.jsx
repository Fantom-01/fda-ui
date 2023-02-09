import React from 'react'
import fastfood from '../assets/fastfood.png'
import meat from '../assets/meatdownload.png'
import asian from '../assets/asiandownload.png'
import pizza from '../assets/pizzadownload.png'
import delivery from '../assets/delivery.png'
import dine from '../assets/dine.png'
import pickup from '../assets/pickup.png'
import '../SectOne.css'

const section1 = () => {
  return (
    <section className='sect1'>
        <div className='sect1--container'>
            <div className='sect1--item'>
                <img src={fastfood} alt="" className='sec1--item--img' width={84} height={84}/>
                <h5 className='sect1--h5'>Fastfood</h5>
            </div>
            <div className='sect1--item'>
                <img src={pizza} alt="" className='sec1--item--img' width={84} height={84}/>
                <h5 className='sect1--h5'>Pizza</h5>
            </div>
            <div className='sect1--item'>
                <img src={asian} alt="" className='sec1--item--img' width={84} height={84}/>
                <h5 className='sect1--h5'>Asian Food</h5>
            </div>
            <div className='sect1--item'>
                <img src={meat} alt="" className='sec1--item--img' width={84} height={84}/>
                <h5 className='sect1--h5'>Row meat</h5>
            </div>
        </div>
        <div className="sect1--container2">
            <div className='container2--text'>
                <h5>What we serve</h5>
                <h2>Just sit back at home</h2>
                <h2>we will <span className='red--span'>take care</span></h2><br/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, officiis?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius.</p>
            </div>
            <div className='container2--icons'>
                <div>
                    <img src={delivery} alt="" width={75} height={64}/>
                    <h4>Quick Delivery</h4>
                    <p>Lorem ipsum dolor, sit amet <br/> consectetur adipisicing elit. Minus,<br/> doloremque.</p>
                </div>
                <div>
                    <img src={dine} alt="" width={75} height={64}/>
                    <h4>Super Dine In</h4>
                    <p>Lorem ipsum dolor, sit amet <br/> consectetur adipisicing elit. Minus,<br/> doloremque.</p>
                </div>
                <div>
                    <img src={pickup} alt="" width={75} height={64}/>
                    <h4>Easy Pick Up</h4>
                    <p>Lorem ipsum dolor, sit amet <br/> consectetur adipisicing elit. Minus,<br/> doloremque.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default section1;