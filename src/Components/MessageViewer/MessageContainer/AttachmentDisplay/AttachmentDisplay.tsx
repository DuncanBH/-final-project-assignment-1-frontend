import React, {useState} from "react";
import "./AttachmentDisplay.css"

export type AttachmentDisplayProps = {
    attachment: any; //TODO: make this a more precise type
}

/***
 * Display clickable images
 * @param props
 */
const AttachmentDisplay: React.FC<AttachmentDisplayProps> = (props) => {

    const [imageState, setImageState] = useState([]);

    // alert(`http://localhost:8080/api/channel/${props.channelId}/posts`);

    fetch(`http://localhost:8080/api/images/${props.attachment}`)
        .then((res) => res.json())
        .then((image) => {setImageState(image.bytes)});


    // const handleClick = () => {
    //     // @ts-ignore
    //     //Open image in new window TODO: replace with overlay
    //     window.open(props.attachment, '_blank').focus();
    // }

    //Display Image on page
    //return (<img src={props.attachment} onClick={handleClick} alt={""}/>);
    return (<div>
        {imageState ? (<img src={`data:image/jpeg;base64,${imageState}`} alt=""/>)
            : <img src="https://c.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt={"Loading..."}/>}
    </div>);
}

export default AttachmentDisplay