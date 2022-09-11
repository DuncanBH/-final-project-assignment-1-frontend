import React, {useState} from 'react';
import MessageViewer from "./MessageViewer/MessageViewer";
import ChannelLister from "./ChannelLister/ChannelLister";

import {Col, Container, Row} from "react-bootstrap";

import './App.css';

function App() {
    //Channel States
    const [currentChannel, setCurrentChannel] = useState(0);

    //Authentication States
    const [userName] = useState();

    return (
        //Main page
        <Container fluid className={"bg-secondary fill"}>
            <Row className={"row"}>
                {/*Channels*/}
                <Col className={"col-3 bg-dark fill p-3"}>
                    <ChannelLister currentChannel={currentChannel}
                                   onSelectCallback={(newChannel: number) => setCurrentChannel(newChannel)} />
                </Col>

                {/*Message*/}
                <Col>
                    <MessageViewer channelId={currentChannel} />
                </Col>
            </Row>
        </Container>
    );
}

export default App;
