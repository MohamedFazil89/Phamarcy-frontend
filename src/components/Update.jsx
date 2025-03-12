import "./styles/Update.css"
import Products from "../assets/evening-cat.png"

export default function Update() {
  return (
    <div className="Product-Categories-Container">
      <ul className="List-Card">
       <section className="item">
       <img src={Products} alt="" />
       <p>Title</p>
       </section>
       <section className="item">
       <img src={Products} alt="" />
       <p>Title</p>
       </section>
       <section className="item">
       <img src={Products} alt="" />
       <p>Title</p>
       </section><section className="item">
       <img src={Products} alt="" />
       <p>Title</p>
       </section>

      </ul>
      
    </div>
  );
}
