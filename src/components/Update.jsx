import "./styles/Update.css"
import Baby from "../assets/holding-hands.jpg"
import SelfCare from "../assets/natural-soap-organic-body-oil.jpg"
import MedicalDevices from "../assets/top-view-tensiometer-checking-blood-pressure.jpg"
import WellBeing from "../assets/athlete-playing-sport-with-hand-drawn-doodles.jpg"
import { useNavigate } from "react-router-dom"



export default function Update() {
  const navigation = useNavigate();

  const Navigation = (route) =>{
    navigation(`/${route}`)
  }
  return (
    <div className="Product-Categories-Container">
      <ul className="List-Card">
       <section className="item" onClick={() => Navigation("HealthCare")}>
       <img src={WellBeing} alt="" />
       <p>Healthcare & Wellness</p>
       </section>
       <section className="item" onClick={() => Navigation("PersonalCare")}>
       <img src={SelfCare} alt="" />
       <p>Personal Care & Hygiene</p>
       </section>
       <section className="item" onClick={() => Navigation("MedicalDevice")} >
       <img src={MedicalDevices} alt="" />
       <p>Medical Devices & Equipment</p>
       </section><section className="item" onClick={() => Navigation("BabyCare")}>
       <img src={Baby} alt="" />
       <p>Baby Care</p>
       </section>

      </ul>
      
    </div>
  );
}
