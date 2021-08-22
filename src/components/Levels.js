import React from 'react';
import {useHistory} from 'react-router-dom'

const Levels = () => {
    const history = useHistory()

    const handleClick = (level) => {
        history.push(`/levels/${level}`)
    }
    return (
        <div className="levels">
            <button onClick={() => {
                handleClick('easy')
            }}>Easy</button>
            <button onClick={() => {
                handleClick('medium')
            }}>Medium</button>
            <button onClick={() => {
                handleClick('hard')
            }}>Hard</button>
        </div>
    )
}

export default Levels;