import React from 'react'
import logo from '../assets/res-logo.png'
import '../footer.css'

const footer = () => {
  return (
    <footer>
        <section className='footer--one'>
            <div>
                <div className="footer--logo--div">
                    <img src={logo} alt="" width='71px' height="71px"/>
                    <caption className="footer--logo--caption" >Tasty Treat</caption>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt pariatur accusamus</p>
            </div>
            <div>
                <h3>Delivery Time</h3>
                <h5>Sunday - Thursday</h5>
                <p>10:00am to 11:00pm</p>
                <h5>Friday - Saturday</h5>
                <p>Off day</p>
            </div>
            <div>
                <h3>Contact</h3>
                <p>Location: ZindaBazar, Sylhet-3100, Bangladesh</p>
                <h5>Phone: 01712345678</h5>
                <h5>Email: example@gmail.com</h5>
            </div>
            <div>
                <h3>Newsletter</h3>
                <p>Subscribe to our Newsletter</p>
                <div className="newsletter">
                    <input type="email" name="" id="" placeholder='Enter your email' className='newsletter--input'/>
                    <a href='#'><i class="fas fa-paper-plane"></i></a>
                </div>
            </div>
        </section>
        <section className='footer--two'>
            <p>Copyright - 2022, website made by Muhibur Rahman. All Rights Reserved.</p>
            <ul>
                <li>Follow: </li>
                <li><i class="fab fa-facebook"></i></li>
                <li><i class="fab fa-github"></i></li>
                <li><i class="fab fa-youtube"></i></li>
                <li><i class="fab fa-linkedin"></i></li>
            </ul>
        </section>
    </footer>
  )
}

export default footer