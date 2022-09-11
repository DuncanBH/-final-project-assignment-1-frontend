import React from "react";
import ChannelDisplay from "./ChannelDisplay/ChannelDisplay";
import {Container, Row} from "react-bootstrap";
import HomeDisplay from "./HomeDisplay/HomeDisplay";

type ChannelListerProps = {
    currentChannel: number;
    onSelectCallback: (channelId: number) => void;
}

const ChannelLister: React.FC<ChannelListerProps> = (props) => {

    const testIds = [1, 2, 3];
    return (
        <Container fluid className={"border border-right border-dark"}>
            <Row>
                <HomeDisplay channelId={0} onClickCallback={props.onSelectCallback}/>
            </Row>
            <Row>
                <ChannelDisplay channelId={1} onClickCallback={props.onSelectCallback} />
            </Row>
            <Row>
                <ChannelDisplay channelId={2} onClickCallback={props.onSelectCallback} />
            </Row>
            <Row>
                <ChannelDisplay channelId={3} onClickCallback={props.onSelectCallback} />
            </Row>
        </Container>
    )
}

export default ChannelLister;