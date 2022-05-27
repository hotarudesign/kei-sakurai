import gsap from "gsap/dist/gsap";
import { useEffect } from "react";

export default function Opening({}) {
  useEffect(() => {
    const loaderBg = ".loader-bg";
    const loaderTitle = ".loader-bg-title";
    const loaderText = ".loader-bg-text";
    const loaderLine = ".loader-bg-line";
    gsap.set(loaderBg, {
      opacity: 1,
    });
    gsap.set(loaderTitle, {
      opacity: 0,
      x: -100,
    });
    gsap.set(loaderText, {
      opacity: 0,
      x: 100,
    });
    gsap.set(loaderLine, {
      opacity: 0,
    });
    const tl = gsap.timeline();
    tl.to(loaderTitle, {
      opacity: 1,
      x: 0,
      duration: 0.4,
      ease: "elastic.out(1, 0.1)",
    })
      .to(loaderText, {
        opacity: 1,
        x: 0,
        duration: 0.4,
        ease: "elastic.out(1, 0.1)",
      })
      .to(loaderLine, {
        opacity: 1,
        scaleX: 2,
        duration: 0.4,
      })
      .to([loaderTitle, loaderText, loaderLine], {
        opacity: 0,
        duration: 0.2,
        delay: 0.2,
        display: "none",
      })
      .to(loaderBg, {
        // delay: 0.2,
        duration: 0.4,
        opacity: 0,
        display: "none",
      });
  }, []);
  return (
    <div className="loader-bg">
      <div className="loader-bg-wrapper">
        <h1 className="loader-bg-title">Kei Sakurai</h1>
        <hr className="loader-bg-line" />
        <p className="loader-bg-text">Portfolio</p>
      </div>
    </div>
  );
}
