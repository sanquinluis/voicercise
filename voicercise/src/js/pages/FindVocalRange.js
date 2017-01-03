import Tone from 'tone'
import Vex from 'vexflow'
import React from 'react';
import Header from './Header.js'
import { Link } from 'react-router';
import { LoginLink } from 'react-stormpath';
import DocumentTitle from 'react-document-title';

class StaffDisplay extends React.Component{
	constructor(props){
		super(props);
		

		this.state = {
			note: "C",
			octave: "4"
		}
	}



	componentDidMount(){

		var VF = Vex.Flow;
		var renderer
		var context;
		var treble_staff;
		var bass_staff;
		
		
		this.drawGrandStaff = function(){
			var display = document.getElementById("myCanvas")
			var renderer = new VF.Renderer(display, VF.Renderer.Backends.CANVAS); 

			renderer.resize(450,300);

			context = renderer.getContext();
			context.clearRect(0, 0, display.width, display.height);
			context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
			
			treble_staff = new VF.Stave(20, 40, 300);
			bass_staff = new VF.Stave(20, 150, 300);

			treble_staff.addClef("treble").addTimeSignature("4/4");
			bass_staff.addClef("bass").addTimeSignature("4/4");

			var brace = new VF.StaveConnector(treble_staff, bass_staff).setType(3); // 3 = brace
			var lineRight = new VF.StaveConnector(treble_staff, bass_staff).setType(6);
			var lineLeft = new VF.StaveConnector(treble_staff, bass_staff).setType(1);


			treble_staff.setContext(context).draw();
			bass_staff.setContext(context).draw();

			brace.setContext(context).draw();
			lineLeft.setContext(context).draw();
			lineRight.setContext(context).draw();
		}.bind(this)

		console.log(this);

		this.drawNote = function(note_name, octave){
		
			// var note_name = this.state.note;
			// var octave = this.state.octave;

			this.drawGrandStaff()
			
			var clef_name = (octave < 4) ? "bass" : "treble";
			var stave = (octave < 4) ? bass_staff : treble_staff;

			if(note_name.length == 2){
				var notes = [new VF.StaveNote({clef: clef_name, keys: [note_name+"/"+octave], duration: "w" }).addAccidental(0, new VF.Accidental("#"))]
			}
			else{
				var notes = [new VF.StaveNote({clef: clef_name, keys: [note_name+"/"+octave], duration: "w" })]
			}
			var voice = new VF.Voice({num_beats: 4,  beat_value: 4});
			voice.addTickables(notes);

			var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);

			voice.draw(context, stave);
		
		}.bind(this);

		this.drawNote(this.props.note, this.props.octave);

	}

	componentWillReceiveProps(nextProps){
		if(nextProps.note != this.props.note){
			this.drawNote(nextProps.note, nextProps.octave);
		}
	}

	render(){

		return(
			<canvas id="myCanvas" style={{width:'450px', height:'300px'}}></canvas>

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
					  	highestnote: 'B10',
					  	rangeFound: false
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
		if(!this.state.rangeFound)
			return <p>{this.state.notes[this.state.noteIndex]+this.state.octave}</p>
		else return (
			<div>
				<p> It appears your range is from {this.state.lowestnote} to {this.state.highestnote}.
					Great! With this info excises will be tailored to your current range. If you feel
					this is inaccurate feel free to adjust or retake the test. This important we don't 
					want you to strain or hurt youself so make sure you are comfortable in singing the
					high and lower notes. When you are satisfied Click the comfirm button to continue
					get started on your vocal exercises.
				</p>
			</div>)
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
			this.setState({rangeFound:true})
		}
	}



	render(){
		return(
			<div>
				<StaffDisplay note={this.state.notes[this.state.noteIndex]} octave={this.state.octave} />
				<NoteDisplay display={this.displayNote} />
				
				<button onMouseDown={this.playTone} onMouseUp={this.stopTone}>Click this</button>
				<button onClick={this.halfstep}>I can sing this easy</button>
				<button onClick={this.goUp}>Can't sing anymore more</button>
				<button onClick={this.goUp}>To hard to sing</button>
			</div>
		)

	}
}