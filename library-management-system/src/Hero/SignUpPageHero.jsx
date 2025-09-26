import styles from "./SignUpPageHero.module.css";

function SignUpPageHero() {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.inputbox}>
          <h2>Sign Up</h2>
          <form>
            <input className={styles.input} type="text" name="firstname" id="firstname" placeholder="First Name"/>
            <input className={styles.input} type="password" name="lastname" id="lastname" placeholder="Last name"/>
            <input className={styles.input} type="email" name="email" id="email" placeholder="Email"/>
            <input className={styles.input} type="password" name="password" id="password" placeholder="Password"/>
            <input className={styles.input} type="tel" name="phone" id="phone" placeholder="Phone Number"/>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUpPageHero;
