import React from "react";
import MessageDisplay, {MessageDisplayProps} from "./MessageDisplay/MessageDisplay";
import AttachmentDisplay from "./AttachmentDisplay/AttachmentDisplay";

export type MessageContainerProps = {
    message: MessageDisplayProps;
    attachments?: string[];
}

/***
 * Top-level Message Object
 * @param props
 */
const MessageContainer: React.FC<MessageContainerProps> = props => {


    return (
        <div>
            <MessageDisplay body={props.message.body} author={props.message.author} />
            {props.attachments &&
                props.attachments.map((attachment) => {
                    return (<AttachmentDisplay attachment={attachment} />);
                })
            }

        </div>
    );
}

export default MessageContainer;
