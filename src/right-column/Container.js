import FollowSuggestions from "./FollowSuggestions";
import Footer from "./Footer";
import SearchBox from "./SearchTweeter";
import TrendingList from "./Trending";

const MainRightColumn = () => {
    return (
        <section className="RightColumn">
            <SearchBox />
            <TrendingList />
            <FollowSuggestions />
            <Footer />
        </section>
    );
}

export default MainRightColumn;