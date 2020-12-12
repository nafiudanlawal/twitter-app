const NewsItem = ({Headline, Topic, CoverImageUrl, Time}) => {
    return (
        <div className="NewsListItems">
            <div className="NewsItem">
                <div>
                    <div className="Topic">{Topic} · {Time}</div>
                    <div className="Headline">{Headline}</div>
                </div>
                <div>
                    <div className="CoverImage">
                        <img src={CoverImageUrl} /> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsItem;