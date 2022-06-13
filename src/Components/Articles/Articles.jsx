import React from 'react';
import Button from "../Button/Button";
import "./Articles.scss"
import "../Courses/Courses.scss"
import heroImg from "../../Assets/Images/hero-img1.jpg";
import heroImg2 from "../../Assets/Images/hero-img2.jpg";
import heroImg3 from "../../Assets/Images/hero-img3.jpg";


const Articles = () => {
    return (
        <section className="workshop">
      <div className="site-container workshop__container d-flex flex-column align-items-center">
        <h2>Upcoming Free Workshops</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <Button>View All Workshops</Button>
        <ul className=" list-unstyled p-0 mt-5 course__list">
          <li className="course__item">
            <img src={heroImg} alt="" width={393} height="197" />
            <div className="course__item-inner p-4">
                <h6 className="mb-5">February 8, 2021</h6>
              <h3>The TikTok Algorithm: How to Get the Best Engagement</h3>
              <p>Katie Murphy</p>
              
              <a href="/">Learn More</a>
            </div>
          </li>
          <li className="course__item">
            <img src={heroImg2} alt="" width={393} height="197" />
            <div className="course__item-inner p-4">
                <h6 className="mb-5">February 8, 2021</h6>
              <h3>The TikTok Algorithm: How to Get the Best Engagement</h3>
              <p>Bessie Cooper</p>
              <a href="/">Learn More</a>
            </div>
          </li>
          <li className="course__item">
            <img src={heroImg3} alt="" width={393} height="197" />
            <div className="course__item-inner p-4">
              <h6 className="mb-5">February 8, 2021</h6>
              <h3>The TikTok Algorithm: How to Get the Best Engagement</h3>
              <p>Dianne Russell</p>
              
              <a href="/">Learn More</a>
            </div>
          </li>
        </ul>
      </div>
    </section>
    );
}

export default Articles;
