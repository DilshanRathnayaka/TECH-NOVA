import React from 'react';
import { AiFillFacebook, AiFillLinkedin, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoInstagram } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <div id='footer'>
        <div className='company'>
            <h2>Company</h2>
            <NavLink to=''>References</NavLink>
            <NavLink to=''>Method</NavLink>
            <NavLink to=''>Services</NavLink>
            <NavLink to=''>About 99x</NavLink>
            <NavLink to=''>Contact</NavLink> 
        </div>
        <div className='updates'>
            <h2>Updates</h2>
            <NavLink to=''>Careers</NavLink>
            <NavLink to=''>News</NavLink>
            <NavLink to=''>Blog</NavLink>
            <NavLink to=''>Resources</NavLink>
        </div>
        <div className='connect'>
            <h2>Connect</h2>
            <div className='social'>
            <AiFillFacebook/>
            <AiFillLinkedin/>
            <AiOutlineTwitter/>
            <AiFillYoutube/>
            <BiLogoInstagram/>
            </div>
            
        </div>
        <div>
            <p>&copy; 2023 TECH-NOVA</p>
            <p>All Rights Reserved</p>

        </div>
    </div>
  )
}
