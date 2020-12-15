
import { Link } from "react-router-dom";


const MessageShort = ({ Content = "Kind of It's the project I'm working on at work", sender = { handle: "@nafiudanlawal", name: "Nafiu Lawal", id: 15 }, time = 'Dec 13' },) => {
    const { useState } = require("react");
    const [myText, setMyText] = useState("");
    return (
        <article className="MessageItem">
            <Link className="LinkDiv" to={`/messages/${sender.id}`}>
                <div className="MessageContent">
                    <div className="MessageItemDp">
                        <img src="/images/dp-placeholder.jpg" alt="dp" />
                    </div>
                    <div className="MessageItemContentColumn">
                        <div className="MessageTop">
                            <div className="Sender">
                                <span className="SenderName">{sender.name}</span> &nbsp;
                            <span className="SenderHandle">{sender.handle}</span>&nbsp;&nbsp;
                        </div>
                            <span className="SendTime"> {time}</span>
                        </div>
                        <div className="MessageContentDetail">
                            {Content}
                        </div>
                    </div>
                </div>
                <>{myText}</>
            </Link>
        </article>
    );
}

export default MessageShort;