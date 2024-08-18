import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {IoIosArrowBack} from 'react-icons/io'
import {Link} from 'react-router-dom'
import RealTimeValues from '../RealTimeValues'
import Settings from '../Settings'
import Header from '../Header'

const variableId = '66beecd763d23d182a210226'
const ubidotsToken = 'BBUS-MHasKOWIYL4b8BgHK5Ilak7dwtQuC0'

// const apiStatusConstants = {
//   initial: 'INITIAL',
//   inProgress: 'INPROGRESS',
//   success: 'SUCCESS',
//   failure: 'FAILURE',
// }

class ModelTwo extends Component {
  state = {
    getData: '',
    vari: variableId,
    name: 'Temperature',
  }

  componentDidMount() {
    this.getDa()
  }

  onclickTemp = () => {
    this.setState(
      {
        vari: '66beecd763d23d182a210226',
        name: 'Temperature',
      },
      () => {
        this.getDa()
      },
    )
  }

  onclickHumi = () => {
    this.setState(
      {
        vari: '66beecd7338e71183b80491c',
        name: 'Humidity',
      },
      () => {
        this.getDa()
      },
    )
  }

  onclickLig = () => {
    this.setState(
      {
        vari: '66beecd764c52517fd55066b',
        name: 'Light',
      },
      () => {
        this.getDa()
      },
    )
  }

  onclickRain = () => {
    this.setState(
      {
        vari: '66beecd7e83633158aadf420',
        name: 'Rain',
      },
      () => {
        this.getDa()
      },
    )
  }

  onclickDust = () => {
    this.setState(
      {
        vari: '66beecd7338e71183b80491b',
        name: 'Dust',
      },
      () => {
        this.getDa()
      },
    )
  }

  // const [getData, setData] = useState('')
  // const [vari, setVari] = useState(variableId)

  // useEffect(() => {
  //   const getData2 = async () => {
  //     const getUrl = `https://industrial.api.ubidots.com/api/v1.6/variables/${variableId}/values?quantity=1`
  //     const jwtToken = Cookies.get('jwt_token')
  //     const options = {
  //       headers: {
  //         Authorization: `Bearer ${jwtToken}`,
  //         'X-Auth-Token': ubidotsToken,
  //         'Content-Type': 'application/json',
  //       },
  //       method: 'GET',
  //     }

  //     const response = await fetch(getUrl, options)
  //     const data = await response.json()
  //     if (response.ok) {
  //       setData(data)
  //     }
  //   }

  //   getData2()
  // }, [])

  // const {data} = this.state
  // const {results} = data
  // if (results !== undefined) {

  getDa = async () => {
    const {vari} = this.state
    const getUrl = `https://industrial.api.ubidots.com/api/v1.6/variables/${vari}/values?quantity=1`
    console.log(getUrl)
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        'X-Auth-Token': ubidotsToken,
        'Content-Type': 'application/json',
      },
      method: 'GET',
    }

    const response = await fetch(getUrl, options)
    const data = await response.json()

    if (response.ok) {
      this.setState({
        getData: data,
      })
    }
  }

  renderButtons = () => (
    <div className="btnModelTwoBtnContainer">
      <button
        onClick={this.onclickTemp}
        className="btnModelTwoBtn"
        type="button"
      >
        Temperature
      </button>
      <button
        onClick={this.onclickHumi}
        className="btnModelTwoBtn"
        type="button"
      >
        Humidity
      </button>
      <button
        onClick={this.onclickDust}
        className="btnModelTwoBtn"
        type="button"
      >
        Dust
      </button>
      <button
        onClick={this.onclickRain}
        className="btnModelTwoBtn"
        type="button"
      >
        Rain
      </button>
      <button
        onClick={this.onclickLig}
        className="btnModelTwoBtn"
        type="button"
      >
        Light-Lux
      </button>
    </div>
  )

  render() {
    const {getData, name} = this.state
    const {results} = getData

    if (results !== undefined) {
      const res = results.map(forake => ({
        context: forake.context,
        createdAt: forake.created_at,
        timestamp: forake.timestamp,
        value: forake.value,
      }))

      return (
        <>
          <Header />
          <div className="bashBoard">
            <Settings />
            <div>
              <div className="jdsgj">
                <Link to="/" className="linkdecoration">
                  <IoIosArrowBack className="backSymbol" />
                </Link>
                <h1 className="headingLineRealtime">{name.toUpperCase()}</h1>
              </div>
              <div className="btnContModelTwo">{this.renderButtons()}</div>
              <ul className="unorderedWcu wcusec2">
                {res.map(forEach => (
                  <RealTimeValues forEach={forEach} key={forEach.timestamp} />
                ))}
              </ul>
            </div>
          </div>
        </>
      )
    }
    return null
  }
}

export default ModelTwo
