
import Link from "next/link"
import "./About.module.css";
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

const About: FC = () => {
    const tm = TweenMax,
    tl = gsap.timeline({ defaults: { ease: "power1.out" } });

  useEffect(() => {
    tm.from(".social1", 1.6, {
      opacity: 0,
      y: 60,
      ease: Expo.easeInOut,
      delay: 0.6,
    });
    tl.from(".fab1", 1, {
      x: "-100",
      opacity: 0,
      stagger: 0.15,
      delay: 1.5,
      scale: "1.8",
      ease: Expo.easeInOut,
    });


  });
    return (
      <div>
        Hello
      </div>
    )
  }
  
  export default About