import { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";

import Navigation from "../components/navigation";
import Preloader from "../components/preloader";
import GSAP from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imagesLoaded from "imagesloaded";


import { getPageByHome } from "../lib/api";

function HomePage(page) {
  let el = useRef();

  useEffect(() => {
    GSAP.registerPlugin(SplitText);
    GSAP.registerPlugin(ScrollTrigger);

    var animation = GSAP.timeline({ delay: 5.8 }),

    //var tl = GSAP.timeline({ delay: 5.8 }),
    mySplitText = new SplitText(".headline__01, .secondHeadline_01", { type: "words,chars" }),
    chars = mySplitText.chars; //an array of all the divs that wrap each character
  
    var imagesContent = document.querySelector(
      ".imagem__01",
    );

    animation.from(chars, {
      duration: 2,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.01
    })
    .from(imagesContent, {
      opacity: 0,
      duration: 1,
      ease: "back",
    });

    var aboutTitles = document.querySelectorAll(".text__animation");

    // Criar a animação para cada título
    aboutTitles.forEach(function (title) {
      animation.from(title, {
        duration: 2,
        opacity:0, 
        y:50, 
        ease: 'expo.out',
        stagger:{
          from:"center", //try "center" and "edges"
          each:0.05
        },
        scrollTrigger: {
          trigger: title,
          start: "-300px center",  // [trigger] [scroller] positions
          end: "bottom center", // [trigger] [scroller] positions
          // or relative amount: "+=500"
          scrub: 1, // or time (in seconds) to catch up
          markers: false, // only during development!
        },
      });
    });

    var imagesContent2 = document.querySelector(
      ".imagem__secund",
    );

    animation.from(imagesContent2, {
      opacity: 0,
      duration: 1,
      ease: "back",
      scrollTrigger: {
        trigger: imagesContent2,
        start: "-20px center",  // [trigger] [scroller] positions
        end: "bottom center", // [trigger] [scroller] positions
        // or relative amount: "+=500"
        scrub: 1, // or time (in seconds) to catch up
        markers: false, // only during development!
      },
    });

    ScrollTrigger.batch(".card", {
      interval: 0.1, // time window (in seconds) for batching to occur. 
      batchMax: 3,   // maximum batch size (targets)
      onEnter: batch => GSAP.to(batch, {opacity: 0, stagger: 0.15, overwrite: true}),
      onLeave: batch => GSAP.set(batch, {opacity: 1, overwrite: true}),
      onEnterBack: batch => GSAP.to(batch, {opacity: 1, stagger: 0.15, overwrite: true}),
      onLeaveBack: batch => GSAP.set(batch, {opacity: 0, overwrite: true})
      // you can also define things like start, end, etc.
    });
    

  }, []);
  return (
    <div className="wrapper__content">
      <Preloader />
      <Head>
        <title>{page.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation></Navigation>
      <div className="main__content">
        <div className="container">
          <h2 className="about__title headline__01" >
            {page.home.content[0].title}
          </h2>
          <p className="about__secondTitle secondHeadline_01">{page.home.content[0].label} </p>
          <div className="home__content__media imagem__01">
            <Image 
              unoptimized 
              alt=""
              src={page.home.content[0].image.sourceUrl} 
              layout="fill" 
              className={'image'} 
            />
          </div>
          <p className="about__secondTitle text__animation">{page.home.content[1].label}</p>
          <h2 className="about__title text__animation" >
            {page.home.content[1].title}
          </h2>
            <div className="d-flex flex-wrap pt-5 pb-3">
              <div className="card mr-3 mb-3">
              <Image 
                unoptimized
                alt=""
                src={page.home.galery[0].sourceUrl} 
                width={800}
                height={400}
                className={'image'} 
              />
              </div>
              <div className="card mr-3 mb-3">
              <Image 
                unoptimized
                alt=""
                src={page.home.galery[1].sourceUrl} 
                width={800}
                height={400}
                className={'image'} 
              />
              </div>
              <div className="card mr-3 mb-3">
              <Image 
                unoptimized
                alt=""
                src={page.home.galery[2].sourceUrl} 
                width={800}
                height={400}
                className={'image'} 
              />
              </div>
              <div className="card mr-3 mb-3">
              <Image 
                unoptimized
                alt=""
                src={page.home.galery[3].sourceUrl} 
                width={800}
                height={400}
                className={'image'} 
              />
              </div>
              <div className="card mr-3 mb-3">
              <Image 
                unoptimized
                alt=""
                src={page.home.galery[4].sourceUrl} 
                width={800}
                height={400}
                className={'image'} 
              />
              </div>
              <div className="card mr-3 mb-3">
              <Image 
                unoptimized
                alt=""
                src={page.home.galery[5].sourceUrl} 
                width={800}
                height={400}
                className={'image'} 
              />
              </div>
              <div className="card mr-3 mb-3">
              <Image 
                unoptimized
                alt=""
                src={page.home.galery[6].sourceUrl} 
                width={800}
                height={400}
                className={'image'} 
              />
              </div>
              <div className="card mr-3 mb-3">
              <Image 
                unoptimized
                alt=""
                src={page.home.galery[7].sourceUrl} 
                width={800}
                height={400}
                className={'image'} 
              />
              </div>
              <div className="card mr-3 mb-3">
              <Image 
                unoptimized
                alt=""
                src={page.home.galery[8].sourceUrl} 
                width={800}
                height={400}
                className={'image'} 
              />
              </div>
              <div className="card mr-3 mb-3">
              <Image 
                unoptimized
                alt=""
                src={page.home.galery[10].sourceUrl} 
                width={800}
                height={400}
                className={'image'} 
              />
              </div>
              <div className="card mr-3 mb-3">
              <Image 
                unoptimized
                alt=""
                src={page.home.galery[12].sourceUrl} 
                width={800}
                height={400}
                className={'image'} 
              />
              </div>
              <div className="card mr-3 mb-3">
              <Image 
                unoptimized
                alt=""
                src={page.home.galery[13].sourceUrl} 
                width={800}
                height={400}
                className={'image'} 
              />
              </div>
            </div>
          <p className="about__secondTitle text__animation">{page.home.content[2].label}</p>
          <h2 className="about__title text__animation" >
            {page.home.content[2].title}
          </h2>
          <div className="home__content__media imagem__secund">
            <Image 
              unoptimized
              alt=""
              src={page.home.content[2].image.sourceUrl} 
              layout="fill" 
              className={'image'} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

export async function getServerSideProps({ params }) {
  const page = await getPageByHome();
  return { props: page };
}
