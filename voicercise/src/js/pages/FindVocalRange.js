import Tone from 'tone'
import React from 'react';
import Header from './Header.js'
import { Link } from 'react-router';
import { LoginLink } from 'react-stormpath';
import DocumentTitle from 'react-document-title';

class StaffDisplay extends React.Component{
	render(){
		return(
			<div>Hello World</div>
			)
	}
}

class NoteDisplay extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>{this.props.display()}</div>
			)
	}
}

export default class FindVocalRange extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    				notes: ['C','C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
	    				noteIndex: 5,
	    				octave: 4,
	    				isSharp: false,
					  	synth: new Tone.Synth().toMaster(),
					  	isDesc: true,
					  	lowestnote: 'C0',
					  	highestnote: 'B10'
					  };
		this.playTone = this.playTone.bind(this);
		this.stopTone = this.stopTone.bind(this);
		this.halfstep = this.halfstep.bind(this);
		this.displayNote = this.displayNote.bind(this);
		this.goUp = this.goUp.bind(this);
  	}

  	playTone(){
		
		var tone = this.state.notes[this.state.noteIndex]+this.state.octave;
		console.log(tone);
		this.state.synth.triggerAttack(tone);

	}

	displayNote(){
		return <p>{this.state.notes[this.state.noteIndex]+this.state.octave}</p>
	}

	stopTone(){
		
		this.state.synth.triggerRelease();
	}

	halfstep(){
		var tone = this.state.notes[this.state.noteIndex]+this.state.octave;

		console.log("Run halfstep");
		if(this.state.isDesc){
			this.setState({lowestnote: tone})

			if(this.state.noteIndex == 0){
	
				this.setState({
					noteIndex:this.state.notes.length-1,
					octave:this.state.octave-1
				})
			}
			else{
		
				this.setState({noteIndex: this.state.noteIndex-1});
			}
		}
		else{
			this.setState({highestnote: tone})

			if(this.state.noteIndex == this.state.notes.length-1){
				this.setState({
					noteIndex:0,
					octave:this.state.octave+1
				})
			}
			else{
				this.setState({noteIndex:this.state.noteIndex+1});
			}
		}
	}

	goUp(){
		if(this.state.isDesc){
			this.setState({
							isDesc: false,
							noteIndex: 5,
							octave: 4
							});
		}
		else{

		}
	}

	render(){
		return(
			<div>
				<StaffDisplay />
				<NoteDisplay display={this.displayNote} />
				<button onMouseDown={this.playTone} onMouseUp={this.stopTone}>Click this</button>
				<button onClick={this.halfstep}>I can sing this easy</button>
				<button onClick={this.goUp}>Can't sing anymore more</button>
				<button onClick={this.goUp}>To hard to sing</button>
			</div>
		)

	}
}