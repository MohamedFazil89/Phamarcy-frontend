import "./styles/Update.css"
import Baby from "../assets/holding-hands.jpg"
import SelfCare from "../assets/natural-soap-organic-body-oil.jpg"
import MedicalDevices from "../assets/top-view-tensiometer-checking-blood-pressure.jpg"
import WellBeing from "../assets/athlete-playing-sport-with-hand-drawn-doodles.jpg"



export default function Update() {
  return (
    <div className="Product-Categories-Container">
      <ul className="List-Card">
       <section className="item">
       <img src={WellBeing} alt="" />
       <p>Healthcare & Wellness</p>
       </section>
       <section className="item">
       <img src={SelfCare} alt="" />
       <p>Personal Care & Hygiene</p>
       </section>
       <section className="item">
       <img src={MedicalDevices} alt="" />
       <p>Medical Devices & Equipment</p>
       </section><section className="item">
       <img src={Baby} alt="" />
       <p>Baby Care</p>
       </section>

      </ul>
      
    </div>
  );
}
