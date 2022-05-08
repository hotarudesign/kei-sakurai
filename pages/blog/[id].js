import { client } from "../../libs/client";

export default function BolgId({ works }) {
  return (
    <main>
      <h1>{works.title}</h1>
      <p></p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${works.body}`,
        }}
      />
    </main>
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
