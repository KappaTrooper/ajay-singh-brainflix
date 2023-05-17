import "../styles/Avatar.scss";

export default function Avatar(props) {
    const { img } = props;
    return <img src={img} alt="Avatar Img" />;

}