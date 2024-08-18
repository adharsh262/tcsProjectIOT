// Write your code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {IoLocation, IoSettings} from 'react-icons/io5'
import Wcu from '../Wcu'
import Profile from '../Profile'
import Todo from '../Todo'
import Settings from '../Settings'
import Header from '../Header'
import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="bashBoard">
        <Settings />
        <div className="home-container">
          <Wcu />

          <div className="prowcu">
            <Profile />
          </div>
        </div>
        <div className="propile">
          <div className="propilecont">
            <div className="">
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
              <Todo />
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
        </div>
      </div>
    </>
  )
}

export default Home
