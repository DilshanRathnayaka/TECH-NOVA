import React,{useEffect} from 'react'
import { NavLink } from 'react-router-dom'

export default function Pricing() {
      useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
  return (
     <div  id='pricing-main'>
    <div id='pricing'>
      <NavLink to='/packages'>
        <div className="package">
              <h2>BASIC PACKAGE</h2>
              <h4>30$</h4>
              <h5>3 pages</h5>
              <h5>Design customization</h5>
              <h5>Content upload</h5>
              <h5>Responsive design</h5>
              <h5>Source code</h5>
              <h5>Detailed code comments</h5>
              <h5>Unlimited Revisions</h5>
              <h5>4 Days Delivery</h5>
        </div>
        </NavLink>
        <NavLink to='/packages'>
        <div className="package-mid">
              <h2>STANDARD PACKAGE</h2>
              <h4>150$</h4>
              <h5>5 pages</h5>
              <h5>Design customization</h5>
              <h5>Content upload</h5>
              <h5>Responsive design</h5>
              <h5>Source code</h5>
              <h5>Detailed code comments</h5>
              <h5>Unlimited Revisions</h5>
              <h5>7 Days Delivery</h5>
        </div>
        </NavLink>
        <NavLink to='/packages'>
        <div className="package">
              <h2>PREMIUM PACKAGE</h2>
              <h4>250$</h4>
              <h5>10-15 pages</h5>
              <h5>Design customization</h5>
              <h5>Content upload</h5>
              <h5>Responsive design</h5>
              <h5>Source code</h5>
              <h5>Detailed code comments</h5>
              <h5>Unlimited Revisions</h5>
              <h5>14 Days Delivery</h5>
        </div> 
        </NavLink>
    </div></div>
  )
}
