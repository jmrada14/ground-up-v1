import styles from "../styles/Home.module.css";

export default function MemberCard({ header, description }) {
  return (
    <>
      <div className={styles.card}>
        {header}
        {description}
      </div>
    </>
  );
}
