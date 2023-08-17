// Write your code here
import {Component} from 'react'

import DestinationItem from './components/DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {inputItem: ''}

  Search = event => {
    this.setState({inputItem: event.target.value})
  }

  render() {
    const {destinationsList} = this.props

    const result = destinationsList.filter(each =>
      each.name.includes(inputItem),
    )

    // <img src='https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png' alt='search'/>

    return (
      <div>
        <h1>Destination Search</h1>
        <input type="search" value={inputItem} onClick={this.Search} />
        />
        <ul>
          {result.map(each => (
            <DestinationItem Details={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
