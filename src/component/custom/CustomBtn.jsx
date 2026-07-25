import "../../style/CustomButton.css"

const CustomButton = ({ text, onClick, type = "button" }) => {
  return (
    <button type={type} className="custom-btn" onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;