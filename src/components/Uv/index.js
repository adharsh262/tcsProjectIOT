import {IoIosArrowBack, IoMdSunny} from 'react-icons/io'
import {IoSunnyOutline} from 'react-icons/io5'
import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'
import Header from '../Header'
import Settings from '../Settings'

class Uv extends Component {
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
                <h1 className="opaquehead">UV Resistance</h1>
              </div>
              <ul className="unorderedListopaque">
                <li className="listitemopaque">
                  <h1 className="headop">Intensity</h1>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZaQoWQjhuxeo2Oxx5a_VIsb4etRbMPabW7CwoJN51XEPj2SLwKSYNBkpefo5svSXwaA&usqp=CAU"
                    alt="windowOpaque"
                    className="windowImg1"
                  />
                  <div className="inputContainerUv">
                    <IoSunnyOutline />
                    <input type="range" className="rangeinput" />
                    <IoMdSunny />
                  </div>
                  <p className="discriptionopaque ">
                    You can able to make the window glass adapot to the climatic
                    conditions
                  </p>
                </li>
                <li className="listitemopaque">
                  <h1 className="headop">UV Rays</h1>
                  <img
                    src="https://lirp.cdn-website.com/eb9ac321/dms3rep/multi/opt/allcool+window+films+house+window+tint-640w.png"
                    alt="windowOpaque"
                    className="windowImg1"
                  />
                  <p className="discriptionopaque paar1uv">
                    You can able to make the windows Resistance to infrared and
                    uv radiation by certain time period by pressing the button
                    below ON/OFF
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

export default Uv
