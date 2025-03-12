import React from "react";
import "./styles/Contact.css";

export default function Contact() {
  return (
    <section className="content-section" id="contact">
      <div className="content-container">
        <div className="content-text">
          <h2>Unleash Your Inner Champion</h2>
          <p>
            Train like an anime hero with cutting-edge gym equipment and motivational fitness routines. Our facility is designed to empower you—whether you're just starting or looking to level up your training.
          </p>
          <a href="#signup" className="btn-primary">
            Join Now
          </a>
        </div>
        <div className="content-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHNMg_EZrxsho1qkHlodrrIR7CU_SoCuh_WA&s"
            alt="Gym inspiration"
          />
        </div>
      </div>
    </section>
  );
}
