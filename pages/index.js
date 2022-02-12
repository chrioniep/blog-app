import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import PostCard from "../components/Post";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="p-5">
      <Header />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 py-10">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </section>
    </div>
  );
}
