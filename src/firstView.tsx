import "./firstView.css";
import Mysite from "./assets/MysiteSvg/Mysite.svg";
import cloud from "./assets/MysiteSvg/cloud.svg";
import star1 from "./assets/MysiteSvg/star1.svg";
import star2 from "./assets/MysiteSvg/star2.svg";
import star3 from "./assets/MysiteSvg/star3.svg";
import barcode from "./assets/MysiteSvg/barcode.svg";
import Mysitebg from "./assets/MysiteSvg/Mysitebg.svg";
import MysiteEffect from "./assets/MysiteSvg/MysiteEffect.svg";
import { ReactSVG } from "react-svg";

export default function FirstView() {
  return (
    <>
      <div className="topbg">
        <ReactSVG src={star2} className="outlineSvg star2-1"></ReactSVG>
        <ReactSVG src={star2} className="outlineSvg star2-2"></ReactSVG>
        <ReactSVG src={star2} className="outlineSvg star2-3"></ReactSVG>
        <ReactSVG src={star3} className="outlineSvg star3-1"></ReactSVG>
        <ReactSVG src={barcode} className="outlineSvg bercode"></ReactSVG>
        <ReactSVG src={cloud} className="outlineSvg cloud1-1"></ReactSVG>
        <ReactSVG src={cloud} className="outlineSvg cloud1-2"></ReactSVG>
        <ReactSVG src={cloud} className="outlineSvg cloud1-3"></ReactSVG>
      </div>
      <div className="topLogo">
        <ReactSVG src={star1} className="outlineSvg star1-1"></ReactSVG>
        <ReactSVG src={star1} className="outlineSvg star1-2"></ReactSVG>
        <ReactSVG src={Mysite} className="MysiteLogo"></ReactSVG>
        <ReactSVG src={MysiteEffect} className="MysiteEffect"></ReactSVG>
        <ReactSVG src={Mysitebg} className="Mysitebg"></ReactSVG>
      </div>
    </>
  );
}
