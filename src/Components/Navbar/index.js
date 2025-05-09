import {Link} from 'react-router-dom'
import {useState} from 'react'

import './index.css'

const Navbar = () => {
  const [value, setValue] = useState('')

  const getValue = event => {
    setValue(event.target.value)
  }

  return (
    <div className="nav-container">
      <div className="nav-heading-btns">
        <h1 className="nav-heading">movieDB</h1>
        <div className="nav-btns-container">
          <Link className="link" to="/">
            <button className="nav-btn">Popular</button>
          </Link>
          <Link className="link" to="/top-rated">
            <button className="nav-btn">Top Rated</button>
          </Link>
          <Link className="link" to="/upcoming">
            <button className="nav-btn">Upcoming</button>
          </Link>
        </div>
      </div>
      <input
        type="text"
        className="nav-search-container"
        placeholder="Enter Movie Name..."
        onChange={getValue}
      />
      <br />
      {!value ? (
        <button className="nav-btn">Search</button>
      ) : (
        <Link className="link" to={`/search/${value}`}>
          <button className="nav-btn">Search</button>
        </Link>
      )}
    </div>
  )
}

export default Navbar
