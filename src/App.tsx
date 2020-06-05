import React, {useState} from 'react';
import './App.css';
import axios from 'axios'

function App() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [isMessageSent, setIsMessageSent] = useState(false)

    const sendMessageHandler = () => {
        const local_url = 'http://localhost:3010'
        const heroku_url = 'https://gmail-back.herokuapp.com'
        axios.post(`${heroku_url}/send-message`, {email, name, message})
            .then(() => {
                setIsMessageSent(true)
            })
    }

    return (
        <div className="App">
            <input type="text" value={email} onChange={(e) => setEmail(e.currentTarget.value)}/>
            <input type="text" value={name} onChange={(e) => setName(e.currentTarget.value)}/>
            <input type="text" value={message} onChange={(e) => setMessage(e.currentTarget.value)}/>
            <button onClick={sendMessageHandler}>send message</button>
            <hr/>
            { isMessageSent && <h2>Message sent</h2> }
        </div>
    );
}

export default App;
