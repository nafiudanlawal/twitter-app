const { default: FollowUserItem } = require("./FollowUserItem")

const FollowSuggestions = () => {
    return (
        <div className="FollowList">
            <div className="Heading">
                <div className="Content">
                    <span className="title">Who to follow</span>
                </div>
            </div>
            <div className="UserList">
                <FollowUserItem DP="/images/dp-placeholder.jpg" Name="Macintosh Burglar" Handle="@CatBuglar" />
                <FollowUserItem DP="/images/dp-placeholder.jpg" Name="Walter White" Handle="@BreakingBad" />
                <FollowUserItem DP="/images/dp-placeholder.jpg" Name="Steven Segal" Handle="@KatakeKid" />
            </div>
            <div className="Footer">
                <span><a href="">Show More</a></span>
            </div>
        </div>
    )
}

export default FollowSuggestions;