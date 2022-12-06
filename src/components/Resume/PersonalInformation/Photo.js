import "../../../styles/Resume/PersonalInformation/Photo.css";
import photo from "../../../assets/Viking.png";

function Photo() {
  return (
    <div className="image-container">
      <img
        className="photo"
        src={photo}
        alt="Grapefruit slice atop a pile of other slices"
      ></img>
    </div>
  );
}

export default Photo;
