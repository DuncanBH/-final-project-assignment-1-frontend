import React from "react";
import "./ChannelDisplay.css"

export type ChannelSelectorProps = {
    channelId : number;
    onClickCallback : (id :number) => void;
}

const ChannelDisplay : React.FC<ChannelSelectorProps> = (props) => {
    return (
        <div className="channelDisplay" style={{border: "1px black"}} onClick={ () => props.onClickCallback(props.channelId)}>
            Channel #{props.channelId}
        </div>
    )
}

export default ChannelDisplay;