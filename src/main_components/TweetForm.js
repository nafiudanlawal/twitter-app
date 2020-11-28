//import DpImagePlacholder from "../../public/images/dp-placeholder.jpg";
import { ReactComponent as ImageIcon }from "../icons/image.svg";
import { ReactComponent as ScheduleIcon }from "../icons/schedule.svg";
import { ReactComponent as PollIcon }from "../icons/poll.svg";
import { ReactComponent as GifIcon }from "../icons/gif.svg";
import { ReactComponent as EmojiIcon }from "../icons/emoji.svg";
import { ReactComponent as GlobeIcon }from "../icons/globe.svg";
import { ReactComponent as PlusIcon }from "../icons/plus.svg";
import { ReactComponent as ProgressIcon }from "../icons/progress-circle.svg";
import { useState } from "react";


function TweetForm(props) {
    
    const [text, setText] = useState("");

    const textChanged = (event, setText1 = setText) => {
        const value = event.target.value;
        setText1(value);
        console.log(value.length);
        let circle = document.querySelector('.progress-ring__circle');
        console.log(circle);
        
        let radius = circle.r.baseVal.value;
        let circumference = radius * 2 * Math.PI;
        console.log(radius);
        console.log(circumference);
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = `${circumference}`;

        function setProgress(percent) {
            const offset = circumference - percent / 100 * circumference;
            circle.style.strokeDashoffset = offset;
        }

        if (value < 101 && value >= 0) {
            setProgress(80);
        }
    };
    
    return ( 
        <div className="TweetForm" >
            <div className="LeftDP" >
                <div className="DpHolder">
                    <img src="/images/dp-placeholder.jpg" alt ="DpImagePlacholder" />
                </div>
            </div> 
            <div className="FormArea" >
                <div className="FormBody">
                    <div className="">
                        <textarea 
                        value={text} 
                        placeholder="What's happening?"
                        onChange={textChanged}
                        >
                            
                        </textarea> 
                    </div>
                   <div className="publicity-area">
                       <button className="PublicityButton">
                           <span className="icon"><GlobeIcon /></span>
                           Everyone can reply
                        </button>
                   </div>
                    <div className="divider"></div>
                </div>
                
                <div className="FormBottom">
                    <div className="IconsHolder">
                        <ul className="IconButtonsList">
                            <li className="IconButtonsListItem">
                                <ImageIcon />
                            </li>
                            <li className="IconButtonsListItem">
                                <GifIcon />
                            </li>
                            <li className="IconButtonsListItem">
                                <PollIcon />
                            </li>
                            <li className="IconButtonsListItem">
                                <EmojiIcon />
                            </li>
                            <li className="IconButtonsListItem">
                                <ScheduleIcon />
                            </li>
                        </ul>
                    </div>
                    <div className="textContentStat">
                        <span className="CountWheel"> <ProgressIcon className="ProgressRing" /> </span> | <span className="PlusIcon"> <PlusIcon /> </span>
                    </div>
                    <div className="SubmitBtnHolder">
                        <button className="SubmitBtn">Tweet</button>
                    </div>
                </div>
                
            </div> 
        </div>
    );
}

export default TweetForm;