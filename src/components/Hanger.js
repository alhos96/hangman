import React from "react";
import hanger from "../bodyParts/hanger.svg";
import head from "../bodyParts/head.svg";
import body from "../bodyParts/body.svg";
import myLeftArm from "../bodyParts/myLeftArm.svg";
import myRightArm from "../bodyParts/myRightArm.svg";
import myLeftLeg from "../bodyParts/myLeftLeg.svg";
import myRightLeg from "../bodyParts/myRightLeg.svg";

function Hanger() {
  return (
    <div className="hanger-wrapp">
      <img className="" id="hanger" src={hanger} alt="hanger" />
      <img className="" id="head" src={head} alt="head" />
      <img className="" id="body" src={body} alt="body" />
      <img className="" id="myLeftArm" src={myLeftArm} alt="arm1" />
      <img className="" id="myRightArm" src={myRightArm} alt="arm2" />
      <img className="" id="myLeftLeg" src={myLeftLeg} alt="leg1" />
      <img className="" id="myRightLeg" src={myRightLeg} alt="leg2" />
    </div>
  );
}

export default Hanger;
