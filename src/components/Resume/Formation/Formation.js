import "../../../styles/Resume/Formation/Formation.css";

function Formation({ formation }) {
  return (
    <li>
      <b>
        <span className="">{formation.ecole}</span>
      </b>
      <div>
        <span className="">{formation.dateDepart} - </span>
        <span className="">{formation.dateFin}</span>
      </div>
      <div>
        <span className="">{formation.text}</span>
      </div>
    </li>
  );
}

export default Formation;
