import styles from "./Card.module.css";
import img from "../assets/cat.png";
import { Link } from "react-router-dom";

export default function Card({ title, text, image , url}) {
  return (
    <>
    <Link to={url}>
      <div className={styles.card}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      </Link>
    </>
  );
}
