import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function AboutTextTop(props) {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const AboutTopText = ".about__topbox_text";
    gsap.set(AboutTopText, {
      x: 100,
      opacity: 0,
    });
    gsap.to(AboutTopText, {
      x: 0,
      opacity: 1,
      delay: 0.4,
      scrollTrigger: {
        trigger: AboutTopText,
        start: "center bottom",
      },
    });
  });
  return <p className="about__topbox_text">{props.top}</p>;
}
