import React from 'react';
import hero from '../assets/hero.png'

const header = () => {
  return (
    <header className='header'>
        <div className='header--div1'>
            <h5 className='header--h5'>Easy way to make an order</h5>
            <h1 className='header--h1'>
                <span className='header--hungry'>HUNGRY?</span> Just wait <br/>
                food at your door
            </h1>
            <p className='header--p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magni delectus <br/> tenetur autem, sint veritatis!</p>
            <a className='header--btn1' href="#">Order Now > </a>
            <a className='header--btn2' href="#">See all foods</a>
            <br />
            <div className='header--iconDiv'>
              <p className='icon-text'><i class="fas fa-car header--icon"></i>No shipping charge</p>
              <p className='icon-text'><i class="fas fa-shield-alt header--icon"></i>100% secure checkout</p>
            </div>
        </div>
        <div className='header--div2'>
            <img src={hero} alt="hero-img" className='hero--img' />
        </div>
    </header>
  )
}

export default header;