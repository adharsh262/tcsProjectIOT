import {IoIosArrowBack} from 'react-icons/io'
import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'
import Header from '../Header'
import Settings from '../Settings'

class Opaque extends Component {
  state = {isSwitchon: false, timeSheduling: false}

  onClickBtnOpaque = () => {
    this.setState(prevState => ({isSwitchon: !prevState.isSwitchon}))
  }

  onClickBtnOpaqueSheduling = () => {
    this.setState(prevState => ({timeSheduling: !prevState.timeSheduling}))
  }

  render() {
    const {isSwitchon, timeSheduling} = this.state
    const switchonContext = isSwitchon ? 'Transparent' : 'opaque'
    const switchChangeColorStyle = isSwitchon ? 'changeStyleopq' : ''
    const switchSheduling = timeSheduling ? 'ON' : 'OFF'
    const switchChangeColorStyleShedule = timeSheduling ? 'changeStyleopq' : ''

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
                <h1 className="opaquehead">Opaque Feature</h1>
              </div>
              <ul className="unorderedListopaque">
                <li className="listitemopaque">
                  <h1 className="headop">Opaque/Transparent</h1>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyU5Xv3Bg28Arq1698XSr3C0R6DbDy4SATng&s"
                    alt="windowOpaque"
                    className="windowImg1"
                  />
                  <p className="discriptionopaque">
                    You can able to make the window glass Transparent and opaque
                    by pressing the button below ON/OFF
                  </p>
                  <button
                    type="button"
                    onClick={this.onClickBtnOpaque}
                    className={`${switchChangeColorStyle} btnstyleEl`}
                  >
                    {switchonContext}
                  </button>
                </li>
                <li className="listitemopaque">
                  <h1 className="headop">Scheduling</h1>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy7TJj8h7GkRnylqwSnrEIBUXntXindpenhw&s"
                    alt="windowOpaque"
                    className="windowImg1"
                  />
                  <p className="discriptionopaque">
                    You can able to make the windows Transparent and opaque by
                    certain time period by pressing the button below ON/OFF
                  </p>
                  <button
                    type="button"
                    onClick={this.onClickBtnOpaqueSheduling}
                    className={`${switchChangeColorStyleShedule} btnstyleEl`}
                  >
                    {switchSheduling}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Opaque
