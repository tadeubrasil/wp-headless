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
      mySplitText = new SplitText(".headline__01, .secondHeadline_01", {
        type: "words,chars",
      }),
      chars = mySplitText.chars; //an array of all the divs that wrap each character

    var imagesContent = document.querySelector(".imagem__01");

    animation
      .from(chars, {
        duration: 2,
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: "back",
        stagger: 0.01,
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
        opacity: 0,
        y: 50,
        ease: "expo.out",
        stagger: {
          from: "center", //try "center" and "edges"
          each: 0.05,
        },
        scrollTrigger: {
          trigger: title,
          start: "-300px center", // [trigger] [scroller] positions
          end: "bottom center", // [trigger] [scroller] positions
          // or relative amount: "+=500"
          scrub: 1, // or time (in seconds) to catch up
          markers: false, // only during development!
        },
      });
    });

    var imagesContent2 = document.querySelector(".imagem__secund");

    animation.from(imagesContent2, {
      opacity: 0,
      duration: 1,
      ease: "back",
      scrollTrigger: {
        trigger: imagesContent2,
        start: "-20px center", // [trigger] [scroller] positions
        end: "bottom center", // [trigger] [scroller] positions
        // or relative amount: "+=500"
        scrub: 1, // or time (in seconds) to catch up
        markers: false, // only during development!
      },
    });


    const images = GSAP.utils.toArray('.imageloop');
    
      document.body.style.overflow = 'auto';
      document.scrollingElement.scrollTo(0, 0);

     var colors = [
      "#fef9f3",
      "#fef9f3",
      "#fef9f3",
      "#fef9f3",
      "#fef9f3",
      "#fef9f3",
      "#fef9f3",
      "#fef9f3",
    ];

     GSAP.set(".demo-gallery", {
      backgroundColor: (i) => colors[i % colors.length],
      x: (i) => i * 400,
    })

      GSAP.utils.toArray('section').forEach((section, index) => {
        const w = document.querySelector('.wrapper') as HTMLInputElement;
        //const w: HTMLElement = document.querySelector('.wrapper');
        const [x, xEnd] = index % 2 ? ['100%', (w.scrollWidth - w.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
        GSAP.fromTo(w, { x }, {
          x: xEnd,
          scrollTrigger: {
            trigger: w,
            scrub: 0.5  } 
          });
      });
    //};

    //imagesLoaded(images).on('always', showDemo);

  }, []);
  return (
    <div className="wrapper__content">
      <Preloader />
      <Head>
        <title>{page.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation></Navigation>
      <div className="preloader__about"></div>
      <div className="main__content">
        <div className="container">
          <h2 className="about__title headline__01">
            {page.home.content[0].title}
          </h2>
          <p className="about__secondTitle secondHeadline_01">
            {page.home.content[0].label}{" "}
          </p>
          <div className="home__content__media imagem__01">
            <Image
              unoptimized
              alt=""
              src={page.home.content[0].image.sourceUrl}
              layout="fill"
              className={"image"}
            />
          </div>
          <p className="about__secondTitle text__animation">
            {page.home.content[1].label}
          </p>
          <h2 className="about__title text__animation">
            {page.home.content[1].title}
          </h2>
          <div className="demo-wrapper">
          <section className='demo-gallery'>
            <ul className='wrapper row1'>
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
              </li>              <li>
                <Image 
                  unoptimized
                  alt=""
                  src={page.home.galery[4].sourceUrl} 
                  width={800}
                  height={400}
                  className={'image'} 
                />
              </li>
            </ul>
          </section>


          </div>

          <p className="about__secondTitle text__animation">
            {page.home.content[2].label}
          </p>
          <h2 className="about__title text__animation">
            {page.home.content[2].title}
          </h2>
          <div className="home__content__media imagem__secund">
            <Image
              unoptimized
              alt=""
              src={page.home.content[2].image.sourceUrl}
              layout="fill"
              className={"image"}
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
