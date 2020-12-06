
import { ReactComponent as CommentIcon }from "../icons/comment.svg";
import { ReactComponent as RetweetIcon }from "../icons/retweet.svg";
import { ReactComponent as LikeIcon }from "../icons/heart.svg";
import { ReactComponent as ShareIcon }from "../icons/share.svg";
import TweetInfoTop from "./TweetInfoTop";
import AttachedImages from "./AttachedImages";

const showUserInfo = (e) => {
    console.log(e);
};

const hideUserInfo = (userInfo) => {
    console.log("hide modal");
};

const Tweet = ({content="", type, sender={handle:"nafiudanlawal", name:"Nafiu Lawal"}, time = '0s', tweetInfoTop, AttachedImagesProp = []}) => {
    const tweetExtraInfoTop = tweetInfoTop ?? {icon : "", "text": ""};
    
    return(
        <article className="TweetItem">
            <TweetInfoTop  Icon="icon-bell icon" Text="retweeted by @jason_gunner" />
            <div className="TweetContent">
                <div className="TweetItemDp" onMouseEnter={showUserInfo} onMouseLeave={hideUserInfo}>
                    <img src="/images/dp-placeholder.jpg" alt="dp"/>
                </div>
                <div className="TweetItemContentColumn">
                    <div className="TweetTop">
                        <div className="Sender" onMouseEnter={showUserInfo} onMouseLeave={hideUserInfo}>
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
        </article>
    );
}

export default Tweet;