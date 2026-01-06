import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={facebook_icon} alt="Facebook" />

        <a
          href="https://www.instagram.com/pratham.huh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram_icon} alt="Instagram" />
        </a>

        <a
          href="https://x.com/prathamiscoding"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter_icon} alt="Twitter" />
        </a>

        <img src={youtube_icon} alt="YouTube" />
      </div>

      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>

      <p className="copyright-text">
        © 1997–2026 Prathamflix, Inc.
      </p>
    </div>
  )
}

export default Footer
