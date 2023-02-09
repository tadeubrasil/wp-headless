import Head from 'next/head'

import { getAllPagesWithSlugs, getPageByAbout } from '../lib/api';
import Navigation from '../components/navigation'

function about(page) {
  console.log(page);
  return (
    <div>
      <Head>
        <title>{page.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='content' id="content" data-template="about">
        <div className="about" data-background="#b2b8c3" data-color="#37384c">
          <div className="about__wrapper">
            <h2 className="about__title" data-animation="title">{page.about.title}</h2>

            <section className="about__content about__content--left">
              <div className="about__content__wrapper">
                <div className="about__content__box">
                  <p className="about__content__label" data-animation="label">{page.about.content[0].label}</p>
                  <div className="about__content__description">
                   {page.about.content[0].text}
                  </div>
                </div>
                <figure className="about__content__media">
                  <img className="about__content__media__image loaded" data-src="https://images.prismic.io/sgm-animation/21f07381-102a-4a21-9551-ba8910f3043c_about-us.png?auto=compress,format" src="https://images.prismic.io/sgm-animation/21f07381-102a-4a21-9551-ba8910f3043c_about-us.png?auto=compress,format" />
                </figure>
              </div>
            </section>

            <section className="about__highlight">
                  <div className="about__highlight__wrapper">
                    <h3 className="about__highlight__title" data-animation="highlight">{page.about.highlight[0].title}</h3>
                    <figure className="about__highlight__media">
                      <img className="about__highlight__media__image loaded" data-src="https://images.prismic.io/sgm-animation/1fd44153-8c3b-498a-81fe-2c91861d1460_Copia+di+Copia+di+_FE12594.png?auto=compress,format" src="https://images.prismic.io/sgm-animation/1fd44153-8c3b-498a-81fe-2c91861d1460_Copia+di+Copia+di+_FE12594.png?auto=compress,format" />
                    </figure>
                    <figure className="about__highlight__media">
                    <img className="about__highlight__media__image loaded" data-src="https://images.prismic.io/sgm-animation/76780929-4235-4854-a039-f35a403df1e1_Copia+di+Untitled-+Pink+Roots.png?auto=compress,format" src="https://images.prismic.io/sgm-animation/76780929-4235-4854-a039-f35a403df1e1_Copia+di+Untitled-+Pink+Roots.png?auto=compress,format" />
                    </figure>
                  </div>
            </section>


            <section className="about__content about__content--left">
              <div className="about__content__wrapper">
                <div className="about__content__box">
                  <p className="about__content__label" data-animation="label">{page.about.content[1].label}</p>
                  <div className="about__content__description">
                   {page.about.content[1].text}
                  </div>
                </div>
                <figure className="about__content__media">
                  <img className="about__content__media__image loaded" data-src="https://images.prismic.io/sgm-animation/21f07381-102a-4a21-9551-ba8910f3043c_about-us.png?auto=compress,format" src="https://images.prismic.io/sgm-animation/21f07381-102a-4a21-9551-ba8910f3043c_about-us.png?auto=compress,format" />
                </figure>
              </div>
            </section>
            <h2 className="about__title" data-animation="title">{page.about.secondTitle}</h2>
            <section className="about__content about__content--right">
              <div className="about__content__wrapper">
                <div className="about__content__box">
                  <p className="about__content__label" data-animation="label">{page.about.content[2].label}</p>
                  <div className="about__content__description">
                   {page.about.content[2].text}
                  </div>
                </div>
                <figure className="about__content__media">
                  <img className="about__content__media__image loaded" data-src="https://images.prismic.io/sgm-animation/21f07381-102a-4a21-9551-ba8910f3043c_about-us.png?auto=compress,format" src="https://images.prismic.io/sgm-animation/21f07381-102a-4a21-9551-ba8910f3043c_about-us.png?auto=compress,format" />
                </figure>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default about


export async function getStaticProps({ params }) {
  const page = await getPageByAbout();
  return { props: page };
}