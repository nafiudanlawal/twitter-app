import { ReactComponent as CogIcon } from "./icons/cog.svg";
import { ReactComponent as TopicIcon } from "./icons/comments.svg";
import SearchBox from "./right-column/SearchTweeter";
import { ReactComponent as SearchIcon } from "./icons/magnifier.svg";
import FollowSuggestions from "./right-column/FollowSuggestions";
import TrendingListLong from "./right-column/TrendingLong";
import Footer from "./right-column/Footer";
import NewsListLong from "./right-column/NewsLong";
import Tweet from "./main_components/Tweet";


const Explore = (props) => {
    return (
        <div className="ExplorePage">
            <div className="Main">
                <section className="PageTop">
                    <div className="Head">
                        <SearchBox Icon={<SearchIcon />} placholder="Search Twitter" />
                    </div>
                    
                    <div className="right-icon">
                        <CogIcon />
                    </div>
                </section>
                <div className="PageContent">
                <section>
                    <div className="TopHeader">
                        <img src="/images/post-media1.jpg" />
                        <div className="Text">
                            <div className="Title">Champions League · Yesterday</div>
                            <div className="Content">PSG and İstanbul Başakşehir players walk off after alleged racist incident by official during Champions League match</div>
                        </div>
                    </div>
                </section>
                <section className="Trending">
                    <TrendingListLong />
                </section>
                <section className="Happening">
                    <NewsListLong />
                </section>
                <div className="separator-grey"></div>
                <section className="Topics">
                    <div className="Heading"><span className="Icon"><TopicIcon /></span><span className="Text">UEFA Champions League</span></div>
                    <Tweet
                        Content={"More football coming up this week. The players' stamina and fitness will be tested"}
                        AttachedImagesProp={["/images/post-media.jpg", "/images/post-media3.jpg", "/images/sample-image.jpg", "/images/post-media.jpg"]}
                        sender={{ handle: "@manutdGuy", name: "Man Utd Fan Club" }}
                        time="Dec 5"
                    />
                    <Tweet
                        Content={"More football coming up this week. The players' stamina and fitness will be tested"}
                        AttachedImagesProp={["/images/post-media.jpg", "/images/post-media3.jpg", "/images/sample-image.jpg", "/images/post-media.jpg"]}
                        sender={{ handle: "@manutdGuy", name: "Man Utd Fan Club" }}
                        time="Dec 5"
                    />
                    <Tweet
                        Content={"More football coming up this week. The players' stamina and fitness will be tested"}
                        AttachedImagesProp={["/images/post-media.jpg", "/images/post-media3.jpg", "/images/sample-image.jpg", "/images/post-media.jpg"]}
                        sender={{ handle: "@manutdGuy", name: "Man Utd Fan Club" }}
                        time="Dec 5"
                    />
                    <div className="Bottom">
                        <div className="Right"><span className="Icon"><TopicIcon /></span><span className="Text">UEFA Champions League</span></div>
                        <div className="Button"><button className="FollowBtnWhite">Following</button></div>
                    </div>
                </section>
                <div className="separator-grey"></div>
                <section className="Topics">
                    <div className="Heading"><span className="Icon"><TopicIcon /></span><span className="Text">Manchester United</span></div>
                    <Tweet
                        Content={"More football coming up this week. The players' stamina and fitness will be tested"}
                        AttachedImagesProp={["/images/post-media3.jpg"]}
                        sender={{ handle: "@manutdGuy", name: "Man Utd Fan Club" }}
                        time="Dec 5"
                    />
                    <Tweet
                        Content={"More football coming up this week. The players' stamina and fitness will be tested"}
                        AttachedImagesProp={["/images/post-media.jpg", "/images/sample-image.jpg", "/images/post-media.jpg"]}
                        sender={{ handle: "@manutdGuy", name: "Man Utd Fan Club" }}
                        time="Dec 5"
                    />
                    <Tweet
                        Content={"More football coming up this week. The players' stamina and fitness will be tested"}
                        AttachedImagesProp={["/images/sample-image.jpg", "/images/post-media.jpg"]}
                        sender={{ handle: "@manutdGuy", name: "Man Utd Fan Club" }}
                        time="Dec 5"
                    />
                    <div className="Bottom">
                        <div className="Right"><span className="Icon"><TopicIcon /></span><span className="Text">Manchester United</span></div>
                        <div className="Button"><button className="FollowBtnWhite">Following</button></div>
                    </div>
                </section>
                <div className="separator-grey"></div>
                </div>
            </div>
            <div className="RightSide">
                <FollowSuggestions />
                <Footer />
            </div>
        </div>

    );
}

export default Explore;