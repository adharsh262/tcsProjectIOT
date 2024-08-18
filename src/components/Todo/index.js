import {FaPlus} from 'react-icons/fa'
import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import './index.css'

const listElements = [
  {
    id: uuidv4(),
    textCont: 'Pay Electrical Bill',
  },
]

class Todo extends Component {
  state = {isSwitchon: false, inputEl: '', listContent: listElements}

  onChangeInput = event => {
    this.setState({inputEl: event.target.value})
  }

  onClickTodo = () => {
    this.setState(prevState => ({isSwitchon: !prevState.isSwitchon}))
  }

  onCLIckCliear = () => {
    localStorage.removeItem('todo')
  }

  onSubmitEvent = event => {
    event.preventDefault()
    const {inputEl, listContent} = this.state
    const newObj = {
      id: uuidv4(),
      textCont: inputEl,
    }
    this.setState(prevState => ({
      listContent: [...prevState.listContent, newObj],
    }))
    localStorage.setItem('todo', JSON.stringify(listContent))

    this.setState({inputEl: ''})
  }

  renderInputEl = () => {
    const {inputEl} = this.state
    return (
      <form className="inputContainertodo" onSubmit={this.onSubmitEvent}>
        <input
          type="text"
          placeholder=" Add Tasks"
          className="inputcont"
          onChange={this.onChangeInput}
          value={inputEl}
        />
        <button type="submit" className="addtaskBtn">
          Add
        </button>
      </form>
    )
  }

  render() {
    const {isSwitchon, listContent} = this.state
    const getItemList = JSON.parse(localStorage.getItem('todo'))

    const getData = getItemList !== null ? getItemList : listContent
    return (
      <div className="todocpontaoner">
        <div className="headingtodo">
          <h1>Todo-List</h1>
          <label htmlFor="addTask" />
          <button
            type="button"
            className="todoPlusbtn"
            onClick={this.onClickTodo}
            aria-label="Click me"
            id="addTask"
          >
            <FaPlus className="plussymbol" />
          </button>
        </div>
        {isSwitchon ? this.renderInputEl() : null}

        <ul>
          {getData.map(forEach => (
            <li key={forEach.id}>{forEach.textCont}</li>
          ))}
        </ul>
        <button
          type="button"
          className="addtaskBtn"
          onClick={this.onCLIckCliear}
        >
          Clear
        </button>
      </div>
    )
  }
}

export default Todo
