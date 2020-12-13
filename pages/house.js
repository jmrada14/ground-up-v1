import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { fetchUrl, states } from "../utils/utils";
import MemberCard from "../components/MemberCard";

export default function Home() {
  const [memberData, setMemberData] = React.useState([]);
  React.useEffect(() => {
    fetchUrl("http://localhost:8000/api/members/chamber/house").then((res) =>
      setMemberData(res)
    );
  }, []);
  console.log(memberData);
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
        <div className={styles.grid}></div>
        <label for="state-filter">Filter By State</label>
        <select name="filter" id="filterSelect">
          <option value="All">All</option>
          {states.map((e) => (
            <option value={e}>{e}</option>
          ))}
        </select>
        <label for="state-filter">Filter By Party</label>
        <select name="filter" id="filterSelect">
          <option value="All">All</option>
          <option value="D">Democrat</option>
          <option value="D">Republican</option>
        </select>
        <div className={styles.grid}>
          {memberData?.map(({ name, party, role, state, twitter }) => {
            return (
              <>
                <MemberCard
                  header={<h3>{name}</h3>}
                  description={
                    <ul>
                      <li>State: {state}</li>
                      <li>Party: {party}</li>
                      <li>Role: {role}</li>
                      <li>Twitter: {twitter}</li>
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
