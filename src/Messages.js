import { Link, Route, Switch } from "react-router-dom"
import { ReactComponent as MessagePlusIcon } from "./icons/mail-plus.svg"
import { ReactComponent as InfoIcon } from "./icons/info.svg"
import { ReactComponent as CalendarIcon } from "./icons/calendar.svg"
import { ReactComponent as GifIcon } from "./icons/gif.svg"
import { ReactComponent as ImageIcon } from "./icons/image.svg"
import { ReactComponent as EmojiIcon } from "./icons/emoji.svg"
import { ReactComponent as SendIcon } from "./icons/send.svg"
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
                                <div className="SenderTop">
                                    <div className="UserInfo">
                                        <div className="dp">
                                            <img src="/images/dp-placeholder.jpg" alt="dp" />
                                        </div>
                                        <div className="Content">
                                            <div className="Name">Nafiu Lawal</div>
                                            <div className="Handle">@nafiudanlawal</div>
                                        </div>
                                    </div>
                                    <div className="Icon">
                                        <InfoIcon />
                                    </div>
                                </div>
                                <div className="ChatBoxInnerWrapper">
                                    
                                    <div className="SenderProfile">
                                        <div className="Top">
                                            <span className="Name">Nafiu Dan Lawal</span>
                                            <span className="Handle">@nafiudanlawal</span>
                                        </div>
                                        <div className="ProfileDescription">
                                            <p>Web Developer(PHP, Wordpress, JavaScript (React, NodeJS) ) - Android Developer - OpenMinded - Audiobook listener - AI Analyst - Man Utd Fan</p>
                                        </div>
                                        <div className="Bottom">
                                            <div className="StatsWrapper">
                                                <div className="Following">
                                                    <span className="Stats">1,457</span><span className="Text">Following</span>
                                                </div>
                                                <div className="Followers">
                                                    <span className="Stats">1,252</span><span className="Text">Followers</span>
                                                </div>
                                            </div>
                                            <div className="Join">
                                                <span className="Icon"><CalendarIcon /></span>
                                                <span className="Date">Joined July 2018</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ChatContainer">
                                        <div className="InMessageWrapper">
                                            <div className="Message">
                                                <div className="Content">
                                                    <div className="dp">
                                                        <img src="/images/dp-placeholder.jpg" alt="dp" />
                                                    </div>
                                                    <div className="InMessage">
                                                        Thanks fam
                                                </div>
                                                </div>
                                                <div className="Time">
                                                    Dec 25, 3:23pm
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="ChatContainer">
                                        <div className="ByUserWrapper">
                                            <div className="ByUser">
                                                Hey Man just got my emailDid you get to the certification phase I just got my emailDid you get to the certification phaseI just got my emailDid you get to the certification phase
                                                I just got my emailDid you get to the certification phaseI just got my emailDid you get to the certification phase
                                                I just got my emailDid you get to the certification phaseI just got my emailDid you get to the certification phaseI just got my emailDid you get to the certification phaseI just got my emailDid you get to the certification phaseI just got my emailDid you get to the certification phase
                                                I just got my email
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ChatContainer">
                                    <div className="ByUserWrapper">
                                        <div className="ByUser">
                                            Hey Man just got my email
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="SendMessageFormWrapper">
                                    <div className="SendMessageForm">
                                        <div className="Icons">
                                            <span className="Icon"><ImageIcon /></span>
                                            <span className="Icon"><GifIcon /></span>
                                        </div>
                                        <div className="Input">
                                            <div className="MessageInput">
                                                <input type="text" placeholder="Start a new message" />
                                                <div className="MessageButton">
                                                    <span className="Icon"><EmojiIcon /></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="FormSubmit">
                                            <SendIcon />
                                        </div>
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