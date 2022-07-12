import Image from "next/image";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";

//https://www.bollywoodhungama.com/wp-content/uploads/2022/04/K.G.F-%E2%80%93-Chapter-2-15.jpg

export async function getServerSideProps(context) {
  console.log(context.params.details);

  const result = await fetch(
    "http://localhost:3000/api/getId?_id=" + context.params.details
  );
  const data = await result.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}
export default function Detail({ data }) {
  console.log();
  // const [height, setHeight] = useState(0);
  // window.addEventListener("resize", function (event) {
  //   setHeight(window.innerWidth);
  // });
  // console.log(height);
  return (
    <div className="">
      <Header />
      <div className="relative max-h-20 ">
        <img
          className="object-fill h-[calc(100vh_-_70px)] w-full  "
          src={data[0].thumbnail}
        ></img>

        <div className={"absolute items-center  top-72 left-20  "}>
          <div className="flex  space-x-3">
            <button className="bg-white border-white border-2 px-4 py-2 rounded-sm flex items-center hover:bg-opacity-80">
              <Image
                src="/play-icon-black.png"
                layout="fixed"
                height="30px"
                width="30px"
              />
              <span className="text-black">PLAY</span>
            </button>
            <button className="px-6 py-2 border-white border-2 rounded-sm flex items-center bg-black bg-opacity-20 hover:bg-white hover:bg-opacity-20 ">
              <Image
                src="/play-icon-white.png"
                layout="fixed"
                height="30px"
                width="30px"
              />
              <span className="text-white">Trailer</span>
            </button>
            <button className=" text-2xl pb-1 rounded-full bg-black bg-opacity-50 border-white border-2 w-10 h-10 text-white font-semibold">
              +
            </button>
            <button className=" text-2xl rounded-full pt-1 bg-black bg-opacity-50 border-white border-2 w-10 h-10 text-white font-semibold">
              <Image
                src="/group-icon.png"
                height="25px"
                width="25px"
                layout="fixed"
              />
            </button>
          </div>
          <div className="text-white mt-5"> {data[0].genere}</div>
          <div className="text-white mt-5"> {data[0].description}</div>
        </div>
      </div>
    </div>
  );
}
