import { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";

import Navigation from "../components/navigation";
import GSAP from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { getPageByAbout } from "../lib/api";

function About(page) {
  console.log(page);
  let el = useRef();

  useEffect(() => {
    GSAP.registerPlugin(SplitText);
    GSAP.registerPlugin(ScrollTrigger);

    var animation = GSAP.timeline({ delay: 1 });
    var tl = GSAP.timeline({ delay: 1 }),
    mySplitText = new SplitText(".about__title, .about__secondTitle", { type: "words,chars" }),
    chars = mySplitText.chars; //an array of all the divs that wrap each character
  
    GSAP.set(".about__title", { perspective: 400 });
    
    tl.from(chars, {
      duration: 0.8,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.01
    });

    var imagesContent = document.querySelectorAll(
      ".imagem__01",
    );


    imagesContent.forEach(function (image) {
      animation.from(image, {
        delay: 1,
        opacity: 0,
        duration: 0.9,
      });
    });

  }, []);
  return (
    <div className="wrapper__content">
      <Head>
        <title>{page.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation></Navigation>
      <div className="main__content">
        <div className="container">
          <h2 className="about__title" data-animation="title">
          {page.about.title} 
          </h2>
          <h3 className="about__secondTitle " data-animation="title">
            {page.about.secondTitle}
          </h3>
          <div className="home__content__media imagem__01">
            <Image 
              unoptimized 
              alt=""
              src={page.about.content[0].imageContent.sourceUrl}
              layout="fill" 
              className={'image'} 
            />
          </div>
        </div>
        <div className="container">
          <h4 className="about__secondTitle" data-animation="title">
          {page.about.content[1].label}
          </h4>
          <div className="home__content__media imagem__01">
            <Image 
              unoptimized 
              alt=""
              src={page.about.content[1].imageContent.sourceUrl}
              layout="fill" 
              className={'image'} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;

export async function getStaticProps({ params }) {
  const page = await getPageByAbout();
  return { props: page };
}
