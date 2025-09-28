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
          text="New books. Lovely. Record A$AP"
          image={img1}
          url="/librarian/book"
        />
        <Card
          title="Increase Book Quantity"
          text="New stock of existing book. Nice. Increase the quantity easily"
          image={img2}
          url="/librarian/stock"
        ></Card>
      </div>
    </>
  );
}
