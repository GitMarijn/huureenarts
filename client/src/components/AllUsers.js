import React from "react";
import defaultUser from "../assets/images/default-user-image.png";
import "../assets/styles/style_HuurEenArts.css";

class AllUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [...this.props.users]
    };
  }

  handleChange = event => {
    const value = event.target.value;

    let filtered = this.props.users.filter(user => {
      let voornaam = user.voornaam.toLowerCase();
      let achternaam = user.achternaam.toLowerCase();

      if (
        voornaam.indexOf(value.toLowerCase()) !== -1 ||
        achternaam.indexOf(value.toLowerCase()) !== -1
      )
        return true;
      return false;
    });
    this.setState({
      users: filtered
    });
  };

  calcAge(dateString) {
    var birthday = +new Date(dateString);
    return ~~((Date.now() - birthday) / 31557600000);
  }

  render() {
    return (
      <div>
        <div className="searchbar col-sm-12">
          <input
            type="text"
            id="filter"
            onChange={this.handleChange}
            placeholder="Zoek op naam..."
          />
        </div>

        <div>
          {this.state.users.length === 0 ? (
            <span className="notfound-text">Probeer een andere naam.</span>
          ) : (
            <div className="user-container col-sm-12">
              {console.log(this.state.users)}
              {this.state.users.map((item, index) => (
                <div className="user-card" key={index}>
                  <div className="user-card-top">
                    <img
                      src={`data:image/${item.profilePic.contentType};base64, ${item.profilePic.data}`}
                      alt={item.voornaam}
                      className="profilePic"
                    />
                  </div>
                  <div className="user-card-bottom">
                    <span className="voornaam">{item.voornaam}</span>
                    <span className="geboortedatum">
                      {this.calcAge(item.geboortedatum)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default AllUsers;
