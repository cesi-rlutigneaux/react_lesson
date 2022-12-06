import { experienceList } from "../../../datas/ExperienceList";

import Experience from "./Experience";

import "../../../styles/Resume/Experience/ExperienceList.css";

function ExperienceList() {
  return (
    <div className="ExperienceList">
      <h3>Experiences</h3>
      <ul className="lmj-plant-list">
        {experienceList.map((exp, index) => (
          <div key={index}>
            <Experience exp={exp} />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceList;
