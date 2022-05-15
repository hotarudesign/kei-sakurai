import Image from "next/image";
import { useEffect, useRef } from "react";

export default function ScrollEvent() {
  const screenRef = useRef(null);
  useEffect(() => {
    screenRef.current!.onwheel = (ev) => {
      ev.preventDefault();
      let delta = (ev.deltaY / Math.abs(ev.deltaY)) * window.innerWidth;
      if (delta > 0) {
        delta += screenRef.current!.scrollLeft;
        delta = Math.floor(delta / window.innerWidth) * window.innerWidth;
      } else {
        delta += screenRef.current!.scrollLeft;
        delta = Math.ceil(delta / window.innerWidth) * window.innerWidth;
      }
      screenRef.current!.scrollLeft = delta;
    };
  });
  return (
    <div ref={screenRef} className="screen">
      <div className="slidecontainer">
        <div className="page">
          <Image src="/images/top_1.jpg" width={800} height={450} />
        </div>
        <div className="page">
          <Image src="/images/top_1.jpg" width={800} height={450} />
        </div>
        <div className="page">
          <Image src="/images/top_1.jpg" width={800} height={450} />
        </div>
      </div>
    </div>
  );
}
