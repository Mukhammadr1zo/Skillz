import React from 'react';
import Button from "../Button/Button.jsx";
import TeachingImg from "../../Assets/Images/teaching.png";
import "./Teaching.scss"

const Teaching = () => {
    return (
        
        <section className="teaching">
            <div className="site-container hero__inner d-flex">
                <img
                    className="hero__img"
                    src={TeachingImg}
                    alt=""
                    width={614}
                    height={621}
                />
                
                <div className="teaching__right-side">
                    
                    <h1>A Passion for Teaching</h1>
                    <p className="teaching__desccription">
                        A deep-dive on the Instagram algorythm, hashtags, content strategy, and branding.
                    </p>
                    
                    <Button>Best Skillz</Button>
                </div>
               
            </div>
        </section>
        
    );
}

export default Teaching;
