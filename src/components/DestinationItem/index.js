/* eslint-disable jsx-a11y/img-redundant-alt */
// Write your code here
import './index.css'

const DestinationItem = props => {
  const {Details} = props
  const {name, imgUrl} = Details

  return (
    <div className="card1">
      <div className="card">
        <img src={imgUrl} alt="image" />
        <p>{name}</p>
      </div>
      <div className="card">
        <img src={imgUrl} alt="image" />
        <p>{name}</p>
      </div>
      <div className="card">
        <img src={imgUrl} alt="image" />
        <p>{name}</p>
      </div>
      <div className="card">
        <img src={imgUrl} alt="image" />
        <p>{name}</p>
      </div>
    </div>
  )
}

export default DestinationItem
