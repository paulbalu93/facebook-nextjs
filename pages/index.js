import { getSession } from "next-auth/client";
import Head from "next/head";
import Feed from "../components/Feed.js";
import Header from "../components/Header.js";
import Login from "../components/Login.js";
import SideBar from "../components/SideBar.js";

export default function Home({ session }) {
  if (!session) return <Login />;

  return (
    <div className="">
      <Head>
        <title> Facebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      <main className="flex">
        {/* SideBar */}
        <SideBar />
        {/* Feed */}
        <Feed />
        {/* widgets */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}
