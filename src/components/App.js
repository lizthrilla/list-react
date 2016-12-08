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
      items: this.state.items.concat({
        label: this.state.value,
        done: false
      }),
      // concat is like push, but push modifies the array itself and would change this.state.items.  We don't want that. concat takes that item and adds it to the array and returns a new array.
      value: ''
    })
  }

  toggleComplete = (i) => {
    const items = this.state.items.slice()
    items[i].done = !items[i].done
    this.setState({
      items: items
    })
  }

  removeItem = (i) => {
    const items = this.state.items.slice()
    items.splice(i, 1)
    this.setState({
      items: items
    })
  }

  render () {
    const items = this.state.items.map((item, i) => {
      const isDone = item.done ? styles.done : ''
      return <li className={isDone} key={i} onClick={() => this.toggleComplete(i)} onDoubleClick={() => this.removeItem(i)}> {item.label} </li>
    })
    return <div className={styles.root}>
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
