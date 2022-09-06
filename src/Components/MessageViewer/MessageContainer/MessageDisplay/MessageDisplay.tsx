import React from "react";

export type MessageDisplayProps = {
    body: string;
    author: string;
}

/***
 * Display message contents and author
 * @param props
 */
const MessageDisplay : React.FC<MessageDisplayProps> = props => {
    return (
        <div>
            <h5>{props.author}</h5>
            <p>{props.body}</p>
        </div>
    );
}

export default MessageDisplay;
