import { client } from "../../libs/client";
import Layout from "../../compornents/layout";
import Link from "next/link";
import { Pagination } from "../../compornents/Pagenation";

export default function BlogId({ works, totalCount }) {
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
          {/* <Pagination totalCount={totalCount} /> */}
        </div>
      </main>
    </Layout>
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
  const id = context.params.id;
  const data = await client.get({ endpoint: "works", contentId: id });

  return {
    props: {
      works: data,
    },
  };
};

// import { client } from "../../libs/client";
// import Layout from "../../compornents/layout";
// import Link from "next/link";
// import { Pagination } from "../../compornents/Pagenation";

// export default function worksPageId({ works, totalCount }) {
//   return (
//     <div>
//       <ul>
//         {works.map((works) => (
//           <li key={works.id}>
//             <Link href={`/blog/${works.id}`}>
//               <a>{works.title}</a>
//             </Link>
//           </li>
//         ))}
//       </ul>
//       <Pagination totalCount={totalCount} />
//     </div>
//   );
// }

// // 動的なページを作成
// // 動的なページを作成
// export const getStaticPaths = async () => {
//   const repos = await client.get({ endpoint: "works" });

//   const pageNumbers = [];
//   const PER_PAGE = 3;
//   const range = (start, end) =>
//     [...Array(end - start + 1)].map((_, i) => start + i);

//   const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map(
//     (repo) => `/blog/page/${repo}`
//   );

//   return { paths, fallback: false };
// };

// // データを取得
// export const getStaticProps = async (context) => {
//   const id = context.params.id;

//   const data = await client.get({
//     endpoint: "works",
//     queries: { offset: (id - 1) * 3, limit: 3 },
//   });

//   return {
//     props: {
//       works: data.contents,
//       totalCount: data.totalCount,
//     },
//   };
// };
