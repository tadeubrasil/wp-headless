import { useEffect, useRef } from "react";
import GSAP from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import each from "lodash/each";

import Head from "next/head";
import Image from "next/image";

import { getPageByAbout } from "../lib/api";
import Navigation from "../components/navigation";

const myLoader = ({ src, width, quality }) => {
  return `http://headless-wp.local/wp-content/uploads/2023/02/${src}?w=${width}&q=${
    quality || 75
  }.png`;
};

function about(page) {
  console.log(page);
  let el = useRef();

  useEffect(() => {
    GSAP.registerPlugin(SplitText);
    GSAP.registerPlugin(ScrollTrigger);

    var animation = GSAP.timeline({ delay: 1 });

    //  chars = mySplitText.lines; //an array of all the divs that wrap each character

    var aboutTitles = document.querySelectorAll(".about__title");
    // Criar a animação para cada título
    aboutTitles.forEach(function (title) {
      animation.to(title, {
        y: -30,
        opacity: 0,
        scrollTrigger: {
          trigger: title,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          markers: true,
        },
      });
    });

    // Selecionar o título, o parágrafo e a imagem dentro da seção
    var labels = document.querySelectorAll(".about__content__label");
    var paragraphs = document.querySelectorAll(".about__content__description");
    var imagesContent = document.querySelectorAll(
      ".about__content__media__image",
    );

    // Criar a animação para o título, o parágrafo e a imagem
    labels.forEach(function (label) {
      animation.to(label, {
        y: -50,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: label,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          markers: true,
        },
      });
    });

    paragraphs.forEach(function (paragraph) {
      animation.to(paragraph, {
        y: 50,
        opacity: 0,
        scrollTrigger: {
          trigger: paragraph,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          markers: true,
        },
      });
    });

    imagesContent.forEach(function (image) {
      animation.from(image, {
        opacity: 0,
        x: 100,
        duration: 1,
        scrollTrigger: {
          trigger: image,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          markers: true,
        },
      });
    });

    //HIGHLIGHT

    // Selecionar o título, o parágrafo e a imagem dentro da seção
    var highlightTitle = document.querySelectorAll(".about__highlight__title");

    animation.to(highlightTitle, {
      autoAlpha: 1,
      scale: 1.2,
      scrollTrigger: {
        trigger: highlightTitle,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        markers: true,
      },
    });

    var highlightImgLeft = document.querySelectorAll(".highlight_image_left");

    animation.from(highlightImgLeft, {
      opacity: 0,
      x: -100,
      duration: 1,
      scrollTrigger: {
        trigger: highlightImgLeft,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        markers: true,
      },
    });

    var highlightImgRigth = document.querySelectorAll(".highlight_image_right");
    animation.from(highlightImgRigth, {
      opacity: 0,
      x: 100,
      duration: 1,
      scrollTrigger: {
        trigger: highlightImgRigth,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        markers: true,
      },
    });
  }, []);

  return (
    <div className="container">
      <Navigation></Navigation>
      <Head>
        <title>{page.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="content" id="content" data-template="about">
        <div className="about" data-background="#b2b8c3" data-color="#37384c">
          <div className="about__wrapper">
            <h2 className="about__title" data-animation="title">
              {page.about.title}
            </h2>

            <section className="about__content about__content--left">
              <div className="about__content__wrapper">
                <div className="about__content__box">
                  <p className="about__content__label" data-animation="label">
                    {page.about.content[0].label}
                  </p>
                  <div
                    className="about__content__description"
                    dangerouslySetInnerHTML={{
                      __html: page.about.content[0].text,
                    }}
                  />
                </div>
                <figure className="about__content__media">
                  <Image
                    unoptimized
                    alt=""
                    src={page.about.content[0].imageContent.sourceUrl}
                    fill
                    className="about__content__media__image loaded"
                  />
                </figure>
              </div>
            </section>

            <section className="about__highlight">
              <div className="about__highlight__wrapper">
                <h3
                  className="about__highlight__title"
                  data-animation="highlight"
                >
                  {page.about.highlight[0].title}
                </h3>
                <figure className="about__highlight__media">
                  <Image
                    unoptimized
                    alt=""
                    src={page.about.highlight[0].imageLeft.uri}
                    fill
                    className="about__highlight__media__image highlight_image_left loaded"
                  />
                </figure>
                <figure className="about__highlight__media">
                  <Image
                    alt=""
                    src={page.about.highlight[0].imageRight.uri}
                    fill
                    className="about__highlight__media__image  highlight_image_right loaded"
                  />
                </figure>
              </div>
            </section>

            <section className="about__content about__content--left">
              <div className="about__content__wrapper">
                <div className="about__content__box">
                  <p className="about__content__label" data-animation="label">
                    {page.about.content[1].label}
                  </p>
                  <div
                    className="about__content__description"
                    dangerouslySetInnerHTML={{
                      __html: page.about.content[1].text,
                    }}
                  />
                </div>
                <figure className="about__content__media">
                  <Image
                    unoptimized
                    alt=""
                    src={page.about.content[1].imageContent.sourceUrl}
                    fill
                    className="about__content__media__image loaded"
                  />
                </figure>
              </div>
            </section>

            <h2 className="about__title test2" data-animation="title">
              {page.about.secondTitle}
            </h2>

            <section className="about__content about__content--right">
              <div className="about__content__wrapper">
                <div className="about__content__box">
                  <p className="about__content__label" data-animation="label">
                    {page.about.content[2].label}
                  </p>
                  <div
                    className="about__content__description"
                    dangerouslySetInnerHTML={{
                      __html: page.about.content[2].text,
                    }}
                  />
                </div>
                <figure className="about__content__media">
                  <Image
                    unoptimized
                    alt=""
                    src={page.about.content[2].imageContent.sourceUrl}
                    fill
                    className="about__content__media__image loaded"
                  />
                </figure>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;

export async function getStaticProps({ params }) {
  const page = await getPageByAbout();
  return { props: page };
}
