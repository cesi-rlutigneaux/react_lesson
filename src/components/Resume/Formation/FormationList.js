import { formationList } from "../../../datas/FormationList";

import "../../../styles/Resume/Formation/FormationList.css";

import Formation from "./Formation";

function FormationList() {
  return (
    <div className="FormationList">
      <h3>Formations</h3>
      {formationList.map(
        (formation, index) =>
          formation.display && (
            <ul key={index}>
              <Formation formation={formation} />
            </ul>
          )
      )}
    </div>
  );
}

export default FormationList;
