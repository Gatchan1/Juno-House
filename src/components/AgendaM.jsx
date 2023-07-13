import React, { Component } from "react";
import Slider from "react-slick";

export default function AgendaM() {
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    centerPadding: "10%",
    slidesToShow: 1,
    speed: 500,
  };

  return (
    <div id="AgendaM">
      <div className="slider">
        <Slider {...settings}>
          <div>
            <div className="container">
              <div className="article">
                <img src="./retreat_m.png" alt="spring urban retreat" />
                <div className="text">
                  <h4>SPRING URBAN RETREAT</h4>
                  <h4>BY U1É</h4>
                  <p className="date">Viernes, 24 de marzo</p>
                  <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div className="button">
                <button className="agenda-m">Apply here</button>
              </div>
            </div>
          </div>
          <div>
            <div className="container">
              <div className="article">
                <img src="./retreat_m.png" alt="spring urban retreat" />
                <div className="text">
                  <h4>SPRING URBAN RETREAT</h4>
                  <h4>BY U1É</h4>
                  <p className="date">Viernes, 24 de marzo</p>
                  <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div className="button">
                <button className="agenda-m">Apply here</button>
              </div>
            </div>
          </div>
          <div>
            <div className="container">
              <div className="article">
                <img src="./retreat_m.png" alt="spring urban retreat" />
                <div className="text">
                  <h4>SPRING URBAN RETREAT</h4>
                  <h4>BY U1É</h4>
                  <p className="date">Viernes, 24 de marzo</p>
                  <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div className="button">
                <button className="agenda-m">Apply here</button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="button outside">
        <button className="agenda-m">Go to agenda</button>
      </div>
    </div>
  );
}
