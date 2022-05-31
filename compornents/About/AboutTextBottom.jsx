import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function AboutTextBottom(props) {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const AboutBottomText = ".about__bottombox_text";
    gsap.set(AboutBottomText, {
      x: 100,
      opacity: 0,
    });
    gsap.to(AboutBottomText, {
      x: 0,
      opacity: 1,
      delay: 0.8,
      scrollTrigger: {
        trigger: AboutBottomText,
        start: "top bottom",
      },
    });
  });
  return <p className="about__bottombox_text">{props.left}</p>;
}
