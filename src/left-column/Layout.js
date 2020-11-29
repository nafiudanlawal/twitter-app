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
                            <li><a href="#"><Menu title="Home" icon={<HomeIcon />} /></a></li>
                            <li><a href="#"><Menu title="Explore" icon={<HashtagIcon />} /></a></li>
                            <li><a href="#"><Menu title="Notifications" icon={<HashtagIcon />} /></a></li>
                            <li><a href="#"><Menu title="Messages" icon={<MailIcon />} /></a></li>
                            <li><a href="#"><Menu title="Bookmarks" icon={<BookmarkIcon />} /></a></li>
                            <li><a href="#"><Menu title="Lists" icon={<ListIcon />} /></a></li>
                            <li><a href="#"><Menu title="Profile" icon={<UserIcon />} /></a></li>
                            <li><a href="#"><Menu title="More" icon={<MoreIcon />} /></a></li>
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