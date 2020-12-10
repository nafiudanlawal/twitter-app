import { ReactComponent as CogIcon } from "./icons/cog.svg";
import SearchBox from "./right-column/SearchTweeter";
import { ReactComponent as SearchIcon } from "./icons/magnifier.svg";


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
                <section>
                    <div className="Top">
                        <img src="/images/post-media1.jpg" />
                    </div>
                </section>
            </div>
            <div className="RightSide">
                sssssssssssssssssssssssssssssssss
            </div>
        </div>

    );
}

export default Explore;