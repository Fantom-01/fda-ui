import NavBar from './component/navbar.jsx'
import Footer from './component/footer.jsx'
import Missing from './pages/missing.jsx'
import Contact from './pages/contactpage.jsx'
import Food from './pages/foodpage.jsx'
import Cart from './pages/cartpage.jsx'
import Setup from './pages/home'
import { Route, Routes } from  'react-router-dom'

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
            <Route path="/" element={<Setup/>}/>
            <Route path="/food" element={<Food/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<Missing/>}/>
          </Routes>
      <Footer/>
    </>
  )
}

export default App;