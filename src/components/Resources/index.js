import { Component } from "react";
import "./index.css";

class Resources extends Component {
  render() {
    return (
      <div className="pageBackground">
        <div className="headBackground">
          <img
            className="logoNxtwave"
            src="https://res.cloudinary.com/dyei9ewrb/image/upload/v1659162662/assignment/NxtWave_TM_Coloured_logo_1_o7g18u.png"
            alt="logo"
          />
          <div>
            <button className="addButton1">
              <img
                className="addButton"
                src="https://res.cloudinary.com/dyei9ewrb/image/upload/v1659163432/assignment/Default_rp2eag.png"
                alt="add"
              />
            </button>
            <img
              className="userImage"
              src="https://res.cloudinary.com/dyei9ewrb/image/upload/v1659164501/assignment/new_image_1x_p8axkh.png"
              alt="userpic"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Resources;
