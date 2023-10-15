import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
import { AiFillYoutube } from "react-icons/ai";
import { BsInstagram } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="" target="_blank" rel="noreferrer"><BsInstagram /></a>
      <a href="" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/hg3748432/ReactProjects" target="_blank" rel="noreferrer"><IoLogoGithub /></a>
    </div>
  )
}

export default HeaderSocials