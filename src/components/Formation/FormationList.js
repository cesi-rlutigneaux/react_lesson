import { formationList } from "../../datas/FormationList";

import "../../styles/Formation/FormationList.css";

import Formation from "./Formation";

function FormationList() {
  return (
    <div className="FormationList">
      <h3>Formations</h3>
      {formationList.map(
        (formation, index) =>
          formation.display && (
            <ul>
              <Formation formation={formation} key={index} />
            </ul>
          )
      )}
    </div>
  );
}

export default FormationList;
