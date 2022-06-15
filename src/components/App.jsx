import React, { Component } from "react";
import Nav from "./Nav";
import Search from "./Search";
import Users from "./Users";
import axios from "axios";


export class App extends Component {
  constructor(props) {
    super(props);
    this.searchUser = this.searchUser.bind(this);
    this.state = {
      users: [],
    };
  }
  searchUser(keyword) {
    axios
      .get(`https://api.github.com/search/users?q=${keyword}`)
      .then((res) => this.setState({ users: res.data.items }));
  }
  render() {
    return (
      <>
      <section>
      <div className="part-1">  
        <Nav
  
          url="https://github.com"
          logo="fa-brands fa-github-alt"
          text=" GitHub"
        />
        <Search searchValue={this.searchUser} />
      </div>
      <Users uservalue={this.state.users}/>
      </section>
      </>
    );
  }
}

export default App;