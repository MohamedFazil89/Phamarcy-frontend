import "./styles/About.css"
import JinWoo from "../assets/solo-anime.png"

export default function About() {
    return (
        <section className='About-Conteiner' id="About">
            <div className="aboutbox">
                <img src={JinWoo} alt="" className="charcter"/>
                <p>Weak today, strong tomorrow. Inspired by Solo Leveling, our gym gear is built for those who grind, evolve, and dominate.

                    💪 Train like a Hunter – Push limits, break barriers.
                    ⚡ Unleash Your Potential – Strength is earned, not given.
                    🔥 Elite Quality & Style – Gear up. Level up.

                    Arise, and become the strongest! ⚔️🔥</p>

            </div>
        </section>
    )
}
