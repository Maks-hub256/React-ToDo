import './App.css';
import React, {Component} from 'react'

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      currentValue: ""
    }
  }

  valueChange = (e) => {
    this.setState({
      currentValue: e.target.value
    })
  }

  addElem = (e) => {
    e.preventDefault()
    const list = [...this.state.list]
    if(this.state.currentValue == "") {
      return false
    }
    list.push(this.state.currentValue)
    this.setState({
      list: list,
      currentValue: ""
    })
  }

  onDelete = (index) => {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }


  render() {
    return(
      <div className="wrapper">
        <form action="" onSubmit={this.addElem}>
          <input type="text" onChange={this.valueChange} value={this.state.currentValue}/>
          <input type="submit" value="Add"/>
        </form>
        <ul>
          {
            this.state.list.map((item, index) => {
              return(
                <div className="item-wrapper" key={index}>
                  <li>{item}</li>
                  <button onClick={this.onDelete.bind(this, index)}>X</button>
                </div>
              )
            })
  
          }
        </ul>
      </div>
    )
  }
}

export default App;
