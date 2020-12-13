import { Link, Route, Switch } from "react-router-dom"
import { ReactComponent as MessagePlusIcon } from "./icons/mail-plus.svg"
import PageTop from "./main_components/PageHeader";
import { ReactComponent as SearchIcon } from "./icons/magnifier.svg";
import { ReactComponent as ArrowRightIcon } from "./icons/arrow-right.svg";
import SearchBox from "./right-column/SearchTweeter";

const Messages = props => {
    return (
        <div className="MessagesPage">
            <div className="main">
                <PageTop Text="Messages" Icon={MessagePlusIcon} />

                <Switch>
                    <Route path="/messages" exact={true}>
                        <div className="SubAction">
                            <Link className="Link" to="/messages/requests">Messages requests</Link>
                            <ArrowRightIcon />
                        </div>
                        <div className="SearchContainer">
                            <SearchBox Icon={<SearchIcon />} placholder="Search Twitter" />
                        </div>
                        <div>Users</div>
                    </Route>
                    <Route path="/messages/requests" exact={true}>
                        <div>Request</div>
                    </Route>
                </Switch>
            </div>
            <div className="RightSide">
                <div>Message Chats</div>
            </div>
        </div>
    );
}

export default Messages;