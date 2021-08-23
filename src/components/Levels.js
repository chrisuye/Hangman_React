import React from 'react';
import {useHistory} from 'react-router-dom'

const Levels = () => {
    const history = useHistory()

    const handleClick = (level) => {
        history.push(`/levels/${level}`)
    }
    return (
        <div className="levels">
            <button className="easy" onClick={() => {
                handleClick('easy')
            }}>Easy</button>
            <br/>
            <button className="medium" onClick={() => {
                handleClick('medium')
            }}>Medium</button>
            <button className="hard" onClick={() => {
                handleClick('hard')
            }}>Hard</button>
        </div>
    )
}

export default Levels;