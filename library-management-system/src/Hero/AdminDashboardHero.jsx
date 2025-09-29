import styles from "./AdminDashboardHero.module.css";
import Card from "../Card/Card";
import img1 from "../assets/cardimg1.png";
import img2 from "../assets/cardimg2.png";
import img3 from "../assets/cardimg5.png";


export default function AdminDashboardHero() {
  return (
    <>
      <div className={styles.container}>
        <Card
          title="Register Librarian"
          image={img1}
          url="/admin/register"
        />
        <Card
          title="View Stock"
      
          image={img2}
          url="/admin/stock"
        ></Card>
        <Card
          title="Delete User"
          image={img3}
          url="/admin/delete"
        ></Card>
      </div>
    </>
  );
}
