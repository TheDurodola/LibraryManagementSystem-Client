import styles from "./PatronDashboard.module.css";
import Card from "../Card/Card";
import img1 from "../assets/cardimg7.png";
import img2 from "../assets/cardimg4.png";

export default function LibrarianDashboard() {
  return (
    <>
      <div className={styles.container}>
        <Card
          title="Add Books"
          text="Borrow books from our every growing catalogue"
          image={img1}
          url="/librarian/book"
        />
        <Card
          title="Increase Existing Book Stock"
          text="Return books you have enjoyed and give others a chance to enjoy them too"
          image={img2}
          url="/librarian/stock"
        ></Card>
      </div>
    </>
  );
}
