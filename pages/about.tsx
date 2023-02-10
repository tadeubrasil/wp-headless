import Head from "next/head";
import Image from "next/image";

import { getPageByAbout } from "../lib/api";
import Navigation from "../components/navigation";

function about(page) {
  console.log(page);
  return (
    <div>
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
                  <div className="about__content__description" 
                  dangerouslySetInnerHTML={{ __html: page.about.content[0].text }}
                  />
                </div>
                <figure className="about__content__media">
                <Image
                    alt=""
                    src={page.about.content[0].imageContent.uri}
                    width={306}
                    height={502}
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
                    alt=""
                    src={page.about.highlight[0].imageLeft.uri}
                    fill
                    className="about__highlight__media__image loaded"
                  />
                </figure>
                <figure className="about__highlight__media">
                <Image
                    alt=""
                    src={page.about.highlight[0].imageRight.uri}
                    fill
                    className="about__highlight__media__image loaded"
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
                  <div className="about__content__description" 
                  dangerouslySetInnerHTML={{ __html: page.about.content[1].text }}
                  />
                </div>
                <figure className="about__content__media"></figure>
              </div>
            </section>

            <h2 className="about__title" data-animation="title">
              {page.about.secondTitle}
            </h2>

            <section className="about__content about__content--right">
              <div className="about__content__wrapper">
                <div className="about__content__box">
                  <p className="about__content__label" data-animation="label">
                    {page.about.content[2].label}
                  </p>
                  <div className="about__content__description" 
                  dangerouslySetInnerHTML={{ __html: page.about.content[2].text }}
                  />
                </div>
                <figure className="about__content__media">
                  <Image
                    alt=""
                    src={page.about.content[2].imageContent.uri}
                    layout="fill"
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
