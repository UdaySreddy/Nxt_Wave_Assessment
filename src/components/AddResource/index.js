import {Component} from 'react'
import {Link} from 'react-router-dom'

import Header2 from '../Header2'
import Resources2 from '../Resources2'

import './index.css'

class AddResource extends Component {
  render() {
    return (
      <Link to="/addresources">
        <Header2 />
        <Resources2 />
      </Link>
    )
  }
}

export default AddResource
