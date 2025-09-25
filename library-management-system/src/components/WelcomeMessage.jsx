import "../styles/WelcomeMessage.css";
import { Link } from "react-router-dom";
function WelcomeMessage() {
  return (
    <>
      <div className="welcomemessage">
        <h1>Welcome to TheLibrary</h1>
        <h3>
          We’re delighted to have you as part of our community of readers,
          learners, and explorers. Here, knowledge and imagination are always
          within reach. Browse our extensive catalog of books, and discover
          recommendations tailored to your interests.
          <br />
          With powerful search tools, personalized reading lists, and easy
          access across all your devices, your next great story—or the perfect
          resource for your studies—is just a tap away. Whether you’re catching
          up on a classic, exploring a new genre, or researching for your next
          big project, TheLibrary is designed to make every visit inspiring and
          effortless.
        </h3>
        <Link to={"/signin"}>
          <button className="welcomemessage-signin-button">Sign In</button>
        </Link>
      </div>
    </>
  );
}

export default WelcomeMessage;
