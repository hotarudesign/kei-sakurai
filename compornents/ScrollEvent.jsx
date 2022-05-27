import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function ScrollEvent() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let Sections = gsap.utils.toArray("section");
    let ScrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#PageWrap",
        pin: true,
        start: "0% 0%",
        ent:
          "+=" +
          (document.querySelector("#PageWrap").scrollWidth - window.innerWidth),
        scrub: 0,
        snap: {
          snapTo: 1 / (Sections.length - 1),
          duration: { min: 0.22, max: 0.31 },
          delay: 0,
          ease: "sine.inOut",
        },
      },
    });
    ScrollTL.to(Sections, {
      xPercent: -100 * (Sections.length - 1),
      ease: "none",
    });
  }, []);
  return (
    <div id="PageWrap">
      <section id="page">
        <Image src="/images/top_1.jpg" width={800} height={450} />
      </section>
      <section id="page">
        <Image src="/images/hotarudesign_mv.jpg" width={800} height={450} />
      </section>
      <section id="page">
        <Image src="/images/baccarat_mv.jpg" width={800} height={450} />
      </section>
    </div>
  );
}
