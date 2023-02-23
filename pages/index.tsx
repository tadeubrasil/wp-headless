import { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";

import Navigation from "../components/navigation";
import Preloader from "../components/preloader";
import GSAP from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
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

    //imagesLoaded(images).on('always', showDemo);
    /* new effects */
    // create an infinite loop
    let loop = horizontalLoop(".cards li", { repeat: -1 });
    // create a tween that'll always decelerate the timeScale of the timeline back to 0 over the course of 0.5 seconds (or whatever)
    let slow = GSAP.to(loop, { timeScale: 0, duration: 0.5 });
    // make the loop stopped initially.
    loop.timeScale(0);

    // now use an Observer to listen to pointer/touch/wheel events and set the timeScale of the infinite looping timeline accordingly.
    Observer.create({
      target: ".cards",
      type: "pointer,touch,wheel",
      wheelSpeed: -1,
      onChange: (self) => {
        loop.timeScale(
          Math.abs(self.deltaX) > Math.abs(self.deltaY)
            ? -self.deltaX
            : -self.deltaY,
        ); // whichever direction is bigger
        slow.invalidate().restart(); // now decelerate
      },
    });

    /*
This helper function makes a group of elements animate along the x-axis in a seamless, responsive loop.

Features:
 - Uses xPercent so that even if the widths change (like if the window gets resized), it should still work in most cases.
 - When each item animates to the left or right enough, it will loop back to the other side
 - Optionally pass in a config object with values like "speed" (default: 1, which travels at roughly 100 pixels per second), paused (boolean),  repeat, reversed, and paddingRight.
 - The returned timeline will have the following methods added to it:
   - next() - animates to the next element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
   - previous() - animates to the previous element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
   - toIndex() - pass in a zero-based index value of the element that it should animate to, and optionally pass in a vars object to control duration, easing, etc. Always goes in the shortest direction
   - current() - returns the current index (if an animation is in-progress, it reflects the final index)
   - times - an Array of the times on the timeline where each element hits the "starting" spot. There's also a label added accordingly, so "label1" is when the 2nd element reaches the start.
 */
    function horizontalLoop(items, config) {
      items = GSAP.utils.toArray(items);
      config = config || {};
      let tl = GSAP.timeline({
          repeat: config.repeat,
          paused: config.paused,
          defaults: { ease: "none" },
          onReverseComplete: () =>
            tl.totalTime(tl.rawTime() + tl.duration() * 100),
        }),
        length = items.length,
        startX = items[0].offsetLeft,
        times = [],
        widths = [],
        xPercents = [],
        curIndex = 0,
        pixelsPerSecond = (config.speed || 1) * 100,
        snap =
          config.snap === false ? (v) => v : GSAP.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
        totalWidth,
        curX,
        distanceToStart,
        distanceToLoop,
        item,
        i;
      GSAP.set(items, {
        // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
        xPercent: (i, el) => {
          let w = (widths[i] = parseFloat(GSAP.getProperty(el, "width", "px")));
          xPercents[i] = snap(
            (parseFloat(GSAP.getProperty(el, "x", "px")) / w) * 100 + GSAP.getProperty(el, "xPercent"),);
          return xPercents[i];
        },
      });
      GSAP.set(items, { x: 0 });
      totalWidth =
        items[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        items[length - 1].offsetWidth *
          GSAP.getProperty(items[length - 1], "scaleX") +
        (parseFloat(config.paddingRight) || 0);
      for (i = 0; i < length; i++) {
        item = items[i];
        curX = (xPercents[i] / 100) * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop =
          distanceToStart + widths[i] * GSAP.getProperty(item, "scaleX");
        tl.to(
          item,
          {
            xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
            duration: distanceToLoop / pixelsPerSecond,
          },
          0,
        )
          .fromTo(
            item,
            {
              xPercent: snap(
                ((curX - distanceToLoop + totalWidth) / widths[i]) * 100,
              ),
            },
            {
              xPercent: xPercents[i],
              duration:
                (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
              immediateRender: false,
            },
            distanceToLoop / pixelsPerSecond,
          )
          .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
      }
      function toIndex(index, vars) {
        vars = vars || {};
        Math.abs(index - curIndex) > length / 2 &&
          (index += index > curIndex ? -length : length); // always go in the shortest direction
        let newIndex = GSAP.utils.wrap(0, length, index),
          time = times[newIndex];
        if (time > tl.time() !== index > curIndex) {
          // if we're wrapping the timeline's playhead, make the proper adjustments
          vars.modifiers = { time: GSAP.utils.wrap(0, tl.duration()) };
          time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
      }
      tl.next = (vars) => toIndex(curIndex + 1, vars);
      tl.previous = (vars) => toIndex(curIndex - 1, vars);
      tl.current = () => curIndex;
      tl.toIndex = (index, vars) => toIndex(index, vars);
      tl.times = times;
      tl.progress(1, true).progress(0, true); // pre-render for performance
      if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
      }
      return tl;
    }
  }, []);
  return (
    <div className="wrapper__content">
      <Head>
        <title>{page.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation></Navigation>
      <Preloader />
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
          <div className="wrapper__gallery">
            <div className="gallery">
              <ul className="cards">
                <li>
                  <Image
                    unoptimized
                    alt=""
                    src={page.home.galery[0].sourceUrl}
                    width={800}
                    height={400}
                    className={"image"}
                  />
                </li>
                <li>
                  <Image
                    unoptimized
                    alt=""
                    src={page.home.galery[1].sourceUrl}
                    width={800}
                    height={400}
                    className={"image"}
                  />
                </li>
                <li>
                  <Image
                    unoptimized
                    alt=""
                    src={page.home.galery[2].sourceUrl}
                    width={800}
                    height={400}
                    className={"image"}
                  />
                </li>
                <li>
                  <Image
                    unoptimized
                    alt=""
                    src={page.home.galery[3].sourceUrl}
                    width={800}
                    height={400}
                    className={"image"}
                  />
                </li>
                <li>
                  <Image
                    unoptimized
                    alt=""
                    src={page.home.galery[4].sourceUrl}
                    width={800}
                    height={400}
                    className={"image"}
                  />
                </li>
                <li>
                  <Image
                    unoptimized
                    alt=""
                    src={page.home.galery[5].sourceUrl}
                    width={800}
                    height={400}
                    className={"image"}
                  />
                </li>
                <li>
                  <Image
                    unoptimized
                    alt=""
                    src={page.home.galery[6].sourceUrl}
                    width={800}
                    height={400}
                    className={"image"}
                  />
                </li>
              </ul>
            </div>
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
