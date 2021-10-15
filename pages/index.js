import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link' 

import { getAllfilesMetadata } from "../lib/mdx";

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jose Luis Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>This is myblog, currently under construction</h1>
        <div className={styles.grid}>
        {posts.map(post => (
            <Link 
            key ={post.slug}
            href={`/${post.slug}`}>
              <a className={styles.card}>
                <h2>{post.tittle}</h2>
                <p>{post.date}</p>
                <p>{post.description}</p>
              </a>
            </Link>
        ))}

        </div>
      </main>

      <footer className={styles.footer}>
          By José Luis López
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllfilesMetadata();
  return {
    props: {posts},
  };
}
