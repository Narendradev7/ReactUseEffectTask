import { Component } from "react";

class Timer extends Component {
  state = {
    seconds: 0,
    isRunning: false,
  };

  startTimer = () => {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        seconds: prevState.seconds + 1,
      }));
    }, 1000);
    this.setState({
      isRunning: true,
    });
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({
      isRunning: false,
    });
  };

  resetTimer = () => {
    clearInterval(this.timer);
    this.setState({
      seconds: 0,
      isRunning: false,
    });
  };

  formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  render() {
    return (
      <>
        <h1>Timer App</h1>
        <h2>{this.formatTime(this.state.seconds)}</h2>
        <div>
          {!this.state.isRunning ? (
            <button onClick={this.startTimer}>Start</button>
          ) : (
            <button onClick={this.stopTimer}>Stop</button>
          )}
          <button onClick={this.resetTimer}>Reset</button>
        </div>
      </>
    );
  }
}

export default Timer;
