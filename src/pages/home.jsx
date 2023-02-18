import NavBar from '../component/navbar'
import Header from '../component/header.jsx'
import Footer from '../component/footer.jsx'
import WhyTasty from '../component/whyTasty.jsx'
import SectOne from '../component/section1.jsx'
import Testimonial from '../component/testimonial.jsx'
import Main from '../foodMenu/Main.jsx'

function Home() {
  return (
    <>
      <NavBar/>
      <Header/>
      <SectOne/>
      <Main/>
      <WhyTasty/>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default Home;