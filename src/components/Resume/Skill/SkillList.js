import "../../../styles/Resume/Skill/SkillList.css";

import { skillList } from "../../../datas/SkillList";

import Skill from "./Skill";

function SkillList() {
  return (
    <div className="SkillList">
      <h3>Compétences</h3>
      {skillList.map((sk, index) => (
        <div key={index}>
          <Skill sk={sk} />
          <br></br>
        </div>
      ))}
    </div>
  );
}

export default SkillList;
