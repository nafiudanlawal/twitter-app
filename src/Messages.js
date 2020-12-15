import { Link, Route, Switch } from "react-router-dom"
import { ReactComponent as MessagePlusIcon } from "./icons/mail-plus.svg"
import PageTop from "./main_components/PageHeader";
import { ReactComponent as SearchIcon } from "./icons/magnifier.svg";
import { ReactComponent as ArrowRightIcon } from "./icons/arrow-right.svg";
import SearchBox from "./right-column/SearchTweeter";
import MessageShort from "./main_components/MessageShort";

const Messages = props => {
    return (
        <div className="MessagesPage">
            <div className="main">
                <PageTop Text="Messages" Icon={MessagePlusIcon} />

                <Switch>
                    <Route path="/messages">
                        <div className="PageContentRight">
                            <div className="SubAction">
                                <Link className="Link" to="/messages/requests">Messages requests</Link>
                                <ArrowRightIcon />
                            </div>
                            <div className="SearchContainer">
                                <SearchBox Icon={<SearchIcon />} placholder="Search Twitter" />
                            </div>
                            <div className="MessagesBox">
                                <MessageShort />
                                <MessageShort />
                                <MessageShort />
                                <MessageShort />
                                <MessageShort />
                                <MessageShort />
                                <MessageShort />
                                <MessageShort />
                                <MessageShort />
                                <MessageShort />
                                <MessageShort />
                                <MessageShort />
                                <MessageShort />
                                <MessageShort />
                                <MessageShort />
                                <MessageShort />
                                <MessageShort />
                                <MessageShort />
                                <MessageShort />
                                <MessageShort />
                                <MessageShort />
                                <MessageShort />
                                <MessageShort />
                            </div>
                        </div>
                    </Route>
                    <Route path="/messages/requests" exact={true}>
                        <div>Request</div>
                    </Route>
                </Switch>
            </div>
            <div className="RightSide">
                <div className="ChatContent">
                    <Switch>
                        <Route path="/messages/:id">
                            <div className="ChatBox">
                                <div className="ChatContainer">
                                    <div className="OutMail">
                                        Thanks fam
                                    </div>
                                </div>
                                <div className="ChatContainer">
                                    <div className="ByUser">
                                        Hey Man
                                        Did you get to the certification phase
                                        I just got my email
                                    </div>
                                </div>
                            </div>
                        </Route>
                        <Route path="/messages">
                            <NoChatSelected />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div >
    );
}
const NoChatSelected = props => {
    return (
        <div className="NoChatSelected">
            <div className="Head">You don’t have a message selected</div>
            <div className="Bottom"> Choose one from your existing messages, or start a new one.</div>
            <div className="NewMessageBtn"><button className="TweetBtnLarge">New Message</button></div>
        </div>
    );
}
export default Messages;