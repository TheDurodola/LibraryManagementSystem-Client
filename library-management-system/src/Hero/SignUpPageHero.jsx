import styles from "./SignUpPageHero.module.css";

function SignUpPageHero() {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.inputbox}>
          <h2>Sign Up</h2>
          <form>
            <input className={styles.input} type="email" name="email" id="email" placeholder="Email"/>
            <input className={styles.input} type="password" name="email" id="email" placeholder="Password"/>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUpPageHero;
