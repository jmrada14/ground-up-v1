import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ground up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <Link href="/">
            <a>Ground Up</a>
          </Link>
        </h1>
        <h2>About Us Coming Soon...</h2>
        <div className={styles.grid}></div>
      </main>

      <footer className={styles.footer}>Fuck Copyright</footer>
    </div>
  );
}
