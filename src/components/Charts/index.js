import {IoIosArrowBack} from 'react-icons/io'
import {Component} from 'react'

import './index.css'
import Header from '../Header'
import Settings from '../Settings'

class Charts extends Component {
  state = {temp: 10}

  compoundDidMount() {
    setInterval(() => {
      this.setState({temp: Math.ceil(Math.random() * 45)})
    }, 1000)
  }

  render() {
    const {temp} = this.state
    console.log(temp)
    return (
      <div className="opaquemainpage">
        <Header />
        <div className="bashBoard">
          <Settings />
          <div className="opaquehomepage">
            <div>
              <div className="opaqueheading">
                <IoIosArrowBack className="backSymbol" />

                <h1 className="opaquehead">Todo List</h1>
              </div>
              <ul>
                <li>
                  <h1>Temperature</h1>
                  <p>{temp}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Charts
