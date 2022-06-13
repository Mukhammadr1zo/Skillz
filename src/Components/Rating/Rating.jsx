import React from "react";
import "./Rating.scss";
import stars from "../../Assets/Images/stars.png";
import design from "../../Assets/Images/design.png";

const Rating = () => {
  return (
    <section className="rating">
      <div className="site-container rating__container d-flex flex-column align-items-center">
        <img src={stars} alt="" />
        <blockquote>
          “Kate’s courses are a game changer. She’s thorough, organized, and
          explains things in a no-nonsense way that makes it easy for
          anyone—beginners to experts—to learn something from her courses and
          take their game to the next level.”
        </blockquote>
        <p>James Brown, Influencer</p>
        <img src={design} alt="" />
      </div>
    </section>
  );
};

export default Rating;
