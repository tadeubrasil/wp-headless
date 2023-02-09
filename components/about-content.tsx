import Link from 'next/link'

export default function AboutContent({ page }) {
  return (

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
  )
}
