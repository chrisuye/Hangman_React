import React from 'react';
import {useHistory} from 'react-router-dom'


const Start = () => {

    const history = useHistory();

    return (
        <div>
            <h1>Hangman</h1>
            <button onClick={() => history.push('/levels')}>Start</button>
        </div>
        
    );
}

export default Start;