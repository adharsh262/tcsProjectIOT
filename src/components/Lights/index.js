import {IoIosArrowBack} from 'react-icons/io'
import {HiDotsCircleHorizontal} from 'react-icons/hi'
import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'
import Header from '../Header'
import Settings from '../Settings'

class Lights extends Component {
  state = {isWifiOn: false}

  onClickBtnWifi = () => {
    this.setState(prevState => ({isWifiOn: !prevState.isWifiOn}))
  }

  renderwifiAvailable = () => (
    <div className="wcuSection">
      <div className="wcuhead">
        <div className="home-content">
          <h1 className="home-heading">Available Connections</h1>
          <HiDotsCircleHorizontal />
        </div>
      </div>

      <ul className="unorderedWcu wcusec2">
        <li className="wcuListItem">
          <h3 className="wcuheading">Connected Devices</h3>
          <div className="contentImgContainerwcu">
            <img
              src="https://th.bing.com/th/id/OIP.EL18hCLudWHBy7Grywv_TgHaHa?w=168&h=180&c=7&r=0&o=5&dpr=1.9&pid=1.7"
              alt="steps"
              className="imgWcucard"
            />
            <p>5 connections</p>
          </div>
        </li>

        <li className="wcuListItem">
          <h3 className="wcuheading">+</h3>
          <div className="contentImgContainerwcu">
            <p>Add Devices</p>
          </div>
        </li>
      </ul>
    </div>
  )

  render() {
    const {isWifiOn} = this.state

    const switchWifi = isWifiOn ? 'ON' : 'OFF'
    const switchChangeWifi = isWifiOn ? 'changeStyle' : ''

    return (
      <div className="opaquemainpage">
        <Header />
        <div className="bashBoard">
          <Settings />
          <div className="opaquehomepage">
            <div>
              <div className="opaqueheading1">
                <div className="wifihead">
                  <Link to="/" className="linkdecoration">
                    <IoIosArrowBack className="backSymbol" />
                  </Link>
                  <h1 className="opaquehead">Lights</h1>
                </div>
                <button
                  type="button"
                  onClick={this.onClickBtnWifi}
                  className={`${switchChangeWifi} btnstyleE1l`}
                >
                  {switchWifi}
                </button>
              </div>
              {isWifiOn ? this.renderwifiAvailable() : ''}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Lights
