// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="notFounfDage">
    <img
      src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
      alt="not-found"
      className="notfoundImg"
    />
    <h1>PAGE NOT FOUND</h1>
    <Link to="/">
      <button className="login-button" type="button">
        Back To Home
      </button>
    </Link>
  </div>
)

export default NotFound
