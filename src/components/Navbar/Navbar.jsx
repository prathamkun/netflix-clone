import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navRef = useRef()
  const fileInputRef = useRef()
  const navigate = useNavigate()

  const [profilePhoto, setProfilePhoto] = useState(
    localStorage.getItem('profilePhoto') || profile_img
  )

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark')
      } else {
        navRef.current.classList.remove('nav-dark')
      }
    })
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

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" onClick={() => navigate('/')} />
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
        <img src={search_icon} alt="" className="icons" />
        <p>Children</p>
        <img src={bell_icon} alt="" className="icons" />

        <div className="navbar-profile">
          <img
            src={profilePhoto}
            alt="Profile"
            className="profile"
            onClick={() => fileInputRef.current.click()}
          />

          <img src={caret_icon} alt="" />

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
