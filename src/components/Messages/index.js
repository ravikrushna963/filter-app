import "./index.css";

const Messages = (props) => {
  const { item, id } = props;
  console.log(item);
  return (
    <li className="list">
      <span className="span">{id}.</span>
      {item}
    </li>
  );
};
export default Messages;