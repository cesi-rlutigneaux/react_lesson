import "../../../styles/Resume/Experience/Experience.css";

function Experience({ exp }) {
  return (
    <li>
      <b>
        <span className="">{exp.text}</span>
      </b>
      <div>
        <span className="">{exp.dateDepart} - </span>
        <span className="">{exp.dateFin}</span>
      </div>
      <div>
        <span className="">{exp.text}</span>
        <div>
          <span className="">
            <i>{exp.entreprise}</i>
          </span>
        </div>
      </div>
    </li>
  );
}

export default Experience;
