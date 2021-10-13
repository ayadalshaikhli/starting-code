
import Link from "next/link"
import "./Social.module.css";
import React, { useRef, useEffect, FC } from "react";
import gsap, { TweenMax, Expo } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import {
    
    FaFacebookF,
    FaPaperclip,
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaTwitter
  } from "react-icons/fa";

  gsap.registerPlugin(ScrollTrigger);

const Social: FC = () => {
    const tm = TweenMax,
    tl = gsap.timeline({ defaults: { ease: "power1.out" } });

  useEffect(() => {
    tm.from(".social", 1.6, {
      opacity: 0,
      y: 60,
      ease: Expo.easeInOut,
      delay: 0.6,
    });
    tl.from(".fab", 1, {
      x: "-100",
      opacity: 0,
      stagger: 0.15,
      delay: 1.5,
      scale: "1.8",
      ease: Expo.easeInOut,
    });
    ScrollTrigger.create({
      trigger: ".product",
      start: "top 50%",
      end: "bottom 0%",

      onEnter: () => {
        gsap.to(".social", {
          duration: 1.0,
          color: "#111",
          
        });
      },

      onLeaveBack: () => {
        gsap.to(".social", {
          duration: 1.0,
          color: "white",
        });
      },
    });
    ScrollTrigger.create({
      trigger: ".hero-class",
      start: "top 50%",
      end: "bottom 0%",

      onEnter: () => {
        gsap.to(".social", {
          duration: 1.0,
          color: "white",
          
        });
      },

      onLeaveBack: () => {
        gsap.to(".social", {
          duration: 1.0,
          color: "white",
        });
      },
    });
    ScrollTrigger.create({
      trigger: ".details",
      start: "top 50%",
      end: "bottom 0%",

      onEnter: () => {
        gsap.to(".social", {
          duration: 1.0,
          color: "#111",
          
        });
      },

      onLeaveBack: () => {
        gsap.to(".social", {
          duration: 1.0,
          color: "#111",
        });
      },
    });
  });
    return (
      <div>
        <div className="social text-white fixed pl-5 top-1/4 flex flex-col z-30">
          <a className="mb-5" href="#contact">
            <i className="fab fas fa-phone-alt"></i>
          </a>
          <a  className="mb-5" href="https://www.instagram.com/maangetato/">
            <FaInstagram className="fab"  size={30}/>
          </a>
          <a  className="mb-5" href="https://www.facebook.com/MaangeTato-113144581141836/">
            <FaFacebookF className="fab"  size={30}/>
          </a>
          <a  className="mb-5" href="https://twitter.com/MaangeTato">
            <FaTwitter className="fab"  size={30}/>
          </a>

        </div>
      </div>
    )
  }
  
  export default Social