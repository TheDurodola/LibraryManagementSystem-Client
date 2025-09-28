import styles from "./PatronDashboard.module.css";
import Card from "../Card/Card";
import img1 from "../assets/cat.png";
import img2 from "../assets/borrow.png";
import img3 from "../assets/BorrowBook.jpeg";

export default function PatronDashboard() {
  return (
    <>
      <div className={styles.container}>
        <Card
          title="Borrow Books"
          text="Borrow books from our every growing catalogue"
          image={img1}
        />
        <Card
          title="Return Books"
          text="Return books you have enjoyed and give others a chance to enjoy them too"
          image={img2}
        ></Card>
      </div>
    </>
  );
}
