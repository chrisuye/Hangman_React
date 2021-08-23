import React from 'react';
import {useHistory} from 'react-router-dom'


const Start = () => {

    const history = useHistory();

    return (
        <div className='start'>
            <div className='start-child'>   
                <h1 className='start'>Hangman</h1>
                <button className='start' onClick={() => history.push('/levels')}>Start</button>
            </div>
        </div>
        
    );
}

export default Start;