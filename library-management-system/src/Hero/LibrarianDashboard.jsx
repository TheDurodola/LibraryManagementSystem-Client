import styles from "./PatronDashboard.module.css";
import Card from "../Card/Card";
import img1 from "../assets/cardimg1.png";
import img2 from "../assets/cardimg2.png";

export default function LibrarianDashboard() {
  return (
    <>
      <div className={styles.container}>
        <Card
          title="Add Books"
          text="Borrow books from our every growing catalogue"
          image={img1}
        />
        <Card
          title="Increase Existing Book Stock"
          text="Return books you have enjoyed and give others a chance to enjoy them too"
          image={img2}
        ></Card>
      </div>
    </>
  );
}
