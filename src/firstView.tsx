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
import { ReactSVG } from "react-svg";

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
  return (
    <>
      <Topbg>
        <ReactSVG src={star2} className="star2-1"></ReactSVG>
        <ReactSVG src={star2} className="star2-2"></ReactSVG>
        <ReactSVG src={star2} className="star2-3"></ReactSVG>
        <ReactSVG src={star3} className="star3-1"></ReactSVG>
        <ReactSVG src={star3} className="star3-2"></ReactSVG>
        <ReactSVG src={barcode} className="bercode"></ReactSVG>
        <ReactSVG src={cloud} className="cloud1-1"></ReactSVG>
        <ReactSVG src={cloud} className="cloud1-2"></ReactSVG>
        <ReactSVG src={cloud} className="cloud1-3"></ReactSVG>
        <ReactSVG src={cloud} className="cloud1-4"></ReactSVG>
        <ReactSVG src={cloud} className="cloud1-5"></ReactSVG>
      </Topbg>
      <TopLogo>
        <ReactSVG src={star1} className="outlineSvg star1-1"></ReactSVG>
        <ReactSVG src={star1} className="outlineSvg star1-2"></ReactSVG>
        <ReactSVG src={Mysite} className="MysiteLogo"></ReactSVG>
        <ReactSVG src={MysiteEffect} className="MysiteEffect"></ReactSVG>
        <ReactSVG src={Mysitebg} className="Mysitebg"></ReactSVG>
      </TopLogo>
    </>
  );
}
