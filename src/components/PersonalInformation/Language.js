import "../../styles/PersonalInformation/Language.css";
import { language } from "../../datas/Language";

function Language() {
  return (
    <div>
      <h4>Langages</h4>
      {language.map((lang, index) => (
        <div key={index}>
          <b>{lang.name}</b> : {lang.text}
        </div>
      ))}
    </div>
  );
}

export default Language;
