// Write your code here
import {Component} from 'react'
import './index.css'
import Card from './components/DestinationItem'

const DestinationSearch = props => {
  const {destinationsList} = props

  const ItemsList = destinationsList

  const Search = event => {
    const inputItem = event.target.value
  }

  const result = ItemsList.filter(each => each.name.includes(inputItem))

  return (
    <div>
      <h1>Destination Search</h1>
      <input type="search" value={inputItem} onClick={Search} <img src='https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png' alt='search'/> />

      <ul>
        {result.map(each => (
          <Card Details={each} key={each.id} />
        ))}
      </ul>
    </div>
  )
}

export default DestinationSearch
