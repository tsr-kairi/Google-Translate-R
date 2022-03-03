import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Translate from "../components/Translate";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-auto">
      <Head>
        <title>translate-app</title>
      </Head>
      <Header />
      <div className="flex">
        <Sidebar />
        <Translate />
      </div>
    </div>
  );
}
