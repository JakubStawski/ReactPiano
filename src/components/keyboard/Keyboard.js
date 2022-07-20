import "./Keyboard.scss";
import { lowestNote, highestNote } from './config';
import { useEffect, useState } from "react";
import useMIDI from "../../hooks/useMIDI";
import { Key } from "../key/Key";

export const Keyboard = () => {
    const [pianoKeys, setPianoKeys] = useState([]);
    // const activeKeys = useMIDI();

    // All avaiable piano keys calculated from lowest to highest note put into an array. Only once.
    useEffect(() => {
        const pianoKeysArray = [];
        for (let i = lowestNote; i <= highestNote; i++) {
            pianoKeysArray.push(i);
        }

        setPianoKeys(pianoKeysArray);
    }, []);


	const pianoBoard = pianoKeys.map((key) => {
        // const activeState = activeKeys.includes(key);
        return <Key key={`note-${key}`} keyCode={key}/>
    });

	return <ul className='pianoBoard'>{pianoBoard}</ul>;
};
