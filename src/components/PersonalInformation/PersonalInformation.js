import "../../styles/PersonalInformation/PersonalInformation.css";
import Photo from "./Photo";
import Language from "./Language";
import HobbyList from "./Hobby/HobbyList";

function PersonalInformation() {
  return (
    <div className="PersonalInformation">
      <Photo />
      <h3>Informations Personnelles</h3>
      <Language />
      <br></br>
      <HobbyList />
    </div>
  );
}

export default PersonalInformation;
