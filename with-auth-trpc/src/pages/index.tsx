import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery([
    "example.hello",
    { text: "from tRPC" },
  ]);

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>
          Create <span>T3</span> App
        </h1>

        <div>
          <h3>This Stack uses:-</h3>
          <ul>
            <li>
              <a href="https://nextjs.org" target="_blank">
                Next.js
              </a>
            </li>
            <li>
              <a href="https://trpc.io" target="_blank">
                tRPC
              </a>
            </li>
            <li>
              <a href="https://typescriptlang.org" target="_blank">
                TypeScript
              </a>
            </li>
          </ul>

          <div>{data ? <p>{data.greeting}</p> : <p>Loading..</p>}</div>
        </div>
      </div>
    </>
  );
};

export default Home;
