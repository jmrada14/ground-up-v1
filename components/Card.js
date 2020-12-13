import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Card({ header, description, route }) {
  return (
    <>
      <Link href={route}>
        <a className={styles.card}>
          {header}
          {description}
        </a>
      </Link>
    </>
  );
}
