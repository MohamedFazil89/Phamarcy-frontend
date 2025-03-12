import "./styles/Cart.css"

export default function Cart({ img, title, description, price }) {
    return (
        <div className="card" style={{ color: "white" }}>
            <section className="img-container">
            <img src={img} className="card__img" alt={title} />
            </section>
            <div className="card__body">
                <h3 className="card__price">${price}</h3>

                <section className="texts">
                    <h2 className="card__title">{title}</h2>
                    <p className="card__description">{description}</p>
                </section>
                <button className="card__btn">
                    Add to Cart
                </button>
            </div>
        </div>
    )
}
