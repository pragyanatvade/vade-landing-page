import React from "react";
import Desc from "./Desc";
import doodleBot from "../assets/Assets/Images/doodle_bottom.png";
import Image from "next/image";
import SkipTheHassle from "./SkipTheHassle";
import CruiseThroughBackend from "./CruiseThroughBackend";
import SecondaryDesc from "./SecondaryDesc";
import NewsLetter from "@components/Newsletter";
import BackToTop from "./BackToTop";

const Body = () => {
  return (
    <div className="bg-white w-full rounded-t-3xl mt-24 shadow-[2px_-4px_100px_100px_#0000000F] text-center">
      <Desc />
      <Image src={doodleBot} />
      <SkipTheHassle />
      <CruiseThroughBackend />
      <Image src={doodleBot} />
      <SecondaryDesc />
      <NewsLetter className="m-auto w-max" />
      <BackToTop />
    </div>
  );
};

export default Body;
