import { client } from "../libs/client";
import Link from "next/link";
import Layout from "../compornents/layout";
import { GetStaticProps } from "next";
import Image from "next/image";
import WorksTitle from "../compornents/Works/WorksTitle";
import WorksDetail from "../compornents/Works/WorksDetail";

export default function Works({ works }) {
  return (
    <Layout works>
      <main className="works">
        <div className="works__inner">
          <ul className="works__container">
            {works.map((works) => (
              <li className="works__container_item" key={works.id}>
                <Link href={`/blog/${works.id}`}>
                  <div className="works__archive">
                    <a
                      className="works__archive_ttl"
                      dangerouslySetInnerHTML={{
                        __html: `${works.title}`,
                      }}
                    ></a>
                    <div className="works__archive_imgwrap">
                      <img src={works.top_image.url} />
                    </div>
                    <div
                      className="works__archive_text"
                      dangerouslySetInnerHTML={{
                        __html: `${works.body}`,
                      }}
                    />
                  </div>
                </Link>
              </li>
            ))}
            <li className="works__container_item">
              <WorksTitle title={`サムネイル制作`} />
              <div className="works__archive_imgwrap">
                <Image
                  src="/images/thumbnail_1.png"
                  width={1280}
                  height={720}
                />
              </div>
              <WorksDetail
                content={`物販コミュニティを主宰されている方の対談動画とサムネイルを制作させていただきました。`}
              />
            </li>
            <li className="works__container_item">
              <WorksTitle title={`サムネイル制作`} />
              <div className="works__archive_imgwrap">
                <Image
                  src="/images/thumbnail_2.png"
                  width={1280}
                  height={720}
                />
              </div>
              <WorksDetail
                content={`物販コミュニティを主宰されている方の対談動画とサムネイルを制作させていただきました。`}
              />
            </li>
            <li className="works__container_item">
              <WorksTitle title={`サムネイル制作`} />
              <div className="works__archive_imgwrap">
                <Image
                  src="/images/thumbnail_3.png"
                  width={1280}
                  height={720}
                />
              </div>
              <WorksDetail
                content={`物販コミュニティを主宰されている方の対談動画とサムネイルを制作させていただきました。`}
              />
            </li>
          </ul>
        </div>
      </main>
    </Layout>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "works" });

  return {
    props: {
      works: data.contents,
    },
  };
};
