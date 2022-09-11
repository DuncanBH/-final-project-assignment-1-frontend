import MessageContainer from "./MessageContainer/MessageContainer";
import {useEffect, useState} from "react";

export type MessageViewerProps = {
    channelId: number;
}

// import * as data from "../../dataformat.json" assert {type: 'json'}; //cool experimental syntax - requires config
// let data = require("../../testdata.json");

const MessageViewer: React.FC<MessageViewerProps> = (props) => {

    const [messagesState, setMessagesState] = useState([]);

    useEffect(() => {
        // alert(`http://localhost:8080/api/channel/${props.channelId}/posts`);

        if (props.channelId === 0) {
            setMessagesState([]);
            return;
        }


        //todo: de-braindead this
        fetch(`http://localhost:8080/api/channel/${props.channelId}/posts`)
            .then((res) => res.json())
            .then((messageArray) => {
                const newMessageState = messageArray.map((message: any) => {
                    return {postId: message.postId, imageId: message.imageId, caption: message.caption};
                });
                setMessagesState(newMessageState);
            });
    }, [props.channelId]);

    const hasMessages = messagesState.length > 0;

    return (
        <div>
            {(props.channelId) ? (<h1>Welcome to channel {props.channelId}</h1>) : (<h1>Home</h1>)}

            {hasMessages ?
                messagesState.map((message: any) => {
                    return (<div>
                        <MessageContainer message={{body: message.caption, author: "Anonymous User" /*TODO: Add support for authors*/}}
                                          attachments={message.imageId} />
                    </div>)
                })
                : <img src="https://c.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt={"Loading..."}/>}
        </div>
    )
}

export default MessageViewer;