import './index.css'

const RealTimeValues = props => {
  const {forEach} = props
  const {timestamp, value, createdAt} = forEach
  return (
    <li className="wcuListItemfddf">
      <p>{`Last Activity : ${createdAt}`}</p>
      <p>{`Time Stamp : ${timestamp}`}</p>
      <h1>{value}</h1>
    </li>
  )
}

export default RealTimeValues
