import styles from "./LandingPageHero.module.css"


function LandingPageHero() {

  return (
    <>
      <div className={styles.body}>   
        <div className={styles.text}>
            <h1>Welcome to TheLibrary</h1>
            <p>Step into a world where every page invites you on a new adventure. Our shelves are filled with stories that inspire, teach, and transport you to far-off places or timeless moments. Whether you seek thrilling adventures, heartwarming tales, or thought-provoking journeys, there’s a perfect book waiting for you to discover. Begin your next chapter with us and let the magic of reading guide your imagination.</p>
        </div>
      </div>
      
    </>
  )
}

export default LandingPageHero
