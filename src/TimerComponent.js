import React from 'react';

export default class TimerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    setInterval(
      () => this.changeSecond(),
      1000
    );
  }

  changeSecond() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Temporizador React por segundos!</h1>
        <h1>La hora actual es:</h1>
        <h1 style={{color: 'darkblue'}}>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}
