import { Component } from 'react'
import './App.css'
import RandomNumbers from './components/RandomNumbers'

class App extends Component {
  constructor() {
    super()
    this.state = {
      minNum: 0,
      maxNum: 0,
      generated: 0
    }
  }

  handleChangeMinNumber = e => {
    this.setState({ minNum: e.target.value })
  }

  handleChangeMaxNumber = e => {
    this.setState({ maxNum: e.target.value })
  }

  getRandomInt = (min, max) => {
    const generated = Math.floor((Math.random() * (max - min + 1))) + min
    this.setState({ generated }) 
  }

  render() {
    return (
      <div className='App'>
        <h1 className='app-title'>Random Number Generator</h1>
        <RandomNumbers
          generatedNumber = {this.state.generated} 
          handleChangeMinNumber={this.handleChangeMinNumber}
          handleChangeMaxNumber={this.handleChangeMaxNumber}
          getRandomInt={() => this.getRandomInt(Number(this.state.minNum), Number(this.state.maxNum))}
        />
      </div>
    )
  }
}

export default App;
