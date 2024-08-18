import './index.css'

import {IoSettings, IoLocation} from 'react-icons/io5'

const Profile = () => (
  <div className="wcuSection ProfileCard">
    <div className="wcuhead">
      <div className="home-content-Profile">
        <img
          src="https://www.kindpng.com/picc/m/52-526237_avatar-profile-hd-png-download.png"
          alt="imgProfile"
          className="ProfileImg"
        />
        <h1 className="home-heading para">Rahul Aultan</h1>
        <p className="para">Owner</p>
      </div>
    </div>
    <div className="proimg1">
      <strong>Todo List</strong>
      <ul className="para">
        <li>Go to shopping</li>
        <li>Repair the watch</li>
      </ul>
      <p className="para">
        <IoLocation />
        Location
      </p>

      <p className="para">
        <IoSettings />
        Settings
      </p>
    </div>
  </div>
)

export default Profile
