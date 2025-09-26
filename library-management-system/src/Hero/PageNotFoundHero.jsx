import styles from "./PageNotFoundHero.module.css";
import  BackToHomeButton  from "../Button/BackToHomeButton"
function PageNotFoundHero() {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.header1}>
          <h1>Something</h1>
        </div>
        <div className={styles.header2}>
          <h1>went wrong</h1>
        </div>
        <div className={styles.text1}>
          The page you are looking for does not exist or maybe has been moved.
          Keep exploring out site.
        </div>
        <BackToHomeButton></BackToHomeButton>
      </div>
    </>
  );
}

export default PageNotFoundHero;
