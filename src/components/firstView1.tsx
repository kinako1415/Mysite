import { ReactElement } from "react";
import { ReactSVG } from "react-svg";

import styled from "styled-components";

import star1 from "../assets/MysiteSvg/star1.svg";
import Mysitebg from "../assets/MysiteSvg/Mysitebg.svg";
import MysiteEffect from "../assets/MysiteSvg/MysiteEffect.svg";
import Mysite from "../assets/MysiteSvg/Mysite.svg";
import subTitle from "../assets/MysiteSvg/subTitle.svg";

const TopLogo = styled.div`
  position: relative;
  transform: scale(0.75);
  left: 2.9rem;
  top: 9rem;
  z-index: 10;
  outlineSvg {
    stroke: #000000;
    stroke-width: 1px;
  }
  Mysitebg {
    position: absolute;
    z-index: 0;
    top: 9.8rem;
    left: -5.6rem;
  }
  MysiteLogo {
    position: absolute;
    top: 2rem;
    z-index: 15;
  }
  MysiteEffect {
    position: absolute;
    z-index: 16;
    left: -11rem;
    top: 0rem;
    transform: scale(1);
  }
  star1-1 {
    position: absolute;
    left: -14rem;
    z-index: 16;
  }
  star1-2 {
    position: absolute;
    transform: scale(0.9);
    left: 74rem;
    top: 24rem;
    z-index: 16;
  }
`;

const FirstView1 = (): ReactElement => {
  <TopLogo>
    <ReactSVG src={star1} className="outlineSvg star1-1"></ReactSVG>
    <ReactSVG src={star1} className="outlineSvg star1-2"></ReactSVG>
    <ReactSVG src={subTitle} className="outlineSvg subTitle"></ReactSVG>
    <ReactSVG src={Mysite} className="MysiteLogo"></ReactSVG>
    <ReactSVG src={MysiteEffect} className="MysiteEffect"></ReactSVG>
    <ReactSVG src={Mysitebg} className="Mysitebg"></ReactSVG>
  </TopLogo>;
};

export default FirstView1;
