import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { fetchUrl, states } from "../util/utils";
import MemberCard from "../components/MemberCard";
import { connectToDatabase } from "../util/mongodb";
export default function Home({ isConnected }) {
  return (
    <div className={styles.container}>
      {isConnected ? (
        <h2 className="subtitle">You are connected to MongoDB</h2>
      ) : (
        <h2 className="subtitle">
          You are NOT connected to MongoDB. Check the <code>README.md</code> for
          instructions.
        </h2>
      )}
      <Head>
        <title>House Of Representatives</title>
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
        <div className={styles.grid}></div>
        <label htmlFor="state-filter">Filter By State</label>
        <select name="filter" id="filterSelect">
          <option value="All">All</option>
          {states.map((state, index) => (
            <option key={`option-${index}`} value={state}>
              {state}
            </option>
          ))}
        </select>
        <label htmlFor="state-filter">Filter By Party</label>
        <select name="filter" id="filterSelect">
          <option value="All">All</option>
          <option value="D">Democrat</option>
          <option value="D">Republican</option>
        </select>
        <div className={styles.grid}>
          {memberData?.map(({ name, party, role, state, twitter }, index) => {
            return (
              <>
                <MemberCard
                  key={`card-${index}`}
                  header={<h3>{name}</h3>}
                  description={
                    <ul key={`list-${index}`}>
                      <li key={`listState-${index}`}>State: {state}</li>
                      <li key={`listParty-${index}`}>Party: {party}</li>
                      <li key={`listRole-${index}`}>Role: {role}</li>
                      <li key={`listTwitter-${index}`}>
                        Twitter: {twitter}{" "}
                        <a
                          className="mention-button"
                          href="https://twitter.com/intent/tweet"
                        >
                          Tweet
                        </a>
                      </li>
                    </ul>
                  }
                />
              </>
            );
          })}
        </div>
      </main>
      <footer className={styles.footer}>Fuck Copyright</footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase();

  const isConnected = await client.isConnected(); // Returns true or false

  return {
    props: { isConnected },
  };
}
