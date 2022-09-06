import MessageContainer from "./MessageContainer/MessageContainer";

export type MessageViewerProps = {
    channelId: number;
}

// import * as data from "../../dataformat.json" assert {type: 'json'}; //cool experimental syntax - requires config
let data = require("../../testdata.json");

const MessageViewer: React.FC<MessageViewerProps> = (props) => {

    return (
        <div>
            <h1>Welcome to channel {props.channelId}</h1>

            {data.map((message: any) => {
                if (message.channelId !== props.channelId) {
                    return;
                }

                return (<div>
                    <MessageContainer message={{body: message.messageBody, author: message.messageAuthorId}}
                                      attachments={message.messageAttachments} />
                </div>)
            })}
        </div>
    )
}

export default MessageViewer;