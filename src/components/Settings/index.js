// Write your code here
import {IoIosLock, IoIosPower} from 'react-icons/io'
import {Link} from 'react-router-dom'
import {
  IoAppsSharp,
  IoSettings,
  IoAlarm,
  IoBarChartSharp,
} from 'react-icons/io5'

import './index.css'

const Settings = () => (
  <div className="sideBar">
    <ul className="unorderedWcuevf">
      <Link to="/" className="linkdecoration">
        <li className="listItemds">
          <IoAppsSharp />
          <p className="para activee">Home</p>
        </li>
      </Link>
      <Link to="/charts" className="linkdecoration">
        <li className="listItemds">
          <IoBarChartSharp />
          Charts
        </li>
      </Link>

      <li className="listItemds">
        <IoAlarm />
        Alarm
      </li>

      <li className="listItemds">
        <IoIosLock />
        Security
      </li>
      <li className="listItemds">
        <IoSettings />
        Settings
      </li>
      <li className="listItemds">
        <IoIosPower />
        Power
      </li>
    </ul>
    <ul className="responsiveSettings">
      <Link to="/" className="linkdecoration">
        <li className="listItemds">
          <IoAppsSharp />
        </li>
      </Link>

      <Link to="/charts" className="linkdecoration">
        <li className="listItemds">
          <IoBarChartSharp />
        </li>
      </Link>

      <li className="listItemds">
        <IoAlarm />
      </li>

      <li className="listItemds">
        <IoIosLock />
      </li>
      <li className="listItemds">
        <IoSettings />
      </li>
      <li className="listItemds">
        <IoIosPower />
      </li>
    </ul>
  </div>
)

export default Settings
