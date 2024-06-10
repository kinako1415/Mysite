import "./firstView.css";
import FirstView1 from "./../components/firstView1.tsx";
import FirstView2 from "./../components/firstView2.tsx";
import FirstView3 from "./../components/firstView3.tsx";
import styled from "styled-components";

import React from "react";

// Create your instance
const gradient: any = new Gradient();

import { Gradient } from "./Gradient.ts"


// Create your instance

// Call `initGradient` with the selector to your canvas
gradient.initGradient("#gradient-canvas");

export default function FirstView() {
  React.useEffect(() => {
    // Call `initGradient` with the selector to your canvas
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <>
      <canvas id="gradient-canvas" data-transition-in />
      <FirstView3 />
      <FirstView2 />
      <FirstView1 />
    </>
  );
}
