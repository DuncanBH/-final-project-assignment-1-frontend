import React from "react";
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
            {/*<MessageContainer message={{body: "Hi", author: "Epic Gamer"}} />*/}
            {/*<MessageContainer message={{body: "Hello", author: "Qwerty"}} attachments={[*/}
            {/*    "https://pbs.twimg.com/media/E-IXew-XEAQrZpy.jpg:large",*/}
            {/*    "https://pbs.twimg.com/media/E-IXew-XEAQrZpy.jpg:large",*/}
            {/*    "https://pbs.twimg.com/media/E-IXew-XEAQrZpy.jpg:large",*/}
            {/*    "https://pbs.twimg.com/media/E-IXew-XEAQrZpy.jpg:large",*/}
            {/*    "https://pbs.twimg.com/media/E-IXew-XEAQrZpy.jpg:large"*/}
            {/*]} />*/}
            {/*<MessageContainer message={{body: "Good morning", author: "JJ"}} />*/}
        </div>
    )
}

export default MessageViewer;