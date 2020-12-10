import { ReactComponent as Logo }from "../bird.svg";
import { ReactComponent as HashtagIcon }from "../icons/hashtag.svg";
import { ReactComponent as HomeIcon }from "../icons/home.svg";
import { ReactComponent as BookmarkIcon }from "../icons/bookmark.svg";
import { ReactComponent as MailIcon }from "../icons/mail.svg";
import { ReactComponent as ListIcon }from "../icons/lists.svg";
import { ReactComponent as MoreIcon }from "../icons/more-dots.svg";
import { ReactComponent as UserIcon }from "../icons/user.svg";
import Menu from "./menu";
import TweetButtonLarge from "./TweetButton";

const Header = () => {
    return (
        <header>
            <div className="LeftMenus">
                <div className="logo">
                        <Logo />
                </div>
                <div className="NavHolder">
                    <nav>
                        <ul className="list-group">
                            <li><Menu title="Home" icon={<HomeIcon />} link="/" /></li>
                            <li><Menu title="Explore" icon={<HashtagIcon />} link="/explore"  /></li>
                            <li><Menu title="Notifications" icon={<HashtagIcon />} link="/notifications" /></li>
                            <li><Menu title="Messages" icon={<MailIcon />} link="/messages" /></li>
                            <li><Menu title="Bookmarks" icon={<BookmarkIcon />} link="/bookmarks" /></li>
                            <li><Menu title="Lists" icon={<ListIcon />} link="/lists" /></li>
                            <li><Menu title="Profile" icon={<UserIcon />} link="/profile" /></li>
                            <li><Menu title="More" icon={<MoreIcon />} link="/explore" /></li>
                        </ul>
                    </nav>
                </div>
                <div className="HeaderBottom">
                    <TweetButtonLarge text={"Tweet"} />
                </div>
            </div>
        </header>
      );
}

export default Header;