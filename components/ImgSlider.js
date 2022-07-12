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
    <Slider className=" rounded-xl mx-48 pt-10 px-4 " {...settings}>
      <div className="shadow-xl ">
        <div className="h-[480px] rounded-md   bg-no-repeat bg-center	bg-cover bg-fixed bg-green-100 bg-[url(https://i.ibb.co/7yqy10s/Jugjugg-Jeeyo-cover-image.jpg)]"></div>
      </div>
      <div className="shadow-xl ">
        <div className="h-[480px] rounded-md shadow-2xl  bg-no-repeat	bg-cover bg-fixed bg-[url(https://i.ibb.co/MRFDy0h/Rocketry-The-Nambi-Effect-2.jpg)] "></div>
      </div>
      <div className="shadow-xl ">
        <div className="h-[480px] rounded-md shadow-2xl   bg-[url(https://i.ibb.co/JcNDB3s/avengers.webp)] bg-no-repeat	bg-cover bg-fixed"></div>
      </div>
      <div className="shadow-xl ">
        <div className="h-[480px] rounded-md shadow-2xl  bg-no-repeat	bg-cover bg-fixed bg-[url(https://i.ibb.co/cC5VMsv/Bahubali-2-The-Conclusion-4.jpg)] "></div>
      </div>
    </Slider>
  );
}
