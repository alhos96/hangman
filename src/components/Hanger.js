import { React } from "react";

import hanger from "../bodyParts/hanger.svg";
import head from "../bodyParts/head.svg";
import body from "../bodyParts/body.svg";
import myLeftArm from "../bodyParts/myLeftArm.svg";
import myRightArm from "../bodyParts/myRightArm.svg";
import myLeftLeg from "../bodyParts/myLeftLeg.svg";
import myRightLeg from "../bodyParts/myRightLeg.svg";

function Hanger({ counter, playAgain }) {
  return (
    <div className="hanger-wrapp">
      <img className="" id="hanger" src={hanger} alt="hanger" />
      {counter > 0 && <img className="" id="head" src={head} alt="head" />}

      {counter > 1 && <img className="" id="body" src={body} alt="body" />}
      {counter > 2 && <img className="" id="myLeftArm" src={myLeftArm} alt="arm1" />}
      {counter > 3 && <img className="" id="myRightArm" src={myRightArm} alt="arm2" />}
      {counter > 4 && <img className="" id="myLeftLeg" src={myLeftLeg} alt="leg1" />}
      {counter > 5 && <img className="" id="myRightLeg" src={myRightLeg} alt="leg2" />}
      {counter > 5 && playAgain()}
    </div>
  );
}

export default Hanger;
