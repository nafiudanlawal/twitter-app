
const TweetInfoTop = ({Icon, Text}) => {
    return (
        <div className="TweetExtraInfo">
            <span className="TweetExtraText"><i className={Icon}></i> {Text}</span>
        </div>
    );
};

export default TweetInfoTop;