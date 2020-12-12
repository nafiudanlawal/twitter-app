
const PageTop = ({Text = "Home", Icon}) => {
    return (
        <div className="PageTop">
            <div className="text">
                <span>{Text}</span>
            </div>
            <div className="right-icon">
                <Icon />
            </div>
        </div>
    );
}

export default PageTop;