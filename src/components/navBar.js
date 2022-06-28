import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {

  constructor(){
    super();
    this.state ={
      searchLink: ""
    }
  }
  handleOnChange = (event) => {
    this.setState({
      searchLink: "/search/"+ event.target.value
    })
  };
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Newsy
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  
                {
                    //eslint-disable-next-line
                  }<a
                  
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categories
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/business">
                        Business
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/entertainment">
                        Entertainment
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/health">
                        Health
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/science">
                        Science
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/sport">
                        Sport
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/technology">
                        Technology
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/general">
                        General
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          {/* <span className="d-flex my-2 mx-2">
        <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search" onChange={this.handleOnChange}/>
        <Link to= {this.state.searchLink} state={{query: 'tesla'}}><button className="btn btn-outline-danger" type="button">Search</button></Link>
      </span> */}
        </nav>
      </>
    );
  }
}
