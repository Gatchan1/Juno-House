import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

export default function CommunityGalleryD() {
  var settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="CommunityGalleryD">
      <Slider {...settings}>
        <div>
          <img src="/carousel1.png" alt="photo 1" />
        </div>
        <div>
          <img src="/carousel2.png" alt="photo 2" />
        </div>
        <div>
          <img src="/carousel3.png" alt="photo 3" />
        </div>
        <div>
          <img src="/carousel4.png" alt="photo 4" />
        </div>
        <div>
          <img src="/carousel5.png" alt="photo 5" />
        </div>
        <div>
          <img src="/carousel6.png" alt="photo 6" />
        </div>
        <div>
          <img src="/carousel7.png" alt="photo 7" />
        </div>
        <div>
          <img src="/carousel8.png" alt="photo 8" />
        </div>
      </Slider>
      <p><span>juno women</span> are smart, open-minded women from all walks of life.</p>
      <div className="button">
      <button className="community"><img src="/p_left.png" alt="left side of button"/><p>Book a tour</p><img src="/p_right.png" alt="right side of button"/></button>
      </div>
    </div>
  );
}
