# metronome-synth-info-lib
A JavaScript library that provides functionality for handling a metronome, synthesizing sounds, and retrieving information about the metronome and synth.
## Installation

You can install this library using npm or yarn:

```
npm install metronome-synth-info-lib
or
yarn add metronome-synth-info-lib
```
## Usage
### Initialize the Metronome and Synth
```
const Metronome = require('metronome-synth-info-lib').Metronome;
const Synth = require('metronome-synth-info-lib').Synth;

const metronome = new Metronome(120); // Initialize the metronome with a tempo of 120 BPM
const synth = new Synth(); // Initialize the synthesizer
```
### Start the Metronome
```
metronome.start(); // Start the metronome
```
### Synthesize Sounds
```
const note = 60; // MIDI note value (e.g., middle C)
const duration = 0.5; // Duration in seconds

synth.playNote(note, duration); // Trigger a note with the specified duration
```
### Retrieve Metronome and Synth Information
```
const InfoLib = require('metronome-synth-info-lib').InfoLib;
const infoLib = new InfoLib();

const metronomeInfo = infoLib.getMetronomeInfo(metronome); // Get metronome information
const synthInfo = infoLib.getSynthInfo(synth); // Get synthesizer information

console.log('Metronome Info:', metronomeInfo);
console.log('Synth Info:', synthInfo);
```
### Stop and Release Resources
```
metronome.stop(); // Stop the metronome
synth.release(); // Release synthesizer resources
```
