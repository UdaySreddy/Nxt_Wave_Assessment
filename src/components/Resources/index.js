import {Component} from 'react'

import Elements from '../Elements'

import './index.css'

class Resources extends Component {
  state = {resourceList: [], initialList: []}

  componentDidMount() {
    this.getresources()
  }

  getresources = async () => {
    const response = await fetch(
      'https://media-content.ccbp.in/website/react-assignment/resources.json',
    )
    const data = await response.json()
    const fetchedData = data.map(each => ({
      category: each.category,
      description: each.description,
      iconUrl: each.icon_url,
      id: each.id,
      link: each.link,
      tag: each.tag,
      title: each.title,
    }))
    console.log(fetchedData)
    this.setState({resourceList: fetchedData, initialList: fetchedData})
  }
  filter1 = () => {
    const {initialList} = this.state
    const requestList = initialList.filter(each => each.tag === 'request')
    this.setState({resourceList: requestList})
  }
  filter2 = () => {
    const {initialList} = this.state
    const requestList = initialList.filter(each => each.tag === 'user')
    this.setState({resourceList: requestList})
  }

  filter3 = () => {
    const {initialList} = this.state
    this.setState({resourceList: initialList})
  }

  filterList = event => {
    const {resourceList, initialList} = this.state
    const x = event.target.value.toUpperCase()
    console.log(x)
    if (x === '') {
      this.setState({resourceList: initialList})
    } else {
      const filterdSearch = resourceList.filter(each =>
        each.title.toUpperCase().includes(x),
      )
      this.setState({
        resourceList: filterdSearch,
      })
    }
  }

  render() {
    const {resourceList} = this.state

    return (
      <div className="pageBackground">
        <div className="tabNames">
          <button
            onClick={this.filter3}
            type="button"
            className="resourcesButton"
          >
            Resources
          </button>
          <button onClick={this.filter1} type="button" className="otherButton">
            Requests
          </button>
          <button onClick={this.filter2} type="button" className="otherButton">
            Users
          </button>
        </div>

        <div className="searchBox">
          <img
            className="searchImage1"
            src="https://res.cloudinary.com/dyei9ewrb/image/upload/v1659172817/assignment/Icon_rlcstu.png"
            alt="search"
          />
          <input
            onChange={this.filterList}
            className="searchInput"
            type="input"
            placeholder="Search"
          />
        </div>
        <ul className="elementsContainer">
          {resourceList.map(each => (
            <Elements resourseData={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Resources
