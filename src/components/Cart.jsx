import "./styles/Cart.css"
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
export default function Cart({ id, img, title, description, price }) {
    const dispatch = useDispatch();


    const handleAddToCart = () => {
        dispatch(addToCart({ id, img, title, price }));
      };
    return (
        <div className="card" style={{ color: "white" }}>
            <section className="img-container">
            <img src={img} className="card__img" alt={title} />
            </section>
            <div className="card__body">
                <h3 className="card__price">₹{price}</h3>

                <section className="texts">
                    <h2 className="card__title">{title}</h2>
                    <p className="card__description">{description}</p>
                </section>
                <button className="card__btn" onClick={handleAddToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}
