import "./App.css";
import { useState } from "react";
import { Keyboard } from './components/keyboard/Keyboard';
import { AudioContextStart } from "./components/audio-context-start/AudioContextStart";
import useMIDI from "./hooks/useMIDI";

function App() {
	useMIDI();
	const [startButtonVisible, setStartButtonVisible] = useState(true);

	const createAudioContextHandler = () => {
		window.AudioContext = window.AudioContext || window.webkitAudioContext;
		const ctx = new AudioContext();
        setStartButtonVisible(false);
		return ctx;
	};

	return (
		<div className="App">
			{/* {!startButtonVisible && 'Audio context started! Go on and play!'}
			{!startButtonVisible && <Keyboard />} */}
			<AudioContextStart visible={startButtonVisible} callback={createAudioContextHandler} />
		</div>
	);
}

export default App;
