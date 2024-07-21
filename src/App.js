import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CharWithLength from './components/CharWithLength/index'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    input: '',
    addedCharacters: [],
  }

  onChangeInput = event => {
    this.setState({input: event.target.value})
  }

  clearInput = () => {
    this.setState({input: ''})
  }

  onClickedAdd = event => {
    event.preventDefault()
    const {input} = this.state
    const character = {
      id: uuidv4(),
      charText: input,
      charLength: input.length,
    }
    this.setState(
      prevState => ({
        addedCharacters: [...prevState.addedCharacters, character],
      }),
      this.clearInput,
    )
  }

  render() {
    const {input, addedCharacters} = this.state
    let renderView
    if (addedCharacters.length === 0) {
      renderView = (
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
          alt="no user inputs"
          className="count-image"
        />
      )
    } else {
      renderView = (
        <ul className="characters-list">
          {addedCharacters.map(char => (
            <CharWithLength
              key={char.id}
              charText={char.charText}
              charLength={char.charLength}
            />
          ))}
        </ul>
      )
    }
    return (
      <div className="main-container">
        <div className="count-container">
          <div className="count-heading-container">
            <h1 className="count-heading">
              Count the characters like a Boss...
            </h1>
          </div>
          {renderView}
        </div>
        <div className="counter-container">
          <h1 className="counter-heading">Character counter</h1>
          <form
            onSubmit={this.onClickedAdd}
            className="add-character-container"
          >
            <input
              type="text"
              placeholder="Enter the Characters here"
              className="input-field"
              value={input}
              onChange={this.onChangeInput}
            />
            <button
              type="submit"
              className="add-btn"
              onClick={this.onClickedAdd}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
