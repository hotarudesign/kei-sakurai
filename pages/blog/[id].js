import { client } from "../../libs/client";
import Layout from "../../compornents/layout";
import Link from "next/link";
import { motion } from "framer-motion";

const slideItemRight = {
  offscreen: {
    x: 50,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
    },
  },
  onscreenlate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
      delay: 0.5,
    },
  },
};

const slideItemLeft = {
  offscreen: {
    x: -50,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
    },
  },
  onscreenlate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
      delay: 0.5,
    },
  },
};

const upItem = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1,
    },
  },
};

export default function BlogId({ works, prev, next }) {
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
                <motion.div
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={slideItemLeft}
                >
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
                </motion.div>
              </div>
              <div className="post__imgwrap">
                <motion.div
                  initial="offscreen"
                  whileInView="onscreenlate"
                  viewport={{ once: true, amount: 0.8 }}
                  variants={slideItemRight}
                >
                  <img src={works.top_image.url} />
                </motion.div>
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
              <motion.div
                initial="offscreen"
                whileInView="onscreenlate"
                viewport={{ once: true, amount: 0.8 }}
                variants={slideItemLeft}
              >
                <div className="post__sec_ttlcontainer">
                  <p className="num">01</p>
                  <h3 className="post__sec_ttl">ご依頼の背景</h3>
                </div>
              </motion.div>
              <div className="post__sec01_detailarea">
                <div className="post__sec01_detailarea-text">
                  <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={upItem}
                  >
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
                  </motion.div>
                </div>
                <div className="post__detailarea-imgwrap">
                  <motion.div
                    initial="offscreen"
                    whileInView="onscreenlate"
                    viewport={{ once: true, amount: 0.6 }}
                    variants={slideItemRight}
                  >
                    <img src={works.image_screen.url} />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="post__sec">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={slideItemLeft}
              >
                <div className="post__sec_ttlcontainer">
                  <p className="num">02</p>
                  <h3 className="post__sec_ttl">
                    制作で苦労した点、工夫した点
                  </h3>
                </div>
              </motion.div>
              <div className="post__sec02_detailarea">
                <div className="post__sec02_detailarea-text">
                  <motion.div
                    initial="offscreen"
                    whileInView="onscreenlate"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={slideItemRight}
                  >
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
                  </motion.div>
                </div>
                <div className="post__detailarea-imgwrap">
                  <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.6 }}
                    variants={slideItemLeft}
                  >
                    <img src={works.image_item.url} />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="post__sec-sp">
              <motion.div
                className="sp-image"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.1 }}
                variants={upItem}
              >
                <img src={works.sp_1.url} />
              </motion.div>
              <motion.div
                className="sp-image"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.4 }}
                variants={upItem}
              >
                <img src={works.sp_2.url} />
              </motion.div>
              <motion.div
                className="sp-image"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.7 }}
                variants={upItem}
              >
                <img src={works.sp_3.url} />
              </motion.div>
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
  // console.log(data);
  // console.log(worksData);
  // console.log(data);
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
