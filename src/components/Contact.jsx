import React from "react";
import "./styles/Contact.css";
import AnimeDoctor from "../assets/anime-doctor.jpg"

export default function Contact() {
  return (
    <section className="content-section" id="contact">
      <div className="content-container">
        <div className="content-text">
          <h2>Your Health, Our Priority</h2>
          <p>
            Access high-quality medicines, health essentials, and expert care—all in one place. We provide trusted pharmaceutical products with convenient online ordering and fast delivery to your doorstep.
          </p>
          <a href="#signup" className="btn-primary">
            Shop Now
          </a>
        </div>
        <div className="content-image">
          <img
            src={AnimeDoctor}
            alt="Pharmacy products"
          />
        </div>
      </div>
    </section>
  );
}
