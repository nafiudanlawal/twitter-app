
import { ReactComponent as CommentIcon }from "../icons/comment.svg";
import { ReactComponent as RetweetIcon }from "../icons/retweet.svg";
import { ReactComponent as LikeIcon }from "../icons/heart.svg";
import { ReactComponent as ShareIcon }from "../icons/share.svg";
import TweetInfoTop from "./TweetInfoTop";
import AttachedImages from "./AttachedImages";
import UserProfileModal from "./UserInfoModal";



const Tweet = ({content="", type, sender={handle:"nafiudanlawal", name:"Nafiu Lawal"}, time = '0s', tweetInfoTop, AttachedImagesProp = []}) => {
    const { useState } = require("react");
    const tweetExtraInfoTop = tweetInfoTop ?? {icon : "", "text": ""};
    const [userProfile, setUserProfile] =  useState({display: "none", user_id: 1});
    const [myText, setMyText] =  useState("");


    const showUserInfo = ({user, position}) => {
        setMyText(<UserProfileModal user_id={user} anchorPosition={position} />);

    };
    const mouseLocation = (e) => {
        return { x: e.pageX, y: e.pageY };
    };

    return(
        <article className="TweetItem">
            <TweetInfoTop  Icon="icon-bell icon" Text="retweeted by @jason_gunner" />
            <div className="TweetContent">
                <div className="TweetItemDp">
                    <img 
                    onMouseEnter={(e) => {showUserInfo({user:"user_id", position:mouseLocation(e)}) }} 
                    src="/images/dp-placeholder.jpg" alt="dp"/>
                </div>
                <div className="TweetItemContentColumn">
                    <div className="TweetTop">
                        <div className="Sender" 
                            onMouseEnter={(e) => {showUserInfo({user:"user_id", position:mouseLocation(e)}) }} 
                            >
                            <span className="SenderName">{sender.name}</span> &nbsp;
                            <span className="SenderHandle">{sender.handle}</span>&nbsp;&nbsp;
                        </div>
                        <span className="SendTime">·&nbsp;{time}</span>
                    </div>
                    <div className="TweetContentDetail">
                        {content}
                        <AttachedImages AttachedImagesUrl={ AttachedImagesProp } />
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

export default Tweet;