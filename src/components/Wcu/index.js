import {HiDotsCircleHorizontal} from 'react-icons/hi'
import {IoIosBulb} from 'react-icons/io'
import {Link} from 'react-router-dom'
import './index.css'

const Wcu = () => (
  <div className="wcuSection">
    <div className="wcuhead">
      <div className="home-content">
        <h1 className="home-heading">Accessories</h1>
        <HiDotsCircleHorizontal />
      </div>
    </div>

    <ul className="unorderedWcu wcusec2">
      <Link to="/wifi" className="linkdecoration">
        <li className="wcuListItem">
          <h3 className="wcuheading">Wi-Fi</h3>
          <div className="contentImgContainerwcu">
            <img
              src="https://th.bing.com/th/id/OIP.EL18hCLudWHBy7Grywv_TgHaHa?w=168&h=180&c=7&r=0&o=5&dpr=1.9&pid=1.7"
              alt="steps"
              className="imgWcucard"
            />
            <p>connected</p>
          </div>
        </li>
      </Link>
      <Link to="/uv" className="linkdecoration">
        <li className="wcuListItem">
          <h3 className="wcuheading">UV Protection</h3>
          <div className="contentImgContainerwcu">
            <img
              src="https://th.bing.com/th/id/OIP.-EJy2LiLFL2cOj0TAN_jaAHaHa?w=183&h=183&c=7&r=0&o=5&dpr=1.9&pid=1.7"
              alt="steps"
              className="imgWcucard"
            />
            <p>On-standby</p>
          </div>
        </li>
      </Link>
      <Link to="/lights" className="linkdecoration">
        <li className="wcuListItem">
          <h3 className="wcuheading">Lights</h3>
          <div className="contentImgContainerwcu">
            <IoIosBulb />
            <p>On-standby</p>
          </div>
        </li>
      </Link>
      <Link to="/temperature" className="linkdecoration">
        <li className="wcuListItem">
          <h3 className="wcuheading">Thermostat</h3>
          <div className="contentImgContainerwcu">
            <img
              src="https://cdn1.iconfinder.com/data/icons/car-engine-dashboard-lights-outline-set-2/91/Car_Engine_-_Dashboard_Lights_114-512.png"
              alt="aliBulb"
              className="imgWcucard"
            />
            <p>Cooling to 22.5</p>
          </div>
        </li>
      </Link>
      <Link to="/airpurifier" className="linkdecoration">
        <li className="wcuListItem">
          <h3 className="wcuheading">Air Purifier</h3>
          <div className="contentImgContainerwcu">
            <img
              src="https://th.bing.com/th/id/OIP.HnzipRIwijmRQCpDBm8MKgHaHa?pid=ImgDet&w=199&h=199&c=7&dpr=1.9"
              alt="steps"
              className="imgWcucard"
            />
            <p>Off</p>
          </div>
        </li>
      </Link>
      <Link to="/opaque" className="linkdecoration">
        <li className="wcuListItem">
          <h3 className="wcuheading">Opaque</h3>
          <div className="contentImgContainerwcu">
            <img
              src="https://static.thenounproject.com/png/95968-200.png"
              alt="steps"
              className="imgWcucard"
            />
            <p>Off</p>
          </div>
        </li>
      </Link>
      <li className="wcuListItem">
        <h3 className="wcuheading">+</h3>
        <div className="contentImgContainerwcu">
          <p>Add More</p>
        </div>
      </li>
    </ul>
  </div>
)

export default Wcu
