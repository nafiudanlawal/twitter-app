
import { ReactComponent as CogIcon } from "../icons/cog.svg"
import TrendingItem from "./TrendItem";
const TrendingListLong = () => {
    return (
        <div className="TrendingList">
            <div className="Heading">
                <div className="Content">
                    <span className="title">Trends for you</span>
                </div>
            </div>
            <TrendingItem Topic="Kotoko" Source="Trending in Ghana" Stats="4,348 Tweets" />
            <TrendingItem Topic="Bruno Fenandes" Source="Trending in Football" Stats="42.34K Tweets" />
            <TrendingItem Topic="#100daysofCode" Source="Trending in Programming" Stats="142.34K Tweets" />
            <div className="Footer">
                <span><a href="">Show More</a></span>
            </div>
        </div>
    )
}

export default TrendingListLong;