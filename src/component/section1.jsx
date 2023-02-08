import React from 'react'
import fastfood from '../assets/fastfood.png'
import meat from '../assets/meatdownload.png'
import asian from '../assets/asiandownload.png'
import pizza from '../assets/pizzadownload.png'

const section1 = () => {
  return (
    <section className='sect1'>
        <div className='sect1--container'>
            <div className='sect1--item'>
                <img src={fastfood} alt="" width={64} height={64}/>
                <h5>Fastfood</h5>
            </div>
            <div className='sect1--item'>
                <img src={pizza} alt="" width={64} height={64}/>
                <h5>Pizza</h5>
            </div>
            <div className='sect1--item'>
                <img src={asian} alt="" width={64} height={64}/>
                <h5>Asian Food</h5>
            </div>
            <div className='sect1--item'>
                <img src={meat} alt="" width={64} height={64}/>
                <h5>Row meat</h5>
            </div>
        </div>
    </section>
  )
}

export default section1;