import React, { Component } from 'react';
import Card from './components/Card';
import Row from './components/Row';
import Input from './components/Input';

class App extends Component {
  state = {
    name: 'Diego',
    surname: 'Vazquez',
    locale: window.navigator.language,
    width: window.innerWidth
  };

  componentDidMount() {
    document.title = this.state.name + ' ' + this.state.surname;
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate() {
    document.title = this.state.name + ' ' + this.state.surname;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleResize = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    return (
      <div className="main">
        <h1>Lifting State Up</h1>
        <Card>
          <Row label="Name">
            <Input name="name" onChange={this.handleInput} value={this.state.name} />
          </Row>
          <Row label="Surname">
            <Input name="surname" onChange={this.handleInput} value={this.state.surname} />
          </Row>
          <Row label="Locale">
            <Input name="locale" onChange={this.handleInput} value={this.state.locale} />
          </Row>
          <Row label="Window">
            <Input name="window" onChange={this.handleInput} value={this.state.width} />
          </Row>
        </Card>
      </div>
    );
  }
}

export default App;
