import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function AboutTextSkill(props) {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const AboutSkill = ".about__bottombox_skill";
    gsap.set(AboutSkill, {
      x: 100,
      opacity: 0,
    });
    gsap.to(AboutSkill, {
      x: 0,
      opacity: 1,
      delay: 1.2,
      scrollTrigger: {
        trigger: AboutSkill,
        start: "top bottom",
      },
    });
  });
  return (
    <div className="about__bottombox_skill">
      <h3 className="about__bottombox_heading">{props.skill}</h3>
      <p className="about__bottombox_detail">{props.skilldetail}</p>
      <h3 className="about__bottombox_heading">{props.tool}</h3>
      <p className="about__bottombox_detail">{props.tooldetail}</p>
    </div>
  );
}
