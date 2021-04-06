import React from 'react';

import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };

    this.count = this.count.bind(this);
    this.costCalulation = this.costCalulation.bind(this);
  }

  count(event) {
    const value = event.target.value;
    const regex = new RegExp(' ');

    const wordCount = value.trim().replace(regex, ' ').split(' ').length;

    this.setState({
      count: wordCount
    });

    if (value < 1) {
      this.setState({
        count: 0
      });
    }
  }

  costCalulation() {
    const { count } = this.state;

    if (count > 0) {
      // 39.75 is the minimum cost + 0.25 for the first word
      const calculation = 39.75 + count * 0.25;
      return `£${calculation.toFixed(2)}`;
    } else {
      return '£0.00';
    }
  }

  render() {
    const { count } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <div className="row">
              <div className="col">
                <label htmlFor="en-jpInput" className="h2">
                  Enter your text for translation:
                </label>
                <div className="input-group">
                  <textarea
                    className="form-control"
                    name="en-jpInput"
                    rows={10}
                    onChange={this.count}
                  />
                </div>
                <div className="h2">Words: {count}</div>
                <div className="h2">Cost: {this.costCalulation()}</div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
