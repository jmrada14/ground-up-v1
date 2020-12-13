import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { states } from "../util/utils";
import MemberCard from "../components/MemberCard";
import { connectToDatabase } from "../util/mongodb";

export default function Home({ houseRepresentatives }) {
  return (
    <div className={styles.container}>
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
          {houseRepresentatives?.map(
            ({ name, party, role, state, twitter }, index) => {
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
            }
          )}
        </div>
      </main>
      <footer className={styles.footer}>Fuck Copyright</footer>
    </div>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const houseRepresentatives = await db
    .collection("members")
    .find({ chamber: "house" })
    .toArray();

  return {
    props: {
      houseRepresentatives: JSON.parse(JSON.stringify(houseRepresentatives)),
    },
  };
}
