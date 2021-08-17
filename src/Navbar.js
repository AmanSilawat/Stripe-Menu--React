import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context';


const Navbar = () => {
  const { open_sidebar, open_submenu, close_submenu } = useGlobalContext()

  const display_submenu = (e) => {
    const page = e.target.textContent;
    const temp_btn = e.target.getBoundingClientRect();

    const center = (temp_btn.left + temp_btn.right) / 2;
    const bottom = temp_btn.bottom - 3;

    open_submenu(page, { center, bottom })
  }

  const handle_submenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      close_submenu()
    }
  }

  return (
    <nav className="nav" onMouseOver={handle_submenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="coding time" />
          <button className="btn toggle-btn" onClick={open_sidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={display_submenu}>products</button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={display_submenu}>developers</button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={display_submenu}>company</button>
          </li>
        </ul>
        <button className="btn signin-btn">
          Sign in
        </button>
      </div>
    </nav>
  )
}

export default Navbar
