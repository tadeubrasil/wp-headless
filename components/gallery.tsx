import { useEffect, useRef } from "react";
import GSAP from "gsap";
import $ from 'jquery';
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Preloader(page, gallery) {
  page
  gallery
  let el = useRef();
  useEffect(() => {
    GSAP.registerPlugin(ScrollTrigger);
    var loadingWrapper = document.querySelector(".loading_wrapper");
    var loadingInnerContent = document.querySelector(".loading-inner-content");

    console.log(loadingWrapper);
    console.log(loadingInnerContent);
    const images = GSAP.utils.toArray('.box-content');

    console.log(images);
    var animation = GSAP.timeline({ delay: 1 })
    animation.from(images, {
      duration: 1,
      opacity: 0,
      xPercent: -50,
      ease: "expo.out",
      stagger: {
        from: "center", //try "center" and "edges"
        each: 0.05,
      },
      scrollTrigger: {
        trigger: images,
        start: "-300px center", // [trigger] [scroller] positions
        end: "bottom center", // [trigger] [scroller] positions
        // or relative amount: "+=500"
        scrub: 1, // or time (in seconds) to catch up
        markers: false, // only during development!
      },
    });
   /* $(window).on("load", function(){
      var $loadingWrapper = $(".loading_wrapper"),
      $loadingInnerContent = $(".loading-inner-content");

      $loadingInnerContent.on("mousemove touchmove", function(e){
        if(e.clientX > $loadingWrapper.width() / 2) {
          TweenMax.to($loadingWrapper, 2, {
            scrollTo: {
              x: "+=175"
            },
            ease: Power2.easeOut
          });
        }else {
          TweenMax.to($loadingWrapper, 2, {
            scrollTo: {
              x: "-=175"
            },
            ease: Power2.easeOut
          })
        }
      })
    })
*/
  }, []);

  return (
    <div className="loading_wrapper">
    <div className="loading-inner-content">
      <div className="box box-1">
        <div className="box-content">
        <Image
                  unoptimized
                  alt=""
                  src={page.home.galery[0].sourceUrl}
                  width={800}
                  height={400}
                  className={"image"}
                />
        </div>
      </div>
      <div className="box box-2">
        <div className="box-content">
          <img src="https://placekitten.com/400/300" alt="" />
        </div>
      </div>
      <div className="box box-3">
        <div className="box-content">
          <img src="https://placekitten.com/400/300" alt="" />
        </div>
      </div>
      <div className="box box-4">
        <div className="box-content">
          <img src="https://placekitten.com/400/300" alt="" />
        </div>
      </div>
      <div className="box box-5">
        <div className="box-content">
          <img src="https://placekitten.com/400/300" alt="" />
        </div>
      </div>
      <div className="box box-6">
        <div className="box-content">
          <img src="https://placekitten.com/400/300" alt="" />
        </div>
      </div>
      <div className="box box-7">
        <div className="box-content">
          <img src="https://placekitten.com/400/300" alt="" />
        </div>
      </div>
      <div className="box box-8">
        <div className="box-content">
          <img src="https://placekitten.com/400/300" alt="" />
        </div>
      </div>
      <div className="box box-9">
        <div className="box-content">
          <img src="https://placekitten.com/400/300" alt="" />
        </div>
      </div>
      <div className="box box-10">
        <div className="box-content">
          <img src="https://placekitten.com/400/300" alt="" />
        </div>
      </div>
    </div>
  </div>
  
  );
}
