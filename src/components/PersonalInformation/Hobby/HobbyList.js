import { hobbyList } from "../../../datas/HobbyList";

import Hobby from "./Hobby";

import "../../../styles/PersonalInformation/Hobby/HobbyList.css";

function HobbyList() {
  return (
    <div>
      <h4>Loisirs</h4>
      <div className="container">
        {hobbyList.map((hobby, index) => (
          <Hobby key={index} hobby={hobby} />
        ))}
      </div>
    </div>
  );
}

export default HobbyList;
