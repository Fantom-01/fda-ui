import React from 'react';
import hero from '../assets/hero.png'

const header = () => {
  return (
    <header className='header'>
        <div className='header--div'>
            <h5 className='header--h5'>Easy way to make an order</h5>
            <h1 className='header--h1'>
                <span className='header--hungry'>HUNGRY?</span> Just wait <br/>
                food at your door
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magni delectus <br/> tenetur autem, sint veritatis!</p>
        </div>
        <div className='header--div'>
            <img src={hero} alt="hero-img" className='hero--img' />
        </div>
    </header>
  )
}

export default header;