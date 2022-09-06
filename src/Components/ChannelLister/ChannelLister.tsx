import React from "react";
import ChannelDisplay from "./ChannelDisplay/ChannelDisplay";

type ChannelListerProps = {
    currentChannel : number;
    onSelectCallback: (channelId: number) => void;
}

const ChannelLister: React.FC<ChannelListerProps> = (props) => {

    const testIds = [1,2,3];
    return (
        <div>

            <ChannelDisplay channelId={1} onClickCallback={props.onSelectCallback} />
            <ChannelDisplay channelId={2} onClickCallback={props.onSelectCallback} />
            <ChannelDisplay channelId={3} onClickCallback={props.onSelectCallback} />
        </div>
    )
}

export default ChannelLister;