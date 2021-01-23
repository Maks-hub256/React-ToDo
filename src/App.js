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
    if(this.state.currentValue === "") {
      return false
    }
    const newElem = []
    newElem.push(this.state.currentValue)
    newElem.push(false)
    list.push(newElem)
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

  componentWillMount() {

    const list = localStorage.getItem("list")
    if(list) {
      this.setState({
        list: JSON.parse(list)
      })
    }

  }

  render() {
    localStorage.setItem("list", JSON.stringify(this.state.list))
    return(
      <>
      <h1>ToDo List</h1>
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
                    <li key={index}>{item[0]}</li>
                     <button><i onClick={this.onDelete.bind(this, index)} className="fas fa-trash-alt"></i></button>
                  </div>
                )
              })
  
          }
        </ul>
      </div>
      </>
    )
  }
}
export default App;
