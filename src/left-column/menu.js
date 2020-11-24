
function Menu(props) {
  //const icon = require( `../public/icons/${props.icon}}.svg`);
 /*  const mouseOver = (e) => {
    if(e.target.classList.includes("wrapper")){
      e.target.style.background = "rgba(29, 161, 242, 0.2)";
    }
    
    console.log(e);
  };
  const mouseLeave = (e) => {
    e.target.style.background = "unset";
  }; */
  return (
    <div className="Menu">
      <div class="wrapper" /* onMouseOver={mouseOver} onMouseLeave={mouseLeave} */>
        <span className={`icon icon-${props.icon}`}></span>
        <span className="title">{props.title}</span>
      </div>
    </div>
  );
}

export default Menu;