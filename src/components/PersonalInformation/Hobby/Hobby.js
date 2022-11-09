import "../../../styles/PersonalInformation/Hobby/Hobby.css";

function Hobby({ hobby }) {
  return (
    <div>
      <a href="">
        <img className="hobbyImg" src={hobby.img} alt={hobby.name} />
      </a>
    </div>
  );
}

export default Hobby;
