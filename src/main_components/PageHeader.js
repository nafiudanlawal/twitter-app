import { ReactComponent as Icon }from "../icons/spark.svg";

function PageTop(){
    return (
        <div className="PageTop">
            <div className="text">
                <span>Home</span>
            </div>
            <div class="right-icon">
                <Icon />
            </div>
        </div>
    );
}

export default PageTop;