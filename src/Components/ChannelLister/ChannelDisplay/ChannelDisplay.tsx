import React from "react";
import "./ChannelDisplay.css"
import {Button} from "react-bootstrap";

export type ChannelSelectorProps = {
    channelId: number;
    onClickCallback: (id: number) => void;
}

const ChannelDisplay: React.FC<ChannelSelectorProps> = (props) => {
    return (
        <Button className="btn btn-secondary m-2"
                onClick={() => props.onClickCallback(props.channelId)}>
            Channel #{props.channelId}
        </Button>
    )
}

export default ChannelDisplay;