import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { get7LetterWords } from '../actions/words';
import zero from '../images/0.jpg'
import one from '../images/1.jpg'
import two from '../images/2.jpg'
import three from '../images/3.jpg'
import four from '../images/4.jpg'
import five from '../images/5.jpg'
import six from '../images/6.jpg'

let incorrect = 0
let correct = 0
let tried = []

const Medium = () => {
    const dispatch = useDispatch()
    const [words] = useState(null)
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


    useEffect(() => {
        dispatch(get7LetterWords())
    }, [words, dispatch])

    const word = useSelector(state => state.sevenLetterWords)
    console.log(word)

    const checkLetter = (e) => {
        let letter = e.target.value
        let check = 0
        e.target.value = ''
        console.log(letter)

        if (!tried.includes(letter)) {
            tried.push(letter)

            if (word[0] === letter) {
                correct++
                setDash1(letter)
                check++
                checkWinLose()
            }
            if (word[1] === letter) {
                correct++
                setDash2(letter)
                check++
                checkWinLose()
            }
            if (word[2] === letter) {
                correct++
                setDash3(letter)
                check++
                checkWinLose()
            }
            if (word[3] === letter) {
                correct++
                setDash4(letter)
                check++
                checkWinLose()
            }
            if (word[4] === letter) {
                correct++
                setDash5(letter)
                check++
                checkWinLose()
            }
            if (word[5] === letter) {
                correct++
                setDash6(letter)
                check++
                checkWinLose()
            }
            if (word[6] === letter) {
                correct++
                setDash7(letter)
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
            alert('You Lose!')
        }
        if (correct === 7) {
            alert('You Win!')
        }
    }

    const reset = () => {
        incorrect = 0
        correct = 0
        tried = []
        setIndex(0)
        setHint(3)
        setDash1('_')
        setDash2('_')
        setDash3('_')
        setDash4('_')
        setDash5('_')
        setDash6('_')
        setDash7('_')
    }

    const getHint = () => {
        const dashes = [dash1, dash2, dash3, dash4, dash5, dash6, dash7]
        const setDashes = [setDash1, setDash2, setDash3, setDash4, setDash5, setDash6, setDash7]
        if (hint > 0) {
            setHint(hint - 1)
            for (let i = 0; i < dashes.length; i++) {
                if (dashes[i] === '_') {
                    setDashes[i](word[i])
                    correct++
                    checkWinLose()
                    break;
                }
            }
        }
    }

    return (
        <div className='gameOuter'> 
            <div className='gameInner'>
                <h1>Medium</h1> 
                <img src={images[index]} alt="zero" />
            </div>
            <div>
                <button onClick={() => reset()}>Reset</button>
                <p>{dash1} {dash2} {dash3} {dash4} {dash5} {dash6} {dash7}</p>
                <input type='text' onChange={ (e) => checkLetter(e)}/>
                <br/>
                <button onClick={() => getHint()}>Hint</button>
            </div>

        </div>
    )
}

export default Medium;