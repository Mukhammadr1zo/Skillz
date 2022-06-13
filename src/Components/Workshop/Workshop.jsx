import React from "react";
import "./Workshop.scss";
import Button from "../Button/Button";

const Workshop = () => {
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
        <ul className=" list-unstyled p-0 mt-5 workshop__list">
          <li className="workshop__item p-4">
            <h3>Photography Basics</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo.
            </p>
            <a href="/">Learn More</a>
          </li>
          <li className="workshop__item p-4">
            <h3>Business 101</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo.
            </p>
            <a href="/">Learn More</a>
          </li>
          <li className="workshop__item p-4">
            <h3>Social Networking Camp</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo.
            </p>
            <a href="/">Learn More</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Workshop;
