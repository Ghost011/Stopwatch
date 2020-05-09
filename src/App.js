import React, {Component} from 'react';
import './App.css';
import {Button, ButtonGroup} from 'react-bootstrap';

export default class App extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  };
  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 10);
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };resetTimer = () => {
    this.stopTimer();
  
    this.setState({
      timerStart: 0,
      timerTime: 0
    });
  };
  
  render() {
   
   
    const { timerTime } = this.state;
    let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    return (
      <div className="App">
       
       <header className="App-header">
       <h2 className="header">STOPWATCH</h2>
         <div className="Stopwatch-Box">
         <div className="Stopwatch-display">
            {hours} : {minutes} : {seconds} : {centiseconds}
          </div>

          <ButtonGroup size="lg" className="mb-2">
            <Button  variant="outline-primary" className="Sw-Btn" onClick={this.startTimer}>Start</Button>
            <Button  variant="outline-warning" className="Sw-Btn" onClick={this.resetTimer}>Reset</Button>
            <Button  variant="outline-danger" className="Sw-Btn" onClick={this.stopTimer}>Stop</Button>
          </ButtonGroup>
         </div>
       </header>
     </div>
    )
  }
}



