import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";

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

        <h2>We can improve, so let's do it from the ground up!</h2>

        <div className={styles.grid}>
          <Card
            header={<h3>United States House of Representatives &rarr;</h3>}
            description={
              <p>
                Find Representatives, learn about the one's affecting your
                community, and take action
              </p>
            }
            route="/house"
          />
          <Card
            header={
              <h3>
                United States <br />
                Senate &rarr;
              </h3>
            }
            description={
              <p>
                Find Senators, learn about the one's affecting your state, and
                take action
              </p>
            }
            route="/senate"
          />
          <Card
            header={
              <h3>
                API(<code className={styles.code}>BETA</code>) &rarr;
              </h3>
            }
            description={
              <p>
                Retrieve data from the House of Representatives, and the Senate
              </p>
            }
            route="/apiDocs"
          />
          <Card
            header={<h3>About us &rarr;</h3>}
            description={
              <p>We can improve, so let's do it from the ground up!</p>
            }
            route="/apiDocs"
          />
        </div>
      </main>

      <footer className={styles.footer}>Fuck Copyright</footer>
    </div>
  );
}
