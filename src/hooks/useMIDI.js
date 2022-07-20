import Soundfont from 'soundfont-player';

export const useMIDI = () => {

	Soundfont.instrument(new AudioContext(), 'acoustic_grand_piano').then(function (grandPiano) {

		const failure = () => {
			console.log("Could not connect MIDI");
		};

		const init = (midiAccess) => {
			const inputs = midiAccess.inputs;

			inputs.forEach(() => {
				midiAccess.inputs.forEach(function (midiInput) {
					grandPiano.listenToMidi(midiInput);
				})
			});
		};

		if (navigator.requestMIDIAccess) {
			navigator.requestMIDIAccess().then(init, failure);
		}

	});
};

export default useMIDI;

