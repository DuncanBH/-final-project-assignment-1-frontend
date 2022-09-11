import React from "react";
// import "./HomeDisplay.css"
import {Button} from "react-bootstrap";

export type HomeSelectorProps = {
    channelId: number;
    onClickCallback: (id: number) => void;
}

const HomeDisplay: React.FC<HomeSelectorProps> = (props) => {
    return (
        <Button className="btn btn-secondary m-2"
                onClick={() => props.onClickCallback(props.channelId)}>
            Home
        </Button>
    )
}

export default HomeDisplay;