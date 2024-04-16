import React, { useState } from 'react';

const App = () => {
  const [userAMessages, setUserAMessages] = useState([]);
  const [userBMessages, setUserBMessages] = useState([]);
  const [newMessageA, setNewMessageA] = useState('');
  const [newMessageB, setNewMessageB] = useState('');

  const handleMessageSendA = () => {
    if (newMessageA.trim() !== '') {
      const newMessageObj = {
        text: newMessageA,
        sender: 'A',
        timestamp: new Date().toISOString()
      };
      setUserAMessages([...userAMessages, newMessageObj]);
      setNewMessageA('');
    }
  };

  const handleMessageSendB = () => {
    if (newMessageB.trim() !== '') {
      const newMessageObj = {
        text: newMessageB,
        sender: 'B',
        timestamp: new Date().toISOString()
      };
      setUserBMessages([...userBMessages, newMessageObj]);
      setNewMessageB('');
    }
  };

  return (
    <div className="app">
      <div className="user-section">
        <h2>User A</h2>
        <div className="message-section">
          <h3>Messages from User B</h3>
          <div className="message-container">
            {userBMessages.map((message, index) => (
              <div key={index} className="message from-b">
                <p>{message.text}</p>
                <p className="timestamp">Sent by B at: {new Date(message.timestamp).toLocaleString()}</p>
              </div>
            ))}
          </div>
          <input
            type="text"
            value={newMessageA}
            onChange={(e) => setNewMessageA(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={handleMessageSendA}>Send</button>
        </div>
      </div>
      <div className="user-section">
        <h2>User B</h2>
        <div className="message-section">
          <h3>Messages from User A</h3>
          <div className="message-container">
            {userAMessages.map((message, index) => (
              <div key={index} className="message from-a">
                <p>{message.text}</p>
                <p className="timestamp">Sent by A at: {new Date(message.timestamp).toLocaleString()}</p>
              </div>
            ))}
          </div>
          <input
            type="text"
            value={newMessageB}
            onChange={(e) => setNewMessageB(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={handleMessageSendB}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default App;
