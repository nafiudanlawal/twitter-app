import { Component } from 'react';

class UserProfileModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: { top: props.anchorPosition.y + 5 + "px", left: props.anchorPosition.x + 5 + "px", display: "unset" }
        };
    }

    handleMouseLeave = () => {
        this.setState({ style: { display: "none" } });
        console.log("mouse left modal");
        ++this.childKey;
    }
    render() {
        return (
            <div className="UserInfoModal" style={this.state.style} onMouseLeave={this.handleMouseLeave}>
                <div className="Top">
                    <div className="dp">
                        <img src="/images/dp-placeholder.jpg" alt="" />
                    </div>
                    <div className="Button">
                        <button className="FollowBtnWhite">Follow</button>
                    </div>
                </div>
                <div className="Name">
                    Ghana Electoral Commision
                </div>
                <div className="Handle">
                    @jean_mensah
                </div>
                <div className="Bio">
                    The commissioner for Ghana's EC. Honest and respectable individual. A role model for many girls in the country.
                </div>
                <div className="Stats">
                    <div className="Number">2,105<span className="Static">Following</span></div><div className="Number" >2,344<span className="Static">Followers</span></div>
                </div>
                <div className="MutualFollows">
                    <div className="DpStack">
                        <img src="/images/dp-placeholder.jpg" alt="" />
                        <img className="Img2" src="/images/dp-placeholder.jpg" alt="" />
                        <img className="Img3" src="/images/dp-placeholder.jpg" alt="" />
                    </div>
                    <div className="Text">
                        Followed By nafiudanlawal,peter, annabel and 15 others
                    </div>
                </div>
            </div>
        );
    }
}
export default UserProfileModal;