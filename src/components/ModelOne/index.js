import './index.css'
import {useEffect} from 'react'
import Cookies from 'js-cookie'

import Settings from '../Settings'
import Header from '../Header'

const ModelOne = () => {
  useEffect(() => {
    const getData2 = async () => {
      const getUrl =
        'https://industrial.api.ubidots.com/api/v1.6/variables/66b44c67a8c0544d3b0fb52f/values?quantity=1'
      const jwtToken = Cookies.get('jwt_token')
      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          'X-Auth-Token': 'BBUS-MHasKOWIYL4b8BgHK5Ilak7dwtQuC0',
          'Content-Type': 'application/json',
        },
        method: 'GET',
      }

      const response = await fetch(getUrl, options)
      const data = await response.json()
      console.log(data)
    }

    getData2()
  })

  // const {data} = this.state
  // const {results} = data
  // if (results !== undefined) {
  //   console.log(results)

  return (
    <>
      <Header />
      <div className="bashBoard">
        <Settings />
        <ul className="unorderedWcu wcusec2">
          <p>Hello testcase</p>
        </ul>
      </div>
    </>
  )
}

export default ModelOne
