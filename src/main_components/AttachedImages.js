const AttachedImages = ({AttachedImagesUrl = []}) => {
    const images_length = AttachedImagesUrl.length;
    if(images_length == 1){
        return (
            <div className="AttachedImage">
                <img src={AttachedImagesUrl[0]}/>
            </div>
        );
    }else if(images_length == 2){
        return (
            <div className="AttachedImage2">
                <img src={AttachedImagesUrl[0]}/>
                <img src={AttachedImagesUrl[1]}/>
            </div>
        );
    }else if(images_length == 3){
        return (
            <div className="AttachedImage3">
                <img src={AttachedImagesUrl[0]}/>
                <img src={AttachedImagesUrl[1]}/>
                <span><i className="icon icon-arrow-right"></i></span>
            </div>
        );
    }else if(images_length > 3){
        return (
            <div className="AttachedImage4">
                <img src={AttachedImagesUrl[0]}/>
                <img src={AttachedImagesUrl[1]}/>
                <img src={AttachedImagesUrl[2]}/>
                <img src={AttachedImagesUrl[3]}/>
                <span><i className="icon icon-arrow-right"></i></span>
            </div>
        );
    }else{
        return "";
    }
}

export default AttachedImages;