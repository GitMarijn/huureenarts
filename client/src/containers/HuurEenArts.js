import React from "react";
import "../assets/styles/App.css";
import "../assets/styles/style_HuurEenArts.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AllUsers from "../components/AllUsers";
import { connect } from "react-redux";
import * as actionCreator from "../store/actions/actions";

class HuurEenArts extends React.Component {
  componentDidMount() {
    this.props.getUsers();
    document.title = "Huur een arts - Huur een arts";
  }

  render() {
    if (this.props.usersIsLoading) return <div>Loading...</div>;
    return (
      <React.Fragment>
        <Header />

        <AllUsers
          users={this.props.users.sort(function(a, b) {
            let userA = a.achternaam;
            let userB = b.achternaam;
            return userA < userB ? -1 : userA > userB ? 1 : 0;
          })}
        />

        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    usersIsLoading: state.usersIsLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(actionCreator.fetchUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HuurEenArts);
