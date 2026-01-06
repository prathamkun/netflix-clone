import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'
import { useNavigate, Link } from 'react-router-dom'
import { library } from '../../data/library'

const Navbar = () => {
  const navRef = useRef()
  const fileInputRef = useRef()
  const navigate = useNavigate()

  const [profilePhoto, setProfilePhoto] = useState(
    localStorage.getItem('profilePhoto') || profile_img
  )

  const [showSearch, setShowSearch] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark')
      } else {
        navRef.current.classList.remove('nav-dark')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onloadend = () => {
      setProfilePhoto(reader.result)
      localStorage.setItem('profilePhoto', reader.result)
    }
    reader.readAsDataURL(file)
  }

  const removeProfilePhoto = () => {
    setProfilePhoto(profile_img)
    localStorage.removeItem('profilePhoto')
  }

  const handleSearch = (value) => {
    setQuery(value)

    if (!value.trim()) {
      setResults([])
      return
    }

    const filtered = library.filter(item =>
      item.title.toLowerCase().includes(value.toLowerCase())
    )

    setResults(filtered)
  }

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" onClick={() => navigate('/')} />
        <ul>
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/movies')}>TV Shows</li>
          <li onClick={() => navigate('/movies')}>Movies</li>
          <li onClick={() => navigate('/movies')}>New & Popular</li>
          <li onClick={() => navigate('/movies')}>My List</li>
          <li onClick={() => navigate('/movies')}>Browse by Languages</li>
        </ul>
      </div>

      <div className="navbar-right">
        <div className="search-box">
          <img
            src={search_icon}
            alt="Search"
            className="icons"
            onClick={() => setShowSearch(!showSearch)}
          />

          {showSearch && (
            <div className="search-dropdown">
              <input
                type="text"
                placeholder="Search movies, anime, series..."
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                autoFocus
              />

              <div className="search-results">
                {results.slice(0, 6).map((item, index) => (
                  <Link
                    key={index}
                    to={`/player/archive_${item.archiveId}`}
                    className="search-item"
                    onClick={() => {
                      setShowSearch(false)
                      setQuery('')
                      setResults([])
                    }}
                  >
                    {item.title}
                  </Link>
                ))}

                {results.length === 0 && query && (
                  <p className="search-empty">No results found</p>
                )}
              </div>
            </div>
          )}
        </div>

        <p>Children</p>
        <img src={bell_icon} alt="Notifications" className="icons" />

        <div className="navbar-profile">
          <img
            src={profilePhoto}
            alt="Profile"
            className="profile"
            onClick={() => fileInputRef.current.click()}
          />
          <img src={caret_icon} alt="Caret" />

          <div className="dropdown">
            <p onClick={() => fileInputRef.current.click()}>
              Change Profile Photo
            </p>
            <p onClick={removeProfilePhoto}>Remove Profile Photo</p>
            <p onClick={() => logout()}>Sign Out of Netflix</p>
          </div>

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar
