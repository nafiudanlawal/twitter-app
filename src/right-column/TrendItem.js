const TrendingItem = ({Source, Topic, Stats}) => {
    return (
        <div className="TrendingListItems">
            <div className="ListItem">
                <div className="Source">{Source}</div>
                <div className="Topic">{Topic}</div>
                <div className="Stats">{Stats}</div>
            </div>
        </div>
    )
}

export default TrendingItem;