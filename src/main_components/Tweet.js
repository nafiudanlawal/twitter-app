
import { ReactComponent as CommentIcon } from "../icons/comment.svg";
import { ReactComponent as RetweetIcon } from "../icons/retweet.svg";
import { ReactComponent as LikeIcon } from "../icons/heart.svg";
import { ReactComponent as ShareIcon } from "../icons/share.svg";
import TweetInfoTop from "./TweetInfoTop";
import AttachedImages from "./AttachedImages";
import UserProfileModal from "./UserInfoModal";



const Tweet = ({ Content = "Sample Contect Text", type, sender = { handle: "nafiudanlawal", name: "Nafiu Lawal" }, time = '0s', TweetInfoTop = EmptyComp, AttachedImagesProp = [], ReplyTo = EmptyComp }) => {
    const { useState } = require("react");
    const [myText, setMyText] = useState("");

    const showUserInfo = ({ user, position }) => {
        setMyText(<UserProfileModal user_id={user} anchorPosition={position} />);

    };
    const mouseLocation = (e) => {
        return { x: e.pageX, y: e.pageY };
    };

    return (
        <article className="TweetItem">
            <TweetInfoTop />
            <div className="TweetContent">
                <div className="TweetItemDp">
                    <img
                        onMouseEnter={(e) => { showUserInfo({ user: "user_id", position: mouseLocation(e) }) }}
                        src="/images/dp-placeholder.jpg" alt="dp" />
                </div>
                <div className="TweetItemContentColumn">
                    <div className="TweetTop">
                        <div className="Sender" onMouseEnter={(e) => { showUserInfo({ user: "user_id", position: mouseLocation(e) }) }} >
                            <span className="SenderName">{sender.name}</span> &nbsp;
                            <span className="SenderHandle">{sender.handle}</span>&nbsp;&nbsp;
                        </div>
                        <span className="SendTime">· {time}</span>
                    </div>
                    {ReplyTo}
                    <div className="TweetContentDetail">

                        {Content}
                        <AttachedImages AttachedImagesUrl={AttachedImagesProp} />
                    </div>
                    <div className="TweetActions">
                        <div className="Actions">
                            <div className="ActionItem"><CommentIcon /><span className="Text"><span>27</span></span></div>
                            <div className="ActionItem"><RetweetIcon /><span className="Text"><span>47</span></span></div>
                            <div className="ActionItem"><LikeIcon /><span className="Text"><span>17</span></span></div>
                            <div className="ActionItem"><ShareIcon /></div>
                        </div>
                    </div>
                </div>
            </div>
            <>{myText}</>
        </article>
    );
}
const EmptyComp = () => {
    return (<span></span>);
};

export default Tweet;
export { EmptyComp };