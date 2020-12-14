
import { ReactComponent as CommentIcon } from "../icons/comment.svg";
import { ReactComponent as RetweetIcon } from "../icons/retweet.svg";
import { ReactComponent as LikeIcon } from "../icons/heart.svg";
import { ReactComponent as ShareIcon } from "../icons/share.svg";
import TweetInfoTop from "./TweetInfoTop";
import AttachedImages from "./AttachedImages";
import UserProfileModal from "./UserInfoModal";



const MessageShort = ({ Content = "Kind of It's the project I'm working on at work", sender = { handle: "@nafiudanlawal", name: "Nafiu Lawal" }, time = 'Dec 13' }) => {
    const { useState } = require("react");
    const [myText, setMyText] = useState("");
    return (
        <article className="TweetItem">
            <div className="TweetContent">
                <div className="TweetItemDp">
                    <img src="/images/dp-placeholder.jpg" alt="dp" />
                </div>
                <div className="TweetItemContentColumn">
                    <div className="TweetTop">
                        <div className="Sender">
                            <span className="SenderName">{sender.name}</span> &nbsp;
                            <span className="SenderHandle">{sender.handle}</span>&nbsp;&nbsp;
                        </div>
                        <span className="SendTime"> {time}</span>
                    </div>
                    <div className="TweetContentDetail">
                        {Content}
                    </div>
                </div>
            </div>
            <>{myText}</>
        </article>
    );
}

export default MessageShort;