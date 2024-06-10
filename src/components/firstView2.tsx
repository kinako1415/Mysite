import { ReactElement } from "react";
import { ReactSVG } from "react-svg";
import styled from "styled-components";

import cloud from "../assets/MysiteSvg/cloud.svg";
import star2 from "../assets/MysiteSvg/star2.svg";
import star3 from "../assets/MysiteSvg/star3.svg";

const Topbg = styled.div`
  position: relative;
  z-index: 0;
  stroke: #000000;
  stroke-width: 1px;
  .star2-1 {
    position: absolute;
    transform: scale(0.7);
    left: 74rem;
    top: 40rem;
    z-index: 2;
  }
  .star2-2 {
    position: absolute;
    left: 1rem;
    transform: scale(0.8);
    top: 1rem;
    z-index: 2;
  }
  .star2-3 {
    position: absolute;
    left: 3rem;
    top: 42rem;
    transform: scale(0.7);
    z-index: 2;
  }
  .star3-1 {
    position: absolute;
    left: 28rem;
    top: 6rem;
    z-index: 2;
    transform: scale(0.7);
  }
  .star3-2 {
    position: absolute;
    left: 60rem;
    top: 33rem;
    z-index: 2;
    transform: scale(0.6);
  }
  .cloud1-1 {
    position: absolute;
    transform: scale(0.4);
    left: 33rem;
    top: 7rem;
    z-index: 1;
  }
  .cloud1-2 {
    position: absolute;
    transform: scale(0.7);
    left: 48rem;
    top: 3rem;
    z-index: 1;
  }
  .cloud1-3 {
    position: absolute;
    transform: scale(0.4);
    left: 11rem;
    top: -3rem;
    z-index: 1;
  }
  .cloud1-4 {
    position: absolute;
    transform: scale(0.6);
    left: -1rem;
    top: 32rem;
    z-index: 1;
  }
  .cloud1-5 {
    position: absolute;
    transform: scale(0.8);
    left: 42rem;
    top: 40rem;
    z-index: 1;
  }
`;

export default function FirstView2(): ReactElement {
  return (
    <Topbg>
      <ReactSVG src={star2} className="star2-1"></ReactSVG>
      <ReactSVG src={star2} className="star2-2"></ReactSVG>
      <ReactSVG src={star2} className="star2-3"></ReactSVG>
      <ReactSVG src={star3} className="star3-1"></ReactSVG>
      <ReactSVG src={star3} className="star3-2"></ReactSVG>
      <ReactSVG src={cloud} className="cloud1-1"></ReactSVG>
      <ReactSVG src={cloud} className="cloud1-2"></ReactSVG>
      <ReactSVG src={cloud} className="cloud1-3"></ReactSVG>
      <ReactSVG src={cloud} className="cloud1-4"></ReactSVG>
      <ReactSVG src={cloud} className="cloud1-5"></ReactSVG>
    </Topbg>
  );
}
