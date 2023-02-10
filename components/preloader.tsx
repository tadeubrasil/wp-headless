import { useEffect, useRef } from "react";

import each from "lodash/each";
import { split } from "../animations/utils/text";
import GSAP from "gsap";
import { SplitText } from "gsap/SplitText";
import { Draggable } from "gsap/all";

export default function Preloader() {
  let el = useRef();
  useEffect(() => {
    GSAP.registerPlugin(SplitText);

    var animation = GSAP.timeline({ delay: 1 }),
    
    mySplitText = new SplitText("#quote", { type: "lines" }),
    chars = mySplitText.lines; //an array of all the divs that wrap each character

    animation.to(chars,{
      duration: 1.5,
      opacity:0, 
      y:50, 
      ease: 'expo.out',
      stagger:{
        from:"center", //try "center" and "edges"
        each:0.05
      },
    })

  }, []);

  return (
    <div className="preloader active">
      <div id="quote" className="preloader__text">
        "Time is money. We can save you both. Bringing you results through the
        power of digital."
      </div>
      <div className="preloader__number">
        <p className="preloader__number__text">0%</p>
      </div>   
    </div>
  
  );
}
