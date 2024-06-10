import { ReactElement } from "react";
import { ReactSVG } from "react-svg";
import styled from "styled-components";

import ShootingStars1 from "../assets/MysiteSvg/ShootingStars1.svg";
import ShootingStars2 from "../assets/MysiteSvg/ShootingStars2.svg";
import ShootingStars3 from "../assets/MysiteSvg/ShootingStars3.svg";
import ShootingStars4 from "../assets/MysiteSvg/ShootingStars4.svg";

const Topbg = styled.div`
  position: relative;
  z-index: 0;
  stroke: #000000;
  stroke-width: 1px;
  .ShootingStars1 {
    position: absolute;
    z-index: 0;
    transform: scale(0.9);
    left: -10rem;
    top: -10rem;
  }
  .ShootingStars2 {
    position: absolute;
    z-index: 0;
    transform: scale(0.9);
    left: -12rem;
    top: 18rem;
  }
  .ShootingStars3 {
    position: absolute;
    z-index: 0;
    transform: scale(0.9);
    left: 24rem;
    top: -7rem;
  }
  .ShootingStars4 {
    position: absolute;
    z-index: 0;
    transform: scale(0.9);
    left: 62rem;
    top: 1rem;
  }
`;

export default function FirstView(): ReactElement {
  return (
    <Topbg>
      <ReactSVG src={ShootingStars1} className="ShootingStars1"></ReactSVG>
      <ReactSVG src={ShootingStars2} className="ShootingStars2"></ReactSVG>
      <ReactSVG src={ShootingStars3} className="ShootingStars3"></ReactSVG>
      <ReactSVG src={ShootingStars4} className="ShootingStars4"></ReactSVG>
    </Topbg>
  );
}
