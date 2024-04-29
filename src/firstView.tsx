import "./firstView.css";
import styled from "styled-components";
import Mysite from "./assets/MysiteSvg/Mysite.svg";
import cloud from "./assets/MysiteSvg/cloud.svg";
import star1 from "./assets/MysiteSvg/star1.svg";
import star2 from "./assets/MysiteSvg/star2.svg";
import star3 from "./assets/MysiteSvg/star3.svg";
import barcode from "./assets/MysiteSvg/barcode.svg";
import Mysitebg from "./assets/MysiteSvg/Mysitebg.svg";
import MysiteEffect from "./assets/MysiteSvg/MysiteEffect.svg";
import ShootingStars1 from "./assets/MysiteSvg/ShootingStars1.svg";
import ShootingStars2 from "./assets/MysiteSvg/ShootingStars2.svg";
import ShootingStars3 from "./assets/MysiteSvg/ShootingStars3.svg";
import ShootingStars4 from "./assets/MysiteSvg/ShootingStars4.svg";
import subTitle from "./assets/MysiteSvg/subTitle.svg";
import { ReactSVG } from "react-svg";

import React, { useState, useEffect } from "react";

// Create your instance
const gradient: any = new Gradient();

import { Gradient } from "./Gradient.ts";

// Create your instance

// Call `initGradient` with the selector to your canvas
gradient.initGradient("#gradient-canvas");

const Topbg = styled.div`
  position: relative;
  z-index: 0;
  stroke: #000000;
  stroke-width: 1px;
`;

const TopLogo = styled.div`
  position: relative;
  transform: scale(0.75);
  left: 3.4rem;
  top: 7rem;
  z-index: 10;
`;

export default function FirstView() {
  React.useEffect(() => {
    // Call `initGradient` with the selector to your canvas
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <>
      <canvas id="gradient-canvas" data-transition-in />
      <Topbg>
        <ReactSVG src={star2} className="star2-1"></ReactSVG>
        <ReactSVG src={star2} className="star2-2"></ReactSVG>
        <ReactSVG src={star2} className="star2-3"></ReactSVG>
        <ReactSVG src={star3} className="star3-1"></ReactSVG>
        <ReactSVG src={star3} className="star3-2"></ReactSVG>
        <ReactSVG src={barcode} className="barcode"></ReactSVG>
        <ReactSVG src={cloud} className="cloud1-1"></ReactSVG>
        <ReactSVG src={cloud} className="cloud1-2"></ReactSVG>
        <ReactSVG src={cloud} className="cloud1-3"></ReactSVG>
        <ReactSVG src={cloud} className="cloud1-4"></ReactSVG>
        <ReactSVG src={cloud} className="cloud1-5"></ReactSVG>
        <ReactSVG src={ShootingStars1} className="ShootingStars1"></ReactSVG>
        <ReactSVG src={ShootingStars2} className="ShootingStars2"></ReactSVG>
        <ReactSVG src={ShootingStars3} className="ShootingStars3"></ReactSVG>
        <ReactSVG src={ShootingStars4} className="ShootingStars4"></ReactSVG>
      </Topbg>
      <TopLogo>
        <ReactSVG src={star1} className="outlineSvg star1-1"></ReactSVG>
        <ReactSVG src={star1} className="outlineSvg star1-2"></ReactSVG>
        <ReactSVG src={subTitle} className="outlineSvg subTitle"></ReactSVG>
        <ReactSVG src={Mysite} className="MysiteLogo"></ReactSVG>
        <ReactSVG src={MysiteEffect} className="MysiteEffect"></ReactSVG>
        <ReactSVG src={Mysitebg} className="Mysitebg"></ReactSVG>
      </TopLogo>
    </>
  );
}
