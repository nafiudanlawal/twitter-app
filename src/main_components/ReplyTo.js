

const ReplyTo = ({UserHanle = "@nafiudanlawal"}) => {
    return (
        <span className="ReplyingTo">
            <span>Replying to </span>
            <span class='UserHandle'>{UserHanle}</span>
        </span>
    );
}

export default ReplyTo;