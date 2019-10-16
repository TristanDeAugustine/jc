import React, { Component } from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newItem: '',
      list: []
    }
  }
  updateTextArea(key, value) {
    // update react state
    this.setState({ [key]: value })
  }

  addItem(e) {
    e.preventDefault()
    // create a new item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    }

    // copy current list of items
    const list = [...this.state.list]

    // add the new item to the list
    list.push(newItem)

    // update state with new list, reset the new item input
    this.setState({
      list,
      newItem: ''
    })
  }

  render() {
    return (
      <div id="myDIV" class="header">
        <h1 className="h1"> Journal</h1>
        <header className="h2">What do you wish to record: </header>
        <br></br>
        <div className="journal-content">
          <form onSubmit={e => this.addItem(e)}>
            <textarea
              className="text-field"
              rows="10"
              type="text"
              id="myInput"
              value={this.state.newItem}
              onChange={e => this.updateTextArea('newItem', e.target.value)}
            />
            <div className="radio-button-container">
              <div className="radio-station">
                <input type="radio" name="color" value="critical" /> Critical
              </div>
              <div className="radio-station-2">
                <input type="radio" name="color" value="normal" /> Normal
              </div>
              <div className="radio-station-3">
                <input type="radio" name="color" value="info" /> Info
              </div>
            </div>
            <br></br>
            <input className="submit" type="submit" value="Submit"></input>
          </form>
        </div>
        <br /> <br />
        <ul id="myUL">
          {this.state.list.map(item => {
            return (
              <li className="checked" key={item.id}>
                {item.value}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default App
