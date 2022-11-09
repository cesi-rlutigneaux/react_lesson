import "../../styles/Skill/SkillList.css";

import { skillList } from "../../datas/SkillList";

import Skill from "./Skill";

function SkillList() {
  return (
    <div className="SkillList">
      <h3>Compétences</h3>
      {skillList.map((sk) => (
        <div>
          <Skill sk={sk} />
          <br></br>
        </div>
      ))}
    </div>
  );
}

export default SkillList;
