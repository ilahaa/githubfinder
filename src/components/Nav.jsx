import React, { Component } from "react";

export class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" target="_blank" href={this.props.url}>
            <i class={this.props.logo}></i>
            {this.props.text}
          </a>
        </div>
      </nav>
    );
  }
}

export default Nav;