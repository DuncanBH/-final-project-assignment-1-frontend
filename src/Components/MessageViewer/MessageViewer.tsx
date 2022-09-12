import MessageContainer from "./MessageContainer/MessageContainer";
import {useEffect, useState} from "react";
import MessageField from "./MessageContainer/MessageField/MessageField";

export type MessageViewerProps = {
    channelId: number;
}

// import * as data from "../../dataformat.json" assert {type: 'json'}; //cool experimental syntax - requires config
// let data = require("../../testdata.json");

/***
 * Container for entire message system
 * @param props
 * @constructor
 */
const MessageViewer: React.FC<MessageViewerProps> = (props) => {

    const [messagesState, setMessagesState] = useState([]);

    const [newMessage, setNewMessage] = useState(false);
    if (newMessage) {
        setNewMessage(false);
    }

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
        <div className={"container-fluid d-flex flex-column vh-100 overflow-hidden"}>

            <h1 className={"px-0 flex-shrink-0 p-1"}>
                {(props.channelId) ? (`Welcome to channel ${props.channelId}`) : ("Home")}
            </h1>

            {props.channelId ?
                (<div className={"row flex-grow-1 overflow-hidden"}>
                    <div className={"mh-100 overflow-auto py-2 flex-column"}>
                        {hasMessages ?
                            messagesState.map((message: any) => {
                                return (<div className={"p-1"}>
                                    <hr/>
                                    <MessageContainer message={{
                                        body: message.caption,
                                        author: "Anonymous User" /*TODO: Add support for authors*/
                                    }}
                                                      attachments={message.imageId} />
                                </div>)
                            })
                            : <img src="https://c.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt={"Loading..."} />}
                    </div>
                </div>)
                :
                (<div>Home Page</div>)
            }

            {(props.channelId !== 0) &&
                <div className={"row flex-shrink-0"}>
                    <MessageField channelId={props.channelId} user={"Anonymous User"} updateCallback={(update) => setNewMessage(update)} />
                </div>
            }
        </div>
    )
}

export default MessageViewer;