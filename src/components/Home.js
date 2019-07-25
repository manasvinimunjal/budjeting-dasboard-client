import React from 'react';
import {NavLink} from 'react-router-dom';


class Home extends React.Component {
  state = {
    state: {
      showNav: false
    }
  }

  openNavClick = e => {
    e.preventDefault()
    this.openNav()
  }

  closeNavClick = e => {
    e.preventDefault()
    this.closeNav()
  }

  openNav = () => {
    this.setState({
      showNav: true
    })

    document.addEventListener("keydown", this.handleEscKey)
  }
  closeNav = () => {
    this.setState({
      showNav: false
    })

    document.removeEventListener("keydown", this.handleEscKey)
  }

  handleEscKey = e => {
    if (e.key === "Escape") {
      this.closeNav()
    }
  }

  render() {
    const { showNav } = this.state
    let navCoverStyle = { width: showNav ? "100%" : "0" }
    let sideNavStyle = { width:  "250px"  }

    return (
      <React.Fragment>
     
        <div
         
          class="nav-cover"
          style={navCoverStyle}
        />
        <div  class="side-nav" style={sideNavStyle}>
         
          <div className="navLinks">
          <h4>Dashboard</h4>
          <NavLink activeClassName="is-active" exact to='/'>Home</NavLink> 
      <NavLink activeClassName="is-active" exact to='/account'>Accounts</NavLink> 
      <NavLink activeClassName="is-active" exact to='/contact'>Budgets</NavLink> 
      <NavLink activeClassName="is-active"  exact to='/category'>Categories</NavLink>
      <NavLink activeClassName="is-active"  exact to='/posts'>Transactions</NavLink>
      </div>
        </div>
      </React.Fragment>
     
    )
  }
}



export default Home;