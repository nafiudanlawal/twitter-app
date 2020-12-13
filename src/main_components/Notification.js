import ReplyTo from "./ReplyTo";
import Tweet from "./Tweet";
import { ReactComponent as HeartFilled } from "../icons/heart-filled.svg";
import { ReactComponent as RetweetFilled } from "../icons/retweet-filled.svg";
import { ReactComponent as UserFilled } from "../icons/user-filled.svg";

const Notification = (props) => {
    switch (props.Type) {
        case "comment":
            return (
                <div className="NotificationItem Comment">
                    <Tweet Content="Thank you1" ReplyTo={<ReplyTo UserHandle="@nafiudanlawal" />} />
                </div>
            );
        case "reply":
            return (
                <div className="NotificationItem Reply">
                    <Tweet Content="Thank you2" ReplyTo={<ReplyTo UserHandle="@nafiudanlawal" />} />
                </div>
            );
        case "retweet":
            return (
                <div className="NotificationItem Retweet">
                    <div className="Right">
                        <RetweetFilled />
                    </div>
                    <div className="Content">
                        <div className="Top">
                            <div className="Icons">
                                <img src="/images/dp-placeholder.jpg" alt="dp" />
                                <img src="/images/dp-placeholder.jpg" alt="dp" />
                            </div>
                            <div className="Handles">
                                <b>Christopher Amanor</b> and <b>Nicholas Huber </b> Retweeted your Tweet
                            </div>
                        </div>
                        <div className="Text">
                            Recreating Twitter Web
                            Day 12 - I missed a few days.
                            Hopefully, I'll complete all the mouse events on the homepage before the 8th. I'll make a video for that.
                            #100daysofcodechallenge #reactjs #javascript30

                            @krys2fa @Twitter @Bra_DannyEl @dennis_bilson @PopeyeThe13th https://pic.twitter.com/XM0vgzqjEA
                        </div>
                    </div>
                </div>
            );
        case "like":
            return (
                <div className="NotificationItem Like">
                    <div className="Right">
                        <HeartFilled />
                    </div>
                    <div className="Content">
                        <div className="Top">
                            <div className="Icons">
                                <img src="/images/dp-placeholder.jpg" alt="dp" />
                                <img src="/images/dp-placeholder.jpg" alt="dp" />
                                <img src="/images/dp-placeholder.jpg" alt="dp" />
                            </div>
                            <div className="Handles">
                                <b>Christopher Amanor</b> and Sam liked your Tweet
                            </div>
                        </div>
                        <div className="Text">
                            Recreating Twitter Web
                            Day 12 - I missed a few days.
                            Hopefully, I'll complete all the mouse events on the homepage before the 8th. I'll make a video for that.
                            #100daysofcodechallenge #reactjs #javascript30

                            @krys2fa @Twitter @Bra_DannyEl @dennis_bilson @PopeyeThe13th<span> https://pic.twitter.com/XM0vgzqjEA</span>
                        </div>
                    </div>
                </div>
            );
        case "follow":
            return (
                <div className="NotificationItem Follow">
                    <div className="Right">
                        <UserFilled />
                    </div>
                    <div className="Content">
                        <div className="Top">
                            <div className="Icons">
                                <img src="/images/dp-placeholder.jpg" alt="dp" />
                                <img src="/images/dp-placeholder.jpg" alt="dp" />
                            </div>
                            <div className="Handles">
                                <b>Christopher Amanor</b> and <b>Nicholas Huber </b> Followed you
                            </div>
                        </div>
                    </div>
                </div>
            );
        default:
            return (<div></div>);
    }
}

export default Notification;