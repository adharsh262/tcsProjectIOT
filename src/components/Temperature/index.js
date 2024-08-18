import './index.css'
import {Component} from 'react'
import {IoIosArrowBack} from 'react-icons/io'
import {Link} from 'react-router-dom'
import Settings from '../Settings'
import Header from '../Header'

// const apiStatusConstants = {
//   initial: 'INITIAL',
//   inProgress: 'INPROGRESS',
//   success: 'SUCCESS',
//   failure: 'FAILURE',
// }
class Temperature extends Component {
  // state = {
  //   data: '',
  //   errormsg: '',
  //   apiStatus: apiStatusConstants.initial,
  // }

  //  ubidots=new Ubidots({
  //   apiKey: 'BBUS-dkEj8v2okWxnkcQxYPYlXuDRpAf8ld',

  // })
  // getData = async () => {
  //   this.setState({
  //     apiStatus: apiStatusConstants.inProgress,
  //   })
  //   const getUrl =
  //     'https://industrial.api.ubidots.com/api/v1.6/variables?token=BBUS-gCm5Zg7WePh7sTZEq8qYXmUYdz5GrfYkudQiN2riYlTr81Sd7fmAYDs'
  //   const jwtToken = Cookies.get('jwt_token')
  //   const options = {
  //     headers: {
  //       Authorization: `Bearer ${jwtToken}`,
  //     },
  //     method: 'GET',
  //   }

  //   const response = await fetch(getUrl, options)
  //   const data = await response.json()

  //   if (response.ok) {
  //     this.setState({
  //       data,
  //       apiStatus: apiStatusConstants.success,
  //     })
  //   } else if (response.status >= 401) {
  //     this.setState({
  //       errormsg: data.message,
  //       apiStatus: apiStatusConstants.failure,
  //     })
  //   }
  // }

  // renderLoadingView = () => {
  //   return (
  //     <div className="loader-container">
  //       <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
  //     </div>
  //   )
  // }

  // renderFailureView = () => {
  //   const {errormsg} = this.state
  //   return (
  //     <div>
  //       <p>{errormsg}</p>
  //       <p>hello</p>
  //     </div>
  //   )
  // }

  // renderSuccessView = () => {
  //   const {data} = this.state
  //   const {results} = data
  //   return (
  //     <div>
  //       <ul className="unorderedWcu wcusec2">
  //         {results.map(forEach => (
  //           <RealTimeValues forEach={forEach} key={forEach.id} />
  //         ))}
  //       </ul>
  //     </div>
  //   )
  // }

  // renderDashBoard = () => {
  //   const {apiStatus} = this.state
  //   switch (apiStatus) {
  //     case apiStatusConstants.inProgress:
  //       return this.renderLoadingView()
  //     case apiStatusConstants.success:
  //       return this.renderSuccessView()
  //     case apiStatusConstants.failure:
  //       return this.renderFailureView()
  //     default:
  //       return null
  //   }
  // }

  render() {
    // const {data} = this.state
    // const {results} = data
    // if (results !== undefined) {
    return (
      <>
        <Header />
        <div className="bashBoard">
          <Settings />
          <div className="helloworld">
            <div className="opaqueheading1">
              <div className="wifihead">
                <Link to="/temperature" className="linkdecoration">
                  <IoIosArrowBack className="backSymbol" />
                </Link>
                <h1 className="opaquehead">Back</h1>
              </div>
            </div>
            <p>Room Temperature</p>
          </div>
        </div>
      </>
    )
  }
  //   return null
  // }
}

// const Temperature = () => {
//   // const [dataOne, dataSet] = useState('')

//   // const ubidots = new Ubidots({
//   //   apiKey: 'BBUS-dkEj8v2okWxnkcQxYPYlXuDRpAf8ld',
//   //   deviceId: '66b9d92f0bfc2ead780ec70d',
//   //   variableId: '66b9d930c4db9caa861f3818',
//   // })

//   // // ubidots
//   // //   .getVariableData()
//   // //   .then(response => {
//   // //     const data = response.results
//   // //     console.log(data)
//   // //   })
//   // //   .catch(error => {
//   // //     console.error(error)
//   // //   })

//   // ubidots
//   //   .getVariableData({
//   //     device: '66b9d92f0bfc2ead780ec70d',
//   //     variable: '66b9d930c4db9caa861f3818',
//   //   })
//   //   .then(response => {
//   //     const data = response.results
//   //     console.log(data)
//   //   })
//   //   .catch(error => {
//   //     console.error(error)
//   //   })

//   return (
//     <div>
//       <h1>Hello</h1>
//       <p>{}</p>
//     </div>
//   )
// }

export default Temperature
