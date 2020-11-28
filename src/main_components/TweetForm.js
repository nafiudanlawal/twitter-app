//import DpImagePlacholder from "../../public/images/dp-placeholder.jpg";
import { ReactComponent as ImageIcon }from "../icons/image.svg";
import { ReactComponent as ScheduleIcon }from "../icons/schedule.svg";
import { ReactComponent as PollIcon }from "../icons/poll.svg";
import { ReactComponent as GifIcon }from "../icons/gif.svg";
import { ReactComponent as EmojiIcon }from "../icons/emoji.svg";
import { ReactComponent as GlobeIcon }from "../icons/globe.svg";
import { ReactComponent as PlusCircleIcon }from "../icons/plusCircle.svg";
import TextareaAutosize from 'react-textarea-autosize';
import { useState } from "react";
import ProgressCircle from "./ProgressCircle";

const maxLength = 255;
function TweetForm(props) {
    
    const [text, setText] = useState("");
    const [progressCirclePercentage, setProgressCirclePercentage] = useState(0);
    const [progressCircleText, setProgressCircleText] = useState("");
    const [progressCircleStyle, setProgressCircleStyle] = useState("");
    

    const textChanged = (event, setText1 = setText) => {
        const value = event.target.value;
        setText1(value);

        let lengthPercentage = (value.length / maxLength) * 100;
        
        // Put text of count to maxLength
        if( value.length < maxLength  - 20){
            if ( lengthPercentage >= 0 && lengthPercentage <= 100 ) {
                setProgressCirclePercentage(lengthPercentage)
            }
        }else if(value.length > maxLength  - 20 && value.length <= maxLength){
            setProgressCirclePercentage(lengthPercentage);
            setProgressCircleText(maxLength -  value.length);
        }else{
            
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
                        <TextareaAutosize 
                        autoFocus 
                        value={text} 
                        placeholder="What's happening?"
                        onChange={textChanged}
                        cols="47"
                        />
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
                    <div className="FloatRightSide">
                        <div className="TextContentStat">
                            <span className="CountWheel"> 
                                <ProgressCircle strokeWidth={10} percentage={progressCirclePercentage} text={progressCircleText} style={progressCircleStyle}/> 
                            </span>
                            | 
                            <span className="PlusIcon"> 
                                <PlusCircleIcon /> 
                            </span>
                        </div>
                        <div className="SubmitBtnHolder">
                            <button className="SubmitBtn">Tweet</button>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default TweetForm;