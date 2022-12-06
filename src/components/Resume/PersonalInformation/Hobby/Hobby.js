import "../../../../styles/Resume/PersonalInformation/Hobby/Hobby.css";

function handleClick(name) {
  console.log("Loisir selectionné : ", name);
}

function Hobby({ hobby }) {
  return (
    <div onClick={() => handleClick(hobby.name)}>
      <img className="hobbyImg" src={hobby.img} alt={hobby.name} />
    </div>
  );
}

export default Hobby;
