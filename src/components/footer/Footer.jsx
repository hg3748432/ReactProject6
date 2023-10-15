import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { IoLogoGithub } from 'react-icons/io'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Harsh Gupta</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="" target="_blank" rel="noreferrer"><BsInstagram /></a>
        <a href="" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/hg3748432/ReactProjects" target="_blank" rel="noreferrer"><IoLogoGithub /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Harsh Gupta. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer