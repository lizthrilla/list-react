import React, { Component } from 'react'
import styles from '../styles/screen.scss'

class App extends Component {

  constructor () {
    super()
    this.state = {
      items: [],
      value: ''
    }
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      items: this.state.items.concat(this.state.value),
      // concat is like push, but push modifies the array itself and would change this.state.items.  We don't want that. concat takes that item and adds it to the array and returns a new array.
      value: ''
    })
  }

  render () {
    const items = this.state.items.map((item, i) => {
      return <li key={i}> {item} </li>
    })
    return <div className={styles.roots}>
      <header>
        <h1>One List!</h1>
      </header>
      <ul>
        {items}
      </ul>
      <form onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.value} onChange={this.handleChange} placeholder='What to do?' />
      </form>
    </div>
  }
}

export default App
