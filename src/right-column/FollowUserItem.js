import FollowSuggestions from "./FollowSuggestions"


const FollowUserItem = ({DP, Name, Handle}) => {
    return (
        <div className="UserItem">
            <div className="dp">
                <img src={DP} alt ="" />
            </div>
            <div className="RightColumn">
                <div className="Content">
                    <div className="Name">
                        {Name}
                    </div>
                    <div className="Handle">
                        {Handle}
                    </div>
                </div>
                <div className="Button">
                    <button className="FollowBtnWhite">Follow</button>
                </div>
            </div>
        </div>
    )
}

export default FollowUserItem;