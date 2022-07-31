import {Component} from 'react'

import Elements from '../Elements'

import './index.css'

class Resources extends Component {
  render() {
    return (
      <div className="pageBackground">
        <div className="tabNames">
          <button type="button" className="resourcesButton">
            Resources
          </button>
          <button type="button" className="otherButton">
            Requests
          </button>
          <button type="button" className="otherButton">
            Users
          </button>
        </div>

        <div className="searchBox">
          <img
            src="https://res.cloudinary.com/dyei9ewrb/image/upload/v1659172817/assignment/Icon_rlcstu.png"
            alt="search"
          />
          <input className="searchInput" type="search" placeholder="Search" />
        </div>
        <div className="elementsContainer">
          <Elements />
        </div>
      </div>
    )
  }
}

export default Resources
