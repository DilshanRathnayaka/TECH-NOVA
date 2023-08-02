import React, { useEffect } from "react";
import aws from '../Assets/NEXT__11_-removebg-preview.png';
import next from '../Assets/Untitled_design__2_-removebg-preview.png';
import angular from '../Assets/angular.png';
import azure from '../Assets/azure.png';
import figma from '../Assets/figma.png';
import ads from '../Assets/google ads.png';
import analytics from '../Assets/google analytics.png';
import javascript from '../Assets/javascript.png';
import mongo from '../Assets/mongodb.png';
import node from '../Assets/nonejs.png';
import react from '../Assets/react.png';
import Basic from './Basic';

export default function Packages() {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
  return (
    <><div id='Home-package'>
          <h1>Select Best Package for Your Budget</h1>
          <h2>Scroll Down For Package Details</h2>
          <h1 className="powerhouse">PACKAGES</h1>
          <p className='paragraph'>TechNova provides everything from expert advice to dedicated staffing, taking </p>
          <p>your business from idea to implementation.</p>
          <h4 className='EXPERTS'>EXPERTS IN</h4>
          <div class="logos">
              <div class="logos-slide1">
                  <img src={react} alt="" />
                  <img src={angular} alt="" />
                  <img src={next} alt="" />
                  <img src={aws} alt="" />
                  <img src={azure} alt="" />
                  <img src={ads} alt="" />
                  <img src={analytics} alt="" />
                  <img src={javascript} alt="" />
                  <img src={mongo} alt="" />
                  <img src={node} alt="" />
                  <img src={figma} alt="" />
              </div>

              <div class="logos-slide2">
                  <img src={react} alt="" />
                  <img src={angular} alt="" />
                  <img src={next} alt="" />
                  <img src={aws} alt="" />
                  <img src={azure} alt="" />
                  <img src={ads} alt="" />
                  <img src={analytics} alt="" />
                  <img src={javascript} alt="" />
                  <img src={mongo} alt="" />
                  <img src={node} alt="" />
                  <img src={figma} alt="" />
              </div>
          </div>

      </div><Basic /></>
  )
}
