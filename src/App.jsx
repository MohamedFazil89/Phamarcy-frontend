import './App.css'
import Nav from './components/Nav'
import Home from "./components/Hero"
import Update from './components/Update'
import Cart from './components/Cart'
import CardData from "./components/CartData.js"
import About from './components/About.jsx'
// import Auth from './Auth.jsx'
import Contact from './components/Contact.jsx'
import { Link } from "react-router-dom";
import Slider from './components/Slider.jsx'


function App() {
  const { intakeItems, equipmentItems } = CardData;




  return (
    <>
 <div>
      <Nav />
      <Home />
      <Slider />
      <p className='Product-section-title'>Our Products Categories</p>

      <Update />
      <br />
      <br />
      <br />

      <Link to="/HealthCare">
      <p className='Product-section-title'>Explore Our  New Products</p>
      </Link>
      <div className="Cart-container" id='Proteins'>
        {intakeItems.map((item, index) =>(
          <Cart
          key={index}
          img={item.img}
          price={item.price}
          title={item.title}
          description={item.description}
           />
        ))}

      </div>
      <br />
      <br />
      <br />
      <Link to="/PersonalCare">
      <p className='Product-section-title'>Explore Our Best seller</p>
      </Link>

      <div className="Cart-container" id='Equipment'>
        {equipmentItems.map((item, index) =>(
          <Cart
          key={index}
          img={item.img}
          price={item.price}
          title={item.title}
          description={item.description}
           />
        ))}

      </div>
      <br />
      <br />
      <p className='Product-section-title'  style={{ textAlign:"center"}}>About Us</p>

      <About />
      <br />
      <br />
      <Contact />

    </div>
    </>
  )
}

export default App
