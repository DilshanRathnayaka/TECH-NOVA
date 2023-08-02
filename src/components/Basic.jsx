import React from 'react';
import { AiOutlineClockCircle, AiOutlineSync } from 'react-icons/ai';
import { CgArrowLongRightR } from 'react-icons/cg';
import Fade from "react-reveal";

export default function Basic() {
  return (
    <div id='Basic'>
      <Fade top distance="10%" duration={1500}>
        <div className='basic-package'>
          <h1 className='basic-package-h1'>Basic Package</h1>
          <div className='basic-package-container'>
            <h4><div className='icons'><CgArrowLongRightR /></div>Develop a MERN Stack web Application with 3 pages</h4>
            <h4><div className='icons'><CgArrowLongRightR /></div>Technologies : <span>MERN Stack</span>  / <span>Angular</span>  / <span>Next js</span> </h4>
            <h4><div className='icons'><CgArrowLongRightR /></div>Design customization</h4>
            <h4><div className='icons'><CgArrowLongRightR /></div>Content upload</h4>
            <h4><div className='icons'><CgArrowLongRightR /></div>Responsive design</h4>
            <h4><div className='icons'><CgArrowLongRightR /></div>Source code</h4>
            <h4><div className='icons'><CgArrowLongRightR /></div>Detailed code comments</h4>
            <h4><div className='icons'><AiOutlineSync /></div>Delivery within 4 Days </h4>
            <h4><div className='icons'><AiOutlineClockCircle /></div> Unlimited Revisions</h4>
          </div>
        </div>
      </Fade>
      <Fade top distance="10%" duration={1500}>
        <div className='basic-package'>
          <div className='hide-class'>Standard  Package</div>
          <div className='basic-package-container'>
            <h4><div className='icons'><CgArrowLongRightR /></div>Develop 5 Pages MERN Stack Responsive Website and Beautiful Design.With 4 CRUD Operations</h4>
            <h4><div className='icons'><CgArrowLongRightR /></div>Technologies : <span className='blue'>MERN Stack</span> </h4>
            <h4><div className='icons'><CgArrowLongRightR /></div>Design customization</h4>
            <h4><div className='icons'><CgArrowLongRightR /></div>Content upload</h4>
            <h4><div className='icons'><CgArrowLongRightR /></div>Responsive design</h4>
            <h4><div className='icons'><CgArrowLongRightR /></div>Source code</h4>
            <h4><div className='icons'><CgArrowLongRightR /></div>Detailed code comments</h4>
            <h4><div className='icons'><AiOutlineSync /></div>Delivery within 7 Days </h4>
            <h4><div className='icons'><AiOutlineClockCircle /></div> Unlimited Revisions</h4>
          </div>
          <div className='hide-class1'>Standard  Package</div>
        </div>
      </Fade>
      <Fade top distance="10%" duration={1500}>
        <div className='basic-package'>
          <h1>Premium Package</h1>
          <div className='basic-package-container'>
            <h4><div className='icons'><CgArrowLongRightR /></div>Develop a Professional Web Application Consisting of 10-15 pages With Login/Signup Authentication and CRUD Operations.</h4>
            <h4><div className='icons'><CgArrowLongRightR /></div>Technologies : <span>MERN Stack</span> </h4>
            <h4><div className='icons'><CgArrowLongRightR /></div>Design customization</h4>
            <h4><div className='icons'><CgArrowLongRightR /></div>Content upload</h4>
            <h4><div className='icons'><CgArrowLongRightR /></div>Responsive design</h4>
            <h4><div className='icons'><CgArrowLongRightR /></div>Source code</h4>
            <h4><div className='icons'><CgArrowLongRightR /></div>Detailed code comments</h4>
            <h4><div className='icons'><AiOutlineSync /></div>Delivery within 14 Days </h4>
            <h4><div className='icons'><AiOutlineClockCircle /></div> Unlimited Revisions</h4>
          </div>
        </div>
      </Fade>
    </div>
  )
}
