import styles from "./SignInPageHero.module.css";

function SignInPageHero() {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.inputbox}>
          <h2>Sign In</h2>
          <form>
            <input className={styles.input} type="email" name="email" id="email" placeholder="Email"/>
            <input className={styles.input} type="password" name="email" id="email" placeholder="Password"/>
            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignInPageHero;
