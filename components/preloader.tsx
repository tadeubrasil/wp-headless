import { useEffect, useRef } from "react";
import GSAP from "gsap";
import { SplitText } from "gsap/SplitText";
import imagesLoaded from "imagesloaded";

export default function Preloader() {
  let el = useRef();
  useEffect(() => {
    GSAP.registerPlugin(SplitText);

    var animation = GSAP.timeline({ delay: 1 })
    var preloader = document.querySelector(".preloader"),
    mySplitText = new SplitText("#quote", { type: "lines" }),
    chars = mySplitText.lines; //an array of all the divs that wrap each character

    const images = GSAP.utils.toArray('img');
    const loader = document.querySelector('.preloader__number__text');
    const updateProgress = (instance) =>
    loader.textContent = `${Math.round(instance.progressedCount * 100 / images.length)}%`;
    
    animation.from(loader,{
      opacity:0
    })
    .from(chars,{
      duration: 2,
      opacity:0, 
      y:50, 
      ease: 'expo.out',
      stagger:{
        from:"center", //try "center" and "edges"
        each:0.05
      },
    })
    .to(loader,{
      y:50, 
    })
    .to(chars,{
      duration: 2,
      opacity:0, 
      y:50, 
      ease: 'expo.out',
      stagger:{
        from:"center", //try "center" and "edges"
        each:0.06
      },
    })

    .to(preloader,{
      delay: 0,
      duration: 1.5,
      y: "100%",
      ease: "expo.out",
      onComplete: function(){  animation.set(preloader, { className: "preloader__none"}) },
    })
    .to(preloader,{
        zIndex: -1
    });

    imagesLoaded(images).on('progress', updateProgress)
  }, []);

  return (
    <div className="preloader">
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
