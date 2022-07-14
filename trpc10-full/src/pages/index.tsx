import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import React from "react";

const Home: NextPage = () => {
  const hello = trpc.proxy.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center w-screen min-h-screen p-4 overflow-y-scroll">
        <h2 className="text-[3rem] lg:text-[5rem] md:text-[5rem] font-extrabold text-gray-700">
          Create <span className="text-purple-300">T3</span> App
        </h2>
        <p className="text-2xl text-gray-700">This stack uses</p>
        <div className="grid items-center justify-center w-full grid-cols-1 grid-rows-3 gap-3 pt-3 mt-3 lg:grid-rows-2 md:grid-rows-2 lg:grid-cols-2 md:grid-cols-2 lg:w-2/3 md:w-full">
          <Technology
            name={"NextJS"}
            description={"The React framework for production"}
            documentation={"https://nextjs.org/"}
          />
          <Technology
            name={"TypeScript"}
            description={
              "Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale"
            }
            documentation={"https://www.typescriptlang.org/"}
          />
          <Technology
            name={"TailwindCSS"}
            description={
              "Rapidly build modern websites without ever leaving your HTML"
            }
            documentation={"https://tailwindcss.com/"}
          />
          <Technology
            name={"tRPC"}
            description={"End-to-end typesafe APIs made easy"}
            documentation={"https://trpc.io/"}
          />
        </div>
        <div className="flex items-center justify-center w-full pt-6 text-2xl text-blue-500">
          {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
        </div>
      </div>
    </>
  );
};

// Technology component
interface TechnologyProps {
  name: string;
  description: string;
  documentation: string;
}

const Technology: React.FC<TechnologyProps> = (props) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full p-6 text-center duration-500 border-2 border-gray-500 rounded shadow-xl cursor-pointer hover:scale-105">
        <h2 className="text-lg text-gray-700">{props.name}</h2>
        <p className="text-sm text-gray-600">{props.description}</p>
        <a
          className="mt-3 text-sm underline cursor-pointer text-violet-500 decoration-dotted underline-offset-2"
          href={props.documentation}
          target="_blank"
          rel="noreferrer"
        >
          Documentation
        </a>
      </div>
    </>
  );
};

export default Home;