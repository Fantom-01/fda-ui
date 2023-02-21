import React from 'react'
import logo from '../assets/res-logo.png'
import '../footer.css'

const footer = () => {
  return (
    <footer>
        <section className='footer--one'>
            <div className='footer--one--div'>
                <div className="footer--logo--div">
                    <img src={logo} alt="" width='71px' height="71px"/>
                    <caption className="footer--logo--caption" >Tasty Treat</caption>
                </div>
                <p className='footer--caption--p'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Nesciunt pariatur <br /> accusamus</p>
            </div>
            <div className='footer--one--div'>
                <h3>Delivery Time</h3>
                <h5 className='footer--h5'>Sunday - Thursday</h5>
                <p className='footer--one--div--p'>10:00am to 11:00pm</p>
                <h5 className='footer--h5'>Friday - Saturday</h5>
                <p className='footer--one--div--p'>Off day</p>
            </div>
            <div className='footer--one--div'>
                <h3>Contact</h3>
                <p className='footer--one--div--p'>Location: ZindaBazar, Sylhet-3100, Bangladesh</p>
                <h5 className='footer--h5'>Phone: 01712345678</h5>
                <h5 className='footer--h5'>Email: example@gmail.com</h5>
            </div>
            <div className='footer--one--div'>
                <h3>Newsletter</h3>
                <p className='footer--one--div--p'>Subscribe to our Newsletter</p>
                <div className="newsletter">
                    <input type="email" name="" id="" placeholder='Enter your email' className='newsletter--input'/>
                    <a href='#'><i class="fas fa-paper-plane"></i></a>
                </div>
            </div>
        </section>
        <section className='footer--two'>
            <p>Copyright - 2022, website replicated by Fantom. All Rights Reserved.</p>
            <ul>
                <li>Follow: </li>
                <li><a href='#'><i class="fab fa-facebook"></i></a></li>
                <li><a href='#'><i class="fab fa-github"></i></a></li>
                <li><a href='#'><i class="fab fa-youtube"></i></a></li>
                <li><a href='#'><i class="fab fa-linkedin"></i></a></li>
            </ul>
        </section>
    </footer>
  )
}

export default footer