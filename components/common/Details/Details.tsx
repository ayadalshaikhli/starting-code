
import Link from "next/link"
import "./Details.module.css";
import Image from "next/image";
import IMAGES from "@assets/img/images";

import React, { useRef, useEffect, FC } from "react";
import gsap, { TweenMax, Expo } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import {
    
    FaFacebookF,
    FaPaperclip,
    FaGithub,
    FaLinkedin,
    FaInstagram,
  } from "react-icons/fa";


  gsap.registerPlugin(ScrollTrigger);

const Details: FC = () => {
    const tm = TweenMax,
    tl = gsap.timeline({ defaults: { ease: "power1.out" } });

  useEffect(() => {

    ScrollTrigger.create({
      trigger: ".details",
      start: "top 50%",
      end: "bottom 0%",

      onEnter: () => {
        gsap.to(".body", {
          duration: 1.0,
          backgroundColor: "#B7B8BA",
        });
      },

      onLeaveBack: () => {
        gsap.to(".body", {
          duration: 1.0,
          backgroundColor: "#F4B4B8",
        });
      },
    });
  });
    return (
        <div className="details h-screen relative">
          <div className="absolute inset-0 bg-contain bg-no-repeat bg-center" style={{
            backgroundImage: `url("https://ae01.alicdn.com/kf/H565b219859d64dd9a1e006297fed095b1.jpg")`
          }} ></div>
          <div className="details__title absolute top-1/4 left-2/4 bg-gray-300 rounded-lg h-96 w-96">
            <h1>hello</h1>
            </div>
        </div>
    )
  }
  
  export default Details