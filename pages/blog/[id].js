import { client } from "../../libs/client";
import Layout from "../../compornents/layout";
import Link from "next/link";
import { motion } from "framer-motion";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

export default function BlogId({ works, prev, next }) {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const postTitle = ".post__title-area";
    const postTopImg = ".post__imgwrap";
    const prevNext = ".prev-next";
    const sec01Title = ".post__sec01_ttlcontainer";
    const sec01Text = ".post__sec01_detailarea-text";
    const sec01Img = ".post__detailarea-imgwrap01";
    const sec02Title = ".post__sec02_ttlcontainer";
    const sec02Img = ".post__detailarea-imgwrap02";
    const sec02Text = ".post__sec02_detailarea-text";
    const spImage01 = ".sp-image01";
    const spImage02 = ".sp-image02";
    const spImage03 = ".sp-image03";
    gsap.set(
      [postTitle, prevNext, sec01Title, sec01Text, sec02Title, sec02Img],
      {
        opacity: 0,
        x: -100,
      }
    );
    gsap.set([postTopImg, sec01Img, sec02Text], {
      opacity: 0,
      x: 100,
    });
    gsap.set([spImage01, spImage02, spImage03], {
      opacity: 0,
      y: 100,
    });
    gsap.to(postTitle, {
      x: 0,
      opacity: 1,
      duration: 0.4,
      ScrollTrigger: {
        trigger: postTitle,
        start: "top center",
      },
    });
    gsap.to(postTopImg, {
      x: 0,
      opacity: 1,
      delay: 0.3,
      duration: 0.4,
      scrollTrigger: {
        trigger: postTitle,
        start: "top center",
      },
    });
    gsap.to(prevNext, {
      x: 0,
      opacity: 1,
      delay: 0.6,
      duration: 0.4,
      scrollTrigger: {
        trigger: postTitle,
        start: "top center",
      },
    });
    gsap.to(sec01Title, {
      x: 0,
      opacity: 1,
      delay: 0.4,
      duration: 0.4,
      scrollTrigger: {
        trigger: prevNext,
        start: "top center",
      },
    });
    gsap.to(sec01Text, {
      x: 0,
      opacity: 1,
      delay: 0.8,
      duration: 0.4,
      scrollTrigger: {
        trigger: sec01Title,
        start: "top center",
      },
    });
    gsap.to(sec01Img, {
      x: 0,
      opacity: 1,
      delay: 1.2,
      duration: 0.4,
      scrollTrigger: {
        trigger: sec01Title,
        start: "top center",
      },
    });
    gsap.to(sec02Title, {
      x: 0,
      opacity: 1,
      duration: 0.4,
      scrollTrigger: {
        trigger: sec01Img,
        start: "bottom center",
      },
    });
    gsap.to(sec02Img, {
      x: 0,
      opacity: 1,
      duration: 0.4,
      delay: 0.4,
      scrollTrigger: {
        trigger: sec02Title,
        start: "bottom center",
      },
    });
    gsap.to(sec02Text, {
      x: 0,
      opacity: 1,
      duration: 0.4,
      scrollTrigger: {
        trigger: sec02Title,
        start: "bottom center",
      },
    });
    gsap.to(spImage01, {
      y: 0,
      opacity: 1,
      duration: 0.4,
      scrollTrigger: {
        trigger: sec02Img,
        start: "bottom center",
      },
    });
    gsap.to(spImage02, {
      y: 0,
      opacity: 1,
      delay: 0.2,
      duration: 0.4,
      scrollTrigger: {
        trigger: sec02Img,
        start: "bottom center",
      },
    });
    gsap.to(spImage03, {
      y: 0,
      opacity: 1,
      delay: 0.4,
      duration: 0.4,
      scrollTrigger: {
        trigger: sec02Img,
        start: "bottom center",
      },
    });
  });
  return (
    <motion.div
      initial={{ opacity: 0 }} // 初期状態
      animate={{ opacity: 1 }} // マウント時
      exit={{ opacity: 0 }} // アンマウント時
    >
      <Layout>
        <main className="post">
          <div className="post__inner">
            <div className="post__top-area">
              <div className="post__title-area">
                <div
                  className="post__title-area_ttl"
                  dangerouslySetInnerHTML={{
                    __html: `${works.title}`,
                  }}
                />
                <div
                  className="post__title-area_desc"
                  dangerouslySetInnerHTML={{
                    __html: `${works.body}`,
                  }}
                />
              </div>
              <div className="post__imgwrap">
                <img src={works.top_image.url} />
              </div>
            </div>
            <div className="prev-next top">
              {prev && (
                <Link href={`/blog/${prev}`}>
                  <a className="prev-next-link prev">Prev</a>
                </Link>
              )}
              {next && (
                <Link href={`/blog/${next}`}>
                  <a className="prev-next-link next">Next</a>
                </Link>
              )}
            </div>
            <div className="post__sec">
              <div className="post__sec_ttlcontainer post__sec01_ttlcontainer">
                <p className="num">01</p>
                <h3 className="post__sec_ttl">ご依頼の背景</h3>
              </div>
              <div className="post__sec01_detailarea">
                <div className="post__sec01_detailarea-text">
                  <div
                    className="post__sec01_detailarea-desc"
                    dangerouslySetInnerHTML={{
                      __html: `${works.text_1}`,
                    }}
                  />
                  <div
                    className="post__sec01_detailarea-desc"
                    dangerouslySetInnerHTML={{
                      __html: `${works.text_2}`,
                    }}
                  />
                </div>
                <div className="post__detailarea-imgwrap post__detailarea-imgwrap01">
                  <img src={works.image_screen.url} />
                </div>
              </div>
            </div>
            <div className="post__sec">
              <div className="post__sec_ttlcontainer post__sec02_ttlcontainer">
                <p className="num">02</p>
                <h3 className="post__sec_ttl">制作で苦労した点、工夫した点</h3>
              </div>
              <div className="post__sec02_detailarea">
                <div className="post__sec02_detailarea-text">
                  <div
                    className="post__sec02_detailarea-desc"
                    dangerouslySetInnerHTML={{
                      __html: `${works.text_3}`,
                    }}
                  />
                  <div
                    className="post__sec02_detailarea-desc"
                    dangerouslySetInnerHTML={{
                      __html: `${works.text_4}`,
                    }}
                  />
                </div>
                <div className="post__detailarea-imgwrap post__detailarea-imgwrap02">
                  <img src={works.image_item.url} />
                </div>
              </div>
            </div>
            <div className="post__sec-sp">
              <div className="sp-image sp-image01">
                <img src={works.sp_1.url} />
              </div>
              <div className="sp-image sp-image02">
                <img src={works.sp_2.url} />
              </div>
              <div className="sp-image sp-image03">
                <img src={works.sp_3.url} />
              </div>
            </div>
            <div className="prev-next">
              {prev && (
                <Link href={`/blog/${prev}`}>
                  <a className="prev-next-link prev">Prev</a>
                </Link>
              )}
              {next && (
                <Link href={`/blog/${next}`}>
                  <a className="prev-next-link next">Next</a>
                </Link>
              )}
            </div>
          </div>
        </main>
      </Layout>
    </motion.div>
  );
}

// 静的生成のためのパスを指定
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "works" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述
export const getStaticProps = async (context) => {
  const worksData = await client.get({ endpoint: "works" });
  const id = context.params.id;
  const data = await client.get({
    endpoint: "works",
    contentId: id,
    querys: { limit: 3, fields: "id,title" },
  });
  const currentIndex = worksData.contents.findIndex((v) => v.id === id);
  const prev = worksData.contents[currentIndex - 1];
  const next = worksData.contents[currentIndex + 1];
  return {
    props: {
      works: data,
      prev: prev ? prev.id : null,
      next: next ? next.id : null,
    },
  };
};
