import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWord } from '../actions/words';
import zero from '../images/0.jpg'
import one from '../images/1.jpg'
import two from '../images/2.jpg'
import three from '../images/3.jpg'
import four from '../images/4.jpg'
import five from '../images/5.jpg'
import six from '../images/6.jpg'
import nineLetterWords from '../data/nineLetterWords.json'

let incorrect = 0
let correct = 0
let word = nineLetterWords.data[Math.floor(Math.random() * nineLetterWords.data.length)].word.split('')

const Hard = () => {
    const images = [zero, one, two, three, four, five, six]
    const [index, setIndex] = useState(0)
    const [hint, setHint] = useState(3)
    const [dash1, setDash1] = useState('_')
    const [dash2, setDash2] = useState('_')
    const [dash3, setDash3] = useState('_')
    const [dash4, setDash4] = useState('_')
    const [dash5, setDash5] = useState('_')
    const [dash6, setDash6] = useState('_')
    const [dash7, setDash7] = useState('_')
    const [dash8, setDash8] = useState('_')
    const [dash9, setDash9] = useState('_')
    const [done, setDone] = useState(false)
    const [tried, setTried] = useState('')

    const dispatch = useDispatch()
    const [search] = useState(null)

    useEffect(() => {
        dispatch(getWord(word.join('')));
    }, [search ,  dispatch]);

    const result = useSelector(state => state.search);
    console.log(result)

    console.log(word)

    const checkLetter = (e) => {
        let letter = e.target.value.toLowerCase()
        let check = 0
        e.target.value = ''
        console.log(letter)

        if (tried.indexOf(letter) === -1) {
            setTried(tried + letter)

            if (word[0] === letter && dash1 === '_') {
                correct++
                setDash1(letter.toUpperCase())
                check++
                checkWinLose()
            }
            if (word[1] === letter && dash2 === '_') {
                correct++
                setDash2(letter.toUpperCase())
                check++
                checkWinLose()
            }
            if (word[2] === letter && dash3 === '_') {
                correct++
                setDash3(letter.toUpperCase())
                check++
                checkWinLose()
            }
            if (word[3] === letter && dash4 === '_') {
                correct++
                setDash4(letter.toUpperCase())
                check++
                checkWinLose()
            }
            if (word[4] === letter && dash5 === '_') {
                correct++
                setDash5(letter.toUpperCase())
                check++
                checkWinLose()
            }
            if (word[5] === letter && dash6 === '_') {
                correct++
                setDash6(letter.toUpperCase())
                check++
                checkWinLose()
            }
            if (word[6] === letter && dash7 === '_') {
                correct++
                setDash7(letter.toUpperCase())
                check++
                checkWinLose()
            }

            if (word[7] === letter && dash8 === '_') {
                correct++
                setDash8(letter.toUpperCase())
                check++
                checkWinLose()
            }
            if (word[8] === letter && dash9 === '_') {
                correct++
                setDash9(letter.toUpperCase())
                check++
                checkWinLose()
            }
        
            if (check === 0) {
                console.log('incorrect')
                console.log(correct)
                incorrect++
                setIndex(index + 1)
                checkWinLose()
            }

        }
    }
    
    const checkWinLose = () => {
        console.log(correct)
        console.log(incorrect)
        if (incorrect === 6) {
            setDone(true)
            alert('You Lose!')
        }
        if (correct === 9) {
            setDone(true)
            alert('You Win!')
        }
    }

    const reset = () => {
        incorrect = 0
        correct = 0
        setTried('')
        setIndex(0)
        setHint(3)
        setDash1('_')
        setDash2('_')
        setDash3('_')
        setDash4('_')
        setDash5('_')
        setDash6('_')
        setDash7('_')
        setDash8('_')
        setDash9('_')
        word = nineLetterWords.data[Math.floor(Math.random() * nineLetterWords.data.length)].word.split('')
        setDone(false)
    }

    const getHint = () => {
        const dashes = [dash1, dash2, dash3, dash4, dash5, dash6, dash7, dash8, dash9]
        const setDashes = [setDash1, setDash2, setDash3, setDash4, setDash5, setDash6, setDash7, setDash8, setDash9]
        if (hint > 0) {
            setHint(hint - 1)
            for (let i = 0; i < dashes.length; i++) {
                if (dashes[i] === '_') {
                    setDashes[i](word[i].toUpperCase())
                    correct++
                    checkWinLose()
                    break;
                }
            }
        }
    }

    return (done) ? (
        <div>
            <button className='reset' onClick={() => reset()}>Reset</button>
            <h2 className='result'>{word.join('').toUpperCase()}</h2>
            {result.map((item) => {
                return (
                    <div>
                        <p className='result_part'> <strong>Part of speech: </strong> <em>{item.partOfSpeech}</em></p>
                        {item.definitions.map((definition) => {
                            return (
                                <p className='result_def'> <strong>Definition: </strong> <em>{definition.definition}</em> </p>
                            )
                        })}
                    </div>      
            )})}
        </div>
    ): (
        <div className='gameOuter'> 
            <div className='gameInner'>
                <img src={images[index]} alt="hangman" />
            </div>
            <div>
                <button className='reset' onClick={() => reset()}>Reset</button>
                <p className='dash'>{dash1} {dash2} {dash3} {dash4} {dash5} {dash6} {dash7} {dash8} {dash9}</p>
                <p className='tired'>[{tried.toUpperCase()}]</p>
                <input type='text' onChange={checkLetter} maxLength='1' autoFocus/>
                <button className='hint' onClick={() => getHint()}>Hint {hint}</button>
            </div>

        </div>
    )
}

export default Hard;