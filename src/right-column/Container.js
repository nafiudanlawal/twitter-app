import FollowSuggestions from "./FollowSuggestions";
import Footer from "./Footer";
import SearchBox from "./SearchTweeter";
import TrendingList from "./Trending";
import { ReactComponent as SearchIcon } from "../icons/magnifier.svg";

const MainRightColumn = () => {
    return (
        <section className="RightColumn">
            <SearchBox Icon={<SearchIcon />} placholder="Search Twitter"/>
            <TrendingList />
            <FollowSuggestions />
            <Footer />
        </section>
    );
}

export default MainRightColumn;