// Import necessary modules and libraries
const Metronome = require('./metronome');
const Synth = require('./synth');
const InfoLib = require('./info-lib');

// Initialize the metronome
const metronome = new Metronome(120); // 120 BPM

// Initialize the synthesizer
const synth = new Synth();

// Initialize the information library
const infoLib = new InfoLib();

// Define a callback function for the metronome tick event
function onMetronomeTick() {
  // Trigger a synth note on each metronome tick
  const note = Math.random() * 100; // Generate a random note value
  const duration = 0.2; // Duration of the note in seconds
  synth.playNote(note, duration);
}

// Attach the callback function to the metronome tick event
metronome.on('tick', onMetronomeTick);

// Start the metronome
metronome.start();

// Provide information about the metronome and synth
const metronomeInfo = infoLib.getMetronomeInfo(metronome);
const synthInfo = infoLib.getSynthInfo(synth);

console.log('Metronome Info:', metronomeInfo);
console.log('Synth Info:', synthInfo);

// Stop the metronome and release resources when done
setTimeout(() => {
  metronome.stop();
  synth.release();
}, 60000); // Stop after 1 minute (adjust as needed)
