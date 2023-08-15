// Write your code here
import './index.css'

const Card = props => {
  const {Details} = props
  const {id, name, imgUrl} = Details

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

export default Card
