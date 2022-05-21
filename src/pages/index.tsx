import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="h-screen home flex justify-center items-center flex-col relative">
      <div className="flex justify-center items-center flex-col text-center">
        <div className="bg-slate-600/30 p-4">
          <h1 className="text-8xl text-yellowTexT my-5">Marry Fantasy</h1>
          <h2 className="text-3xl">Comece a sua História!</h2>
        </div>
        <Link href="/marryHistory">
          <button className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-3xl bg-Dialog w-80 p-2 rounded-3xl 	">
            Começar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
