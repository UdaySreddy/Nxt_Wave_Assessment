import {Component} from 'react'

import './index.css'

class Resources2 extends Component {
  prevent = event => {
    event.preventDefault()
  }

  render() {
    return (
      <form className="pageBackground" onClick={this.prevent}>
        <button type="button" className="usersButton">
          <img
            src="https://res.cloudinary.com/dyei9ewrb/image/upload/v1659249079/assignment/breadcrumbs_h5fdtt.png"
            alt="Users"
          />
        </button>
        <img
          className="groupImage"
          src="https://res.cloudinary.com/dyei9ewrb/image/upload/v1659246233/assignment/Group_3_xi4wnr.png"
          alt="Group3"
        />
        <form className="formContainer" onSubmit={this.prevent}>
          <h1 className="headtext">Add a Resources</h1>
          <p className="paratext">NAME</p>
          <input className="inputText" type="text" />
          <p className="paratext">LINK</p>
          <input className="inputText-1" type="text" />
          <p className="paratext">DESCRIPTION</p>
          <textarea className="inputText" type="text" rows="4" cols="25" />
          <img
            className="changeimage"
            alt="changeimage"
            src="https://res.cloudinary.com/dyei9ewrb/image/upload/v1659251534/assignment/Group_38_agcjgp.png"
          />
          <div className="create">
            <button className="createbutton" type="submit">
              Create
            </button>
          </div>
        </form>
      </form>
    )
  }
}

export default Resources2
