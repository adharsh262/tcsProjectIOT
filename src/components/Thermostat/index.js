import {IoIosArrowBack} from 'react-icons/io'
import {IoPartlySunnySharp} from 'react-icons/io5'
import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'
import Header from '../Header'
import Settings from '../Settings'

class Thermostat extends Component {
  render() {
    return (
      <div className="opaquemainpage">
        <Header />
        <div className="bashBoard">
          <Settings />
          <div className="opaquehomepage">
            <div>
              <div className="opaqueheading">
                <Link to="/" className="linkdecoration">
                  <IoIosArrowBack className="backSymbol" />
                </Link>
                <h1 className="opaquehead">Room Temperature</h1>
              </div>

              <ul className="unorderedWcu">
                <li className="listItemWcu">
                  <IoPartlySunnySharp className="cloudSymbol" />
                  <div className="cardDiscription">
                    <h3 className="headwcu">Weather Report</h3>
                    <p>About the todays weather report ....</p>
                  </div>
                </li>

                <Link to="/temp">
                  <li className="listItemWcu">
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/car-engine-dashboard-lights-outline-set-2/91/Car_Engine_-_Dashboard_Lights_114-512.png"
                      alt="aliBulb"
                      className="cloudSymbol1"
                    />

                    <div className="cardDiscription">
                      <h3 className="headwcu">Room Temperature</h3>
                      <p>Current Room Temperature is .....</p>
                    </div>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Thermostat
