import React from "react";
import "./AttachmentDisplay.css"

export type AttachmentDisplayProps = {
    attachment: any; //TODO: make this a more precise type
}

/***
 * Display clickable images
 * @param props
 */
const AttachmentDisplay: React.FC<AttachmentDisplayProps> = (props) => {
    const handleClick = () => {
        // @ts-ignore
        //Open image in new window TODO: replace with overlay
        window.open(props.attachment, '_blank').focus();
    }

    //Display Image on page
    //return (<img src={props.attachment} onClick={handleClick} alt={""}/>);
    return (<div>
        {props.attachment.content}
    </div>);
}

export default AttachmentDisplay