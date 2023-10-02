// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'



export class Navbar extends Component {
//   static propTypes = {}

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/">NewsMonkey</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><Link className="nav-link" to="/" style={{color:'white'}}>General</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/business" style={{color:'blue'}}>Business</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/entertainment" style={{color:'red'}}>Entertainment</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/health" style={{color:'green'}}>Health</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/technology" style={{color:'grey'}}>Technology</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/science" style={{color:'yellow'}}>Science</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/sports" style={{color:'purple'}}>Sports</Link></li>
        
      </ul>
      
    </div>
    </div>
    </nav>
      </div>
    )
  }
}

export default Navbar