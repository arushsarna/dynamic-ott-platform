import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
export default function ImgSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  // const [data, setData] = useState();

  return (
    <Slider className="  mx-48 pt-10 px-4 " {...settings}>
      {/* <div className="shadow-xl ">
        <img
          className="object-cover"
          src="https://i.ibb.co/7yqy10s/Jugjugg-Jeeyo-cover-image.jpg"
        ></img>
       
      </div>
      <div className="shadow-xl ">
        <img
          className="object-cover"
          src="https://i.ibb.co/MRFDy0h/Rocketry-The-Nambi-Effect-2.jpg"
        ></img>
      
      </div> */}
      <div className="shadow-xl relative rounded-2xl h-[calc((100vh_-_70px)/2)] bg-red-500 w-full  ">
        <img
          className="object- rounded-2xl w-full h-full"
          src="https://i.ibb.co/JcNDB3s/avengers.webp"
        />
      </div>
      <div className="shadow-xl relative rounded-2xl h-[calc((100vh_-_70px)/2)] bg-red-500 w-full  ">
        <img
          className="object- rounded-2xl w-full h-full"
          src="https://i.ibb.co/MRFDy0h/Rocketry-The-Nambi-Effect-2.jpg"
        />
      </div>
      <div className="shadow-xl relative rounded-2xl h-[calc((100vh_-_70px)/2)] bg-red-500 w-full  ">
        <img
          className="object- rounded-2xl w-full h-full"
          src="https://i.ibb.co/7yqy10s/Jugjugg-Jeeyo-cover-image.jpg"
        />
      </div>
      <div className="shadow-xl relative rounded-2xl h-[calc((100vh_-_70px)/2)] bg-red-500 w-full  ">
        <img
          className="object- rounded-2xl w-full h-full"
          src="https://i.ibb.co/cC5VMsv/Bahubali-2-The-Conclusion-4.jpg"
        />
      </div>
      {/* <div className="shadow-xl ">
        <img
          className="object-cover"
          src="https://i.ibb.co/cC5VMsv/Bahubali-2-The-Conclusion-4.jpg"
        ></img>
       
      </div> */}
    </Slider>
  );
}
