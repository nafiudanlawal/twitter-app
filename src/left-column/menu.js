
const Menu = ({icon, title}) => {
  return (
    <div className="Menu">
      <div className="wrapper">
        <span className="icon">{icon}</span>
        <span className="title">{title}</span>
      </div>
    </div>
  );
}

export default Menu;