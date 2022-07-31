import {Component} from 'react'

import './index.css'

class Header2 extends Component {
  prevent = event => {
    event.preventDefault()
  }

  render() {
    return (
      <form className="headBackground" onClick={this.prevent}>
        <img
          className="logoNxtwave"
          src="https://res.cloudinary.com/dyei9ewrb/image/upload/v1659162662/assignment/NxtWave_TM_Coloured_logo_1_o7g18u.png"
          alt="logo"
        />
        <div className="innerContainer-2">
          <img
            className="userImage-2"
            src="https://res.cloudinary.com/dyei9ewrb/image/upload/v1659164501/assignment/new_image_1x_p8axkh.png"
            alt="userpic"
          />
        </div>
      </form>
    )
  }
}

export default Header2
