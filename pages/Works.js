import { client } from "../libs/client";
import Link from "next/link";
import Layout from "../compornents/layout";

export default function Works({ works }) {
  return (
    <Layout>
      <main>
        <ul>
          {works.map((works) => (
            <li key={works.id}>
              <Link href={`/blog/${works.id}`}>
                <a>{works.title}</a>
              </Link>
            </li>
          ))}
        </ul>
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
