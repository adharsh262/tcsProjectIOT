import {IoIosArrowBack, IoIosWifi} from 'react-icons/io'
import {AiOutlineRight} from 'react-icons/ai'
import {IoLockClosed} from 'react-icons/io5'
import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'
import Header from '../Header'
import Settings from '../Settings'

class Wifi extends Component {
  state = {isWifiOn: false}

  onClickBtnWifi = () => {
    this.setState(prevState => ({isWifiOn: !prevState.isWifiOn}))
  }

  renderwifiAvailable = () => (
    <div>
      <h1>Available Networks</h1>
      <ul className="unorderedListwifi">
        <li className="listItwemwifi">
          <p>POCO X3 Pro</p>
          <div>
            <IoLockClosed className="icon1" />
            <IoIosWifi className="icon1" />
            <AiOutlineRight className="icon1" />
          </div>
        </li>
        <li className="listItwemwifi">
          <p>TcsWIFI</p>
          <div>
            <IoLockClosed className="icon1" />
            <IoIosWifi className="icon1" />
            <AiOutlineRight className="icon1" />
          </div>
        </li>
        <li className="listItwemwifi">
          <p>GUESTWIFI</p>
          <div>
            <IoLockClosed className="icon1" />
            <IoIosWifi className="icon1" />
            <AiOutlineRight className="icon1" />
          </div>
        </li>
        <li>
          <p>Add Network</p>
        </li>
        <li className="ref">Refresh</li>
        <li className="lesde">
          <p>Advanced settings</p>
          <AiOutlineRight className="icon1" />
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
                  <h1 className="opaquehead">WIFI</h1>
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

export default Wifi
