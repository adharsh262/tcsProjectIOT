import {IoIosArrowBack} from 'react-icons/io'
import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'
import Header from '../Header'
import Settings from '../Settings'

class AirPurifier extends Component {
  state = {timeSheduling: false}

  onClickBtnOpaqueSheduling = () => {
    this.setState(prevState => ({timeSheduling: !prevState.timeSheduling}))
  }

  render() {
    const {timeSheduling} = this.state

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
                <h1 className="opaquehead">Air Purifier</h1>
              </div>
              <ul className="unorderedListopaque">
                <li className="listitemopaque">
                  <h1 className="headop">Air Quality</h1>
                  <img
                    src="https://st.adda247.com/https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2023/11/06110959/aqi_mini-1200x675-1.png"
                    alt="windowOpaque"
                    className="windowImg1"
                  />
                  <p className="discriptionopaque paar1uv">
                    The present air quality of the air is 87%.
                  </p>
                  <div className="uvprot">
                    <p>Auto </p>
                    <button
                      type="button"
                      onClick={this.onClickBtnOpaqueSheduling}
                      className={`${switchChangeColorStyleShedule} btnstyleEl`}
                    >
                      {switchSheduling}
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AirPurifier
