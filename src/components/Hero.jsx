import "./styles/Hero.css"
// import Solo from "../assets/young-woman-pharmacist-pharmacy-bg.png"
import Solo from "../assets/girlbg.png"

export default function Hero() {
  return (
    <div className='Hero' id="Home">

      <h1>Pharmacy</h1>

     <div className="char">
     <p className="qoute">Get Your Medicines Delivered
        Fast & Hassle-Free! Order your
        prescriptions online and have
        them delivered to your doorstep
        with ease and reliability</p>
        <img src={Solo} alt="" className="Img" />
     </div>





    </div>
  )
}
