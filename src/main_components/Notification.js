import ReplyTo from "./ReplyTo";
import Tweet from "./Tweet";

const Notification = (props) => {
    switch (props.Type) {
        case "comment":
            return (
                <div className="NotificationItem">
                    <Tweet Content="Thank you1" ReplyTo={<ReplyTo UserHandle="@nafiudanlawal"/>} />
                </div>
            );
        case "reply":
            return (
                <div className="NotificationItem">
                    <Tweet Content="Thank you2" ReplyTo={<ReplyTo UserHandle="@nafiudanlawal"/>} />
                </div>
            );
        case "like":
            return (
                <div>

                </div>
            );
        case "follow":
            return (
                <div>

                </div>
            );
        default:
            return (<div></div>);
    }
}

export default Notification;