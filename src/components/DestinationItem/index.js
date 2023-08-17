/* eslint-disable jsx-a11y/img-redundant-alt */
// Write your code here
import './index.css'

const DestinationItem = props => {
  const {Details} = props
  const {name, imgUrl} = Details

  return (
    <div className="card1">
      <li className="card">
        <img src={imgUrl} alt={name} />
        <p>{name}</p>
      </li>
    </div>
  )
}

export default DestinationItem
