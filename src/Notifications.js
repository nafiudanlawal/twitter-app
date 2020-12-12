import PageTop from "./main_components/PageHeader";
import Tweet from "./main_components/Tweet";
import MainRightColumn from "./right-column/Container";
import { ReactComponent as HeaderIcon }from "./icons/cog.svg";
import { Route, BrowserRouter as Router, Switch, Link, NavLink } from "react-router-dom";
import Notification from "./main_components/Notification";


const Notifications = (props) => {
    return (
        <div className="NotificationsPage">
            <div className="main">
                <PageTop Text="Notifications" Icon={HeaderIcon}/>
                <div className="SubMenus">
                    <span className="All"><NavLink className="Link" to="/notifications" exact={true}>All</NavLink></span>
                    <span className="Mentions"><NavLink className="Link" to="/notifications/mentions">Mentions</NavLink></span>
                </div>
                <Switch>
                    <Route path="/notifications" exact={true}>
                        <NotificationsList />
                    </Route>
                    <Route path="/notifications/mentions" exact={true}>
                        <Mentions />
                    </Route>
                </Switch>
            </div>
            <div className="RightSide">
                <MainRightColumn />
            </div>
        </div>
    );
}


const NotificationsList = (props) => {
    return (
        <div className="Notifications">
            <Notification Type="reply" />
            <Notification Type="reply" />
            <Notification Type="reply" />
        </div>
    );
}


const Mentions = (props) => {
    return (
        <section className="Feeds">
            <Tweet
                Content={`Stack Overflow be like, "I can explain it to you but I can't understand it for you."`}
                sender={{ handle: "@addoDgh", name: "Addo Dankwah" }}
                time="1m"
            />
            <Tweet
                Content={`"More football coming up this week. The players' stamina and fitness will be tested"`}
                sender={{ handle: "@manutdGuy", name: "Man Utd Fan Club" }}
                time="Dec 5"
            />
            <Tweet
                Content={`Stack Overflow be like, "I can explain it to you but I can't understand it for you."`}
                sender={{ handle: "@addoDgh", name: "Addo Dankwah" }}
                time="1m"
            />
            <Tweet
                Content={`I pray for peace before after and during the elections`}
                AttachedImagesProp={["/images/sample-image.jpg"]}
                sender={{ handle: "@johnDmahama", name: "John Mahama" }}
                time="15m"
            />
            <Tweet
                Content={"Great Comeback for Man utd"}
                sender={{ handle: "@manutdGuy", name: "Man Utd Fan Club" }}
                time="Dec 5"
            />
            <Tweet
                Content={"More football coming up this week. The players' stamina and fitness will be tested @nafiudanlawal"}
                sender={{ handle: "@manutdGuy", name: "Man Utd Fan Club" }}
                time="Dec 5"
            />
            <Tweet
                Content={"More football coming up this week. The players' stamina and fitness will be tested"}
                AttachedImagesProp={["/images/post-media.jpg", "/images/post-media3.jpg", "/images/sample-image.jpg", "/images/post-media.jpg"]}
                sender={{ handle: "@manutdGuy", name: "Man Utd Fan Club" }}
                time="Dec 5"
            />
            <Tweet />
        </section>
    );
}
export {Mentions, NotificationsList};
export default Notifications;