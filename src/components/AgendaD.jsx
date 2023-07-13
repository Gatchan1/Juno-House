import React, { Component } from "react";
import Slider from "react-slick";

export default function AgendaD() {
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    /*     autoplay: true,*/
    centerPadding: "5%",
    speed: 1000,
    autoplaySpeed: 2000,
  };

  return (
    <div id="AgendaD">
      <div className="slider-container">
        <div className="slider">
          <Slider {...settings}>
            <div>
              <div className="container">
                <div className="article">
                  <div className="text">
                    <h4>SPRING URBAN RETREAT</h4>
                    <h4>BY U1É</h4>
                    <p className="date">Viernes, 24 de marzo</p>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="button">
                      <button className="slider">BOOK</button>
                    </div>
                  </div>
                  <div className="retreat">
                    <div className="flag flag1">
                      <img src="./flag1.png" alt="tag background" />
                      <p>Community</p>
                    </div>
                    <img className="image" src="./retreat.png" alt="spring urban retreat" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="container">
                <div className="article">
                  <div className="text">
                    <h4>SPRING URBAN RETREAT</h4>
                    <h4>BY U1É</h4>
                    <p className="date">Viernes, 24 de marzo</p>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="button">
                      <button className="slider">BOOK</button>
                    </div>
                  </div>
                  <div className="retreat">
                    <div className="flag flag2">
                      <img src="./flag2.png" alt="tag background" />
                      <p>Juno</p>
                    </div>
                    <img className="image" src="./retreat.png" alt="spring urban retreat" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="container">
                <div className="article">
                  <div className="text">
                    <h4>SPRING URBAN RETREAT</h4>
                    <h4>BY U1É</h4>
                    <p className="date">Viernes, 24 de marzo</p>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="button">
                      <button className="slider">BOOK</button>
                    </div>
                  </div>
                  <div className="retreat">
                    <div className="flag flag1">
                      <img src="./flag1.png" alt="tag background" />
                      <p>Community</p>
                    </div>
                    <img className="image" src="./retreat.png" alt="spring urban retreat" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="container">
                <div className="article">
                  <div className="text">
                    <h4>SPRING URBAN RETREAT</h4>
                    <h4>BY U1É</h4>
                    <p className="date">Viernes, 24 de marzo</p>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="button">
                      <button className="slider">BOOK</button>
                    </div>
                  </div>
                  <div className="retreat">
                    <div className="flag flag2">
                      <img src="./flag2.png" alt="tag background" />
                      <p>Juno</p>
                    </div>
                    <img className="image" src="./retreat.png" alt="spring urban retreat" />
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="button agenda">
        <button className="agenda">
          <img src="./p_left.png" alt="left side of button" />
          <p>Go to Agenda</p>
          <img src="./p_right.png" alt="right side of button" />
        </button>
      </div>
    </div>
  );
}
