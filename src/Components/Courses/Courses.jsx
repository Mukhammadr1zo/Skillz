import React from "react";
import "./Courses.scss";
import Button from "../Button/Button";
import heroImg from "../../Assets/Images/hero-img1.jpg";
import heroImg2 from "../../Assets/Images/hero-img2.jpg";
import heroImg3 from "../../Assets/Images/hero-img3.jpg";

const Courses = () => {
  return (
    <section className="course">
      <div className="site-container course__container d-flex flex-column align-items-center">
        <h2 className="course__title">Featured Courses</h2>
        <p className="course__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <Button>View All Courses</Button>
        <ul className=" list-unstyled p-0 mt-5 course__list">
          <li className="course__item">
            <img src={heroImg} alt="" width={393} height="197" />
            <div className="course__item-inner p-4">
              <h3>How to Increase Your Engagement on Instagram</h3>
              <p>Katie Murphy</p>
              <p>$ 59.99 USD</p>
              <a href="/">Learn More</a>
            </div>
          </li>
          <li className="course__item">
            <img src={heroImg2} alt="" width={393} height="197" />
            <div className="course__item-inner p-4">
              <h3>Business 101: Setting up Your Taxes</h3>
              <p>Bessie Cooper</p>
              <p>
                <span className="text-secondary">$ 69.99 USD</span> $ 39.99 USD
              </p>
              <a href="/">Learn More</a>
            </div>
          </li>
          <li className="course__item">
            <img src={heroImg3} alt="" width={393} height="197" />
            <div className="course__item-inner p-4">
              <h3>iPhone Photography: Tips, Tricks and Best Practices</h3>
              <p>Dianne Russell</p>
              <p>
                <span className="text-secondary">$ 69.99 USD</span> $ 39.99 USD
              </p>
              <a href="/">Learn More</a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Courses;
