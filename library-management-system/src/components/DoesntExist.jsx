import "../styles/DoesntExist.css"
import darth from "../assets/Darth2.png";

function DoesntExist() {

  return (
    <>
      <div className="body">
        <div className="image-section">
            <img src={darth} alt="reading" />
        </div>
        <div className="text-section">
            <h1>Page Not Found</h1>
            <p>And where… do you think you’re going… rebel? Your defiance ends here..</p>
        </div>
      </div>
      
    </>
  )
}

export default DoesntExist
