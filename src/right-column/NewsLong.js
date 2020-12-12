
import { ReactComponent as CogIcon } from "../icons/cog.svg"
import NewsItem from "./NewsItem";
import TrendingItem from "./TrendItem";
const NewsListLong = () => {
    return (
        <div className="NewsList">
            <div className="Heading">
                <div className="Content">
                    <span className="title">What's Happening</span>
                </div>
            </div>
            <NewsItem Topic="Ghana Sports" Headline="Match postponed amid venue problems" CoverImageUrl="/images/post-media3.jpg" Time="LIVE" />
            <NewsItem Topic="Football" Headline="Man Utd kicked out of the champions league" CoverImageUrl="/images/sample-image.jpg" Time="YESTERDAY" />
            <NewsItem Topic="Programming" Headline="More JS jobs in 2020 created" CoverImageUrl="/images/post-media.jpg" Time="LIVE" />
            <div className="Footer">
                <span><a href="">Show More</a></span>
            </div>
        </div>
    )
}

export default NewsListLong;