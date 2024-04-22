import "./firstView.css";
import Mysite from "./assets/MysiteSvg/Mysite.svg";
import cloud from "./assets/MysiteSvg/cloud.svg";
import star1 from "./assets/MysiteSvg/star1.svg";
import star2 from "./assets/MysiteSvg/star2.svg";
import star3 from "./assets/MysiteSvg/star3.svg";
import barcode from "./assets/MysiteSvg/barcode.svg";
import Mysitebg from "./assets/MysiteSvg/Mysitebg.svg";
import { ReactSVG } from "react-svg";

export default function FirstView() {
  return (
    <>
      <ReactSVG src={star1} className="outlineSvg"></ReactSVG>
      <ReactSVG src={star2} className="outlineSvg"></ReactSVG>
      <ReactSVG src={star3} className="outlineSvg"></ReactSVG>
      <ReactSVG src={Mysite}></ReactSVG>
      <ReactSVG src={barcode} className="outlineSvg"></ReactSVG>
      <ReactSVG src={Mysitebg} className="outlineSvg"></ReactSVG>
      <ReactSVG src={cloud} className="outlineSvg"></ReactSVG>
    </>
  );
}
