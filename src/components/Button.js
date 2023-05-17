import "../styles/button.scss";

export default function Button(props) {
  const { icon: Icon, buttonText } = props;

  return (
    <div id="button-item">
      <button className="button-item__button" type="button">
        <Icon className="button-item__icon" />
        {buttonText}
      </button>
    </div>
  );
}
