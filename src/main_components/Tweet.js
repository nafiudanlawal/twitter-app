
import { ReactComponent as CommentIcon }from "../icons/comment.svg";
import { ReactComponent as RetweetIcon }from "../icons/retweet.svg";
import { ReactComponent as LikeIcon }from "../icons/heart.svg";
import { ReactComponent as ShareIcon }from "../icons/share.svg";
import TweetInfoTop from "./TweetInfoTop";


const Tweet = ({content, type, sender, time, tweetInfoTop}) => {
    const tweetExtraInfoTop = tweetInfoTop ?? {icon : "", "text": ""};
    return(
        <article className="TweetItem">
            <div className="TweetExtraInfo">
                <span><i className="icon-bell icon"></i> retweeted by @jason_gunner</span>
                {
                    <TweetInfoTop  Icon={tweetExtraInfoTop.icon} Text={tweetExtraInfoTop.text} />
                }
            </div>
            <div className="TweetContent">
                <div className="TweetItemDp">
                    <img src="/images/dp-placeholder.jpg" alt="dp"/>
                </div>
                <div className="TweetItemContentColumn">
                    <div className="TweetTop">
                        <span className="SenderName">Peter Gregory</span> &nbsp;
                        <span className="SenderHandle">@fhjjj</span>&nbsp;&nbsp;
                        <span className="SenderHandle">·</span>&nbsp;
                        <span className="SenderHandle">1h</span>
                    </div>
                    <div className="TweetContentDetail">
                        Stack Overflow be like,
                        "I can explain it to you but I can't understand it for you."
                    </div>
                    <div className="TweetActions">
                        <div className="Actions">
                            <div className="ActionItem"><CommentIcon /><span className="CountText"><span>7</span></span></div>
                            <div className="ActionItem"><RetweetIcon /><span className="CountText"><span>7</span></span></div>
                            <div className="ActionItem"><LikeIcon /><span className="CountText"><span>7</span></span></div>
                            <div className="ActionItem"><ShareIcon /></div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Tweet;