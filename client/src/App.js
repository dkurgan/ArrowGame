import React, {useState } from 'react';
import Button from './Components/Button';
import Playground from './Components/Playground';
import randomNum from './helper/randomNum';
import './Styles.css';

export default function App() {
    const [arrowPos, setArrowPos] = useState(0);
    const [arrowVisible, setArrowVisible] = useState(0);
    const [clicked, setClicked] = useState(true);
    const [target, setTarget] = useState(0);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(0.0);
    const intervalId = setInterval(() => setTimer(timer + 0.1), 100);
    const [intervalState, setIntervalState] = useState(null);
    function calculateScore() {
        const distance = timer * 5 * 10;
        console.log(`shot distance ${distance}`);
        const diference = Math.abs(distance - target);
        switch (diference) {
            case (diference >= 2 && diference <= 3):
                setScore(score + 1)
                break;
            case (diference >= 1  && diference <= 2):
                setScore(score + 3)
                break;
            case (diference >= 0 && diference < 1):
                setScore(score + 5)
                break;
            default:
                break;
        }
        setTimer(0);
    }
    function getRandomTarget() {
        const random = randomNum(20, 100);
        console.log(random, "distance to the target")
        setTarget(random);
    }
    function fireArrow() {
        if (clicked) {
            setIntervalState(intervalId);
            setClicked(false);
            getRandomTarget();
            return;
        }
        const targetPos = document.querySelector('.target').offsetLeft;
        const archer = document.querySelector('.archer').offsetLeft;
        setArrowPos(archer);
        if (arrowPos === targetPos) {
            setArrowVisible(0);
            setArrowPos(0);
            setClicked(true);
            return
        }
        clearInterval(intervalState);
        calculateScore();
        console.log(timer)
        setArrowVisible(1);
        setArrowPos(targetPos);
    }
    return (
        <div className="root">
            <Playground arrowX={arrowPos} arrowVisible={arrowVisible} />
            <div>{score}</div>
            <Button onClick={fireArrow} />
        </div>
    )
}