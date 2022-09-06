import React, {useState} from 'react';
import './App.css';
import MessageViewer from "./MessageViewer/MessageViewer";
import ChannelLister from "./ChannelLister/ChannelLister";

function App() {
    const [currentChannel, setCurrentChannel] = useState(0);

    return (
        <div className="App">
            <ChannelLister currentChannel={currentChannel} onSelectCallback={(newChannel : number) => setCurrentChannel(newChannel)}/>
            <MessageViewer channelId={currentChannel} />
        </div>
    );
}

export default App;
