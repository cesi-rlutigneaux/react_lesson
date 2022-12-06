import "../../../styles/Resume/Skill/Skill.css";

function Skill({ sk }) {
  return (
    <li>
      <img className="hobbyImg" src={sk.img} alt={sk.name} />
    </li>
  );
}

export default Skill;
