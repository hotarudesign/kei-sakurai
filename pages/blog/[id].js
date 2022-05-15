import { client } from "../../libs/client";
import Layout from "../../compornents/layout";
import Link from "next/link";

export default function BlogId({ works }) {
  return (
    <Layout>
      <main className="post">
        <div className="post__inner">
          <div className="post__title-area">
            <Link href="https://takamurayuyalp1.takamura-yuya.mixh.jp/the_automation/">
              <a
                className="post__title-area_ttl"
                dangerouslySetInnerHTML={{
                  __html: `${works.title}`,
                }}
              ></a>
            </Link>
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
          <div className="post__sec">
            <div className="post__sec_ttlcontainer">
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
              <div className="post__detailarea-imgwrap">
                <img src={works.image_screen.url} />
              </div>
            </div>
          </div>
          <div className="post__sec">
            <div className="post__sec_ttlcontainer">
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
              <div className="post__detailarea-imgwrap">
                <img src={works.image_item.url} />
              </div>
            </div>
          </div>
          <div className="post__sec-sp">
            <img className="sp-image" src={works.sp_1.url} />
            <img className="sp-image" src={works.sp_2.url} />
            <img className="sp-image" src={works.sp_3.url} />
          </div>
        </div>
      </main>
    </Layout>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "works" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "works", contentId: id });

  return {
    props: {
      works: data,
    },
  };
};
