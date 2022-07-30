import {Component} from 'react'
import {Link} from 'react-router-dom'

import Header1 from '../Header1'
import Resources from '../Resources'

import './index.css'

class Home extends Component {
  render() {
    return (
      <Link to="/">
        <Header1 />
        <Resources />
      </Link>
    )
  }
}

export default Home
