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
  console.log(page);
  let el = useRef();

  useEffect(() => {
    GSAP.registerPlugin(SplitText);
    GSAP.registerPlugin(ScrollTrigger);

    var animation = GSAP.timeline({ delay: 1 });

    var tl = GSAP.timeline({ delay: 2.7 }),
    mySplitText = new SplitText(".headline__01, .secondHeadline_01", { type: "words,chars" }),
    chars = mySplitText.chars; //an array of all the divs that wrap each character
  
    GSAP.set(".headline__01", { perspective: 400 });
    
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
        delay: 2.7,
        opacity: 0,
        duration: 4
      });
    });


    var aboutTitles = document.querySelectorAll(".text__animation");
    // Criar a animação para cada título
    aboutTitles.forEach(function (title) {
      animation.from(title, {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: title,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    var imagesSecund = document.querySelectorAll(
      ".imagem__secund",
    );

    imagesSecund.forEach(function (image) {
      animation.from(image, {
        opacity: 0,
        x: -100,
        duration: 1,
        scrollTrigger: {
          trigger: imagesSecund,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    /* RIGHT */
    var aboutTitles = document.querySelectorAll(".text__animation_right");
    // Criar a animação para cada título
    aboutTitles.forEach(function (title) {
      animation.from(title, {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: title,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    var imagesSecund_Right = document.querySelectorAll(
      ".imagem__secund_right",
    );

    imagesSecund_Right.forEach(function (image) {
      animation.from(image, {
        opacity: 0,
        x: -100,
        duration: 1,
        scrollTrigger: {
          trigger: imagesSecund,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    const images = GSAP.utils.toArray('img');
    
    const showDemo = () => {
      document.body.style.overflow = 'auto';
      document.scrollingElement.scrollTo(0, 0);
      GSAP.to(document.querySelector('.loader'), { autoAlpha: 0 });
    
      GSAP.utils.toArray('section').forEach((section, index) => {
        const w = section.querySelector('.wrapper');
        const [x, xEnd] = index % 2 ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
        GSAP.fromTo(w, { x }, {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 0.5 } 
          });
      });
    };

    imagesLoaded(images).on('always', showDemo);




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
          <div className="demo-wrapper">
          <section className='demo-gallery'>
            <ul className='wrapper'>
              <li>
              <Image 
                unoptimized
                alt=""
                src={page.home.galery[0].sourceUrl} 
                width={800}
                height={400}
                className={'image'} 
              />
              </li>
              <li>
                <Image 
                  unoptimized
                  alt=""
                  src={page.home.galery[1].sourceUrl} 
                  width={800}
                  height={400}
                  className={'image'} 
                />
              </li>
              <li>
                <Image 
                  unoptimized
                  alt=""
                  src={page.home.galery[2].sourceUrl} 
                  width={800}
                  height={400}
                  className={'image'} 
                />
              </li>
              <li>
                <Image 
                  unoptimized
                  alt=""
                  src={page.home.galery[3].sourceUrl} 
                  width={800}
                  height={400}
                  className={'image'} 
                />
              </li>
            </ul>
          </section>
          <section className='demo-gallery'>
            <ul className='wrapper'>
              <li>
                <Image 
                  unoptimized
                  alt=""
                  src={page.home.galery[4].sourceUrl} 
                  width={800}
                  height={400}
                  className={'image'} 
                />
              </li>
              <li>
                <Image 
                  unoptimized
                  alt=""
                  src={page.home.galery[5].sourceUrl} 
                  width={800}
                  height={400}
                  className={'image'} 
                />
              </li>
              <li>
                <Image 
                  unoptimized
                  alt=""
                  src={page.home.galery[6].sourceUrl} 
                  width={800}
                  height={400}
                  className={'image'} 
                />
              </li>
              <li>
                <Image 
                  unoptimized
                  alt=""
                  src={page.home.galery[7].sourceUrl} 
                  width={800}
                  height={400}
                  className={'image'} 
                />
              </li>
            </ul>
          </section>
          <section className='demo-gallery'>
            <ul className='wrapper'>
              <li>
              <Image 
                unoptimized
                alt=""
                src={page.home.galery[9].sourceUrl} 
                width={800}
                height={400}
                className={'image'} 
              />
              </li>
              <li>
                <Image 
                  unoptimized
                  alt=""
                  src={page.home.galery[10].sourceUrl} 
                  width={800}
                  height={400}
                  className={'image'} 
                />
              </li>
              <li>
                <Image 
                  unoptimized
                  alt=""
                  src={page.home.galery[11].sourceUrl} 
                  width={800}
                  height={400}
                  className={'image'} 
                />
              </li>
              <li>
                <Image 
                  unoptimized
                  alt=""
                  src={page.home.galery[12].sourceUrl} 
                  width={800}
                  height={400}
                  className={'image'} 
                />
              </li>
            </ul>
          </section>
          <section className='demo-gallery mb-2rem'>
            <ul className='wrapper'>
              <li>
                <Image 
                  unoptimized
                  alt=""
                  src={page.home.galery[13].sourceUrl} 
                  width={800}
                  height={400}
                  className={'image'} 
                />
              </li>
              <li>
                <Image 
                  unoptimized
                  alt=""
                  src={page.home.galery[14].sourceUrl} 
                  width={800}
                  height={400}
                  className={'image'} 
                />
              </li>
              <li>
                <Image 
                  unoptimized
                  alt=""
                  src={page.home.galery[15].sourceUrl} 
                  width={800}
                  height={400}
                  className={'image'} 
                />
              </li>
              <li>
                <Image 
                  unoptimized
                  alt=""
                  src={page.home.galery[8].sourceUrl} 
                  width={800}
                  height={400}
                  className={'image'} 
                />
              </li>
            </ul>
          </section>
          </div>
          <p className="about__secondTitle text__animation">{page.home.content[1].label}</p>
          <h2 className="about__title text__animation_right" >
            {page.home.content[2].title}
          </h2>
          <div className="home__content__media imagem__secund_right">
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

export async function getStaticProps({ params }) {
  const page = await getPageByHome();
  return { props: page };
}
