import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function AboutImage() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const aboutImg = ".about-image";
    gsap.set(aboutImg, {
      opacity: 0,
      x: -100,
    });
    gsap.to(aboutImg, {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: aboutImg,
        start: "center center",
      },
    });
  });
  return (
    <Image
      className="about-image"
      src="/images/profile.jpg"
      width={600}
      height={400}
    />
  );
}
