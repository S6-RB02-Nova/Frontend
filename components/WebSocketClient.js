import React from 'react';
import SockJsClient from 'react-stomp';
import { BellIcon } from '@heroicons/react/outline';

class WebSocketClient extends React.Component {
  constructor(props) {
    super(props);
  }

  //Can be implemented to send responses back to the server, currently not used.
  //clientref currently undefined needs fixing before usable.
  sendMessage = (msg) => {
    this.clientRef.sendMessage('/topic/notification', msg);
  };

  //todo:update icon when a new notification is received
  //todo:add logic to open notifications page when icon is clicked.
  //todo: Implement proper logic upon "onMessage"
  render() {
    return (
      <div>
        <BellIcon className="w-10 h-10 text-blue-500"></BellIcon>

        <SockJsClient
          url="http://localhost:8084/notification"
          topics={['/topic/notification']}
          onMessage={(msg) => {
            console.info(msg);
          }}
          ref={(client) => {
            this.clientRef = client;
          }}
          debug={true}
        />
      </div>
    );
  }
}

export default WebSocketClient;
