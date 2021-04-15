import React, {useState } from 'react';
import Button from './Components/Button';
import Playground from './Components/Playground';
import randomNum from './helper/randomNum';
import './Styles.css';

export default function App() {
    const [arrowPos, setArrowPos] = useState(0);
    const [arrowVisible, setArrowVisible] = useState(0);
    const [clicked, setClicked] = useState(true);
    const [power, setPower] = useState(0);
    const [target, setTarget] = useState(0);
    const [score, setScore] = useState(0);
    let date1 = new Date();
    let date2 = new Date();

    function calculateScore() {
        const distance = power * 5 / 10;
        console.log(`shot distance ${distance}`);
        const diference = Math.abs(distance - target);
        switch (diference) {
            case ((diference >= 2 && diference < 3) || (diference <= 3 && diference > 2)):
                setScore(score + 1)
                break;
            case ((diference >= 1  && diference < 2)|| (diference <= 2 && diference > 1)):
                setScore(score + 3)
                break;
            case ((diference >= 0 && diference < 1) || (diference <= 1 && diference > 0)):
                setScore(score + 5)
                break;
            default:
                break;
        }
    }
    function getRandomTarget() {
        const random = randomNum(20, 100);
        console.log(random, "distance to the target")
        setTarget(random);
    }
    function fireArrow() {
        if (clicked) {
            date1 = new Date();
            setClicked(false);
            getRandomTarget();
            return;
        }
        const targetPos = document.querySelector('.target').offsetLeft;
        date2 = new Date()
        if (arrowPos === targetPos) {
            setArrowVisible(0);
            setArrowPos(0);
            setClicked(true);
            return
        }
        setPower(Math.abs(date2.getMilliseconds() - date1.getMilliseconds()));
        setArrowVisible(1);
        setArrowPos(targetPos);
        calculateScore();
    }
    return (
        <div className="root">
            <Playground arrowX={arrowPos} arrowVisible={arrowVisible} />
            <div>{score}</div>
            <Button onClick={fireArrow} />
        </div>
    )
}