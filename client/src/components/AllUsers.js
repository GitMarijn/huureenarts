import React from "react";
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

  render() {
    return (
      <div>
        <div className="searchbar">
          <input
            type="text"
            id="filter"
            onChange={this.handleChange}
            placeholder="Zoek op naam..."
          />
        </div>

        <div className="user-container">
          {this.state.users.length === 0 ? (
            <span className="notfound-text">Probeer een andere naam.</span>
          ) : (
            <div>
              {this.state.users.map((item, index) => (
                <div className="user-card" key={index}>
                  <span className="user-card-voornaam">{item.voornaam}</span>
                  <span className="user-card-achternaam">
                    {item.achternaam}
                  </span>
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
