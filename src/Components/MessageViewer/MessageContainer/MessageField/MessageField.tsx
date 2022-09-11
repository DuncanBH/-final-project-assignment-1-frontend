import React from "react";

export type MessageFieldProps = {
    body: string;
    author: string;
}

/***
 * Display message contents and author
 * @param props
 */
const MessageField : React.FC<MessageFieldProps> = props => {
    return (
        <div>
            <h5>{props.author}</h5>
            <p>{props.body}</p>
        </div>
    );
}

export default MessageField;
