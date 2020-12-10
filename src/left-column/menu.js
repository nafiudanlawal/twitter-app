import {Link} from "react-router-dom";

const Menu = ({ icon, title, link="#" }) => {
  return (
    <div className="Menu">
      <div className="wrapper">
        <Link className="Link" to={link} exact="true">
          <span className="icon">{icon}</span>
          <span className="title">{title}</span>
        </Link>
      </div>
    </div>
  );
}

export default Menu;