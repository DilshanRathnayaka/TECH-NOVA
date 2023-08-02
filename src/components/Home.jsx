import React,{useEffect} from "react";
import figma from '../Assets/figma.png';
import next from '../Assets/nextjs.png';
import aws from '../Assets/aws.png';
import azure from '../Assets/azure.png';
import analytics from '../Assets/google analytics.png';
import mongo from '../Assets/mongodb.png';
import node from '../Assets/nonejs.png';
import ads from '../Assets/google ads.png';
import javascript from '../Assets/javascript.png';
import react from '../Assets/react.png';
import angular from '../Assets/angular.png';
import Services from "./Services";
import Pricing from "./Pricing";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <div id='Home'>
      <h1>Your Product Engineering</h1>
      <h1>+ Growth Marketing</h1>
      <h1 className="powerhouse">Powerhouse</h1>
      <p className='paragraph'>TechNova provides everything from expert advice to dedicated staffing, taking </p>
      <p>your business from idea to implementation.</p>
      <h4 className='EXPERTS'>EXPERTS IN</h4>
      <div class="logos">
      <div class="logos-slide1">
        <img src={react} alt=""/>
        <img src={angular}alt="" />
        <img src={next}alt="" />
        <img src={aws} alt=""/>
        <img src={azure} alt=""/>
        <img src={ads} alt=""/>
        <img src={analytics} alt=""/>
        <img src={javascript} alt=""/>
        <img src={mongo} alt=""/>
        <img src={node} alt=""/>
        <img src={figma} alt=""/>
      </div>

      <div class="logos-slide2">
      <img src={react} alt=""/>
        <img src={angular} alt=""/>
        <img src={next} alt=""/>
        <img src={aws} alt=""/>
        <img src={azure} alt=""/>
        <img src={ads} alt=""/>
        <img src={analytics} alt=""/>
        <img src={javascript} alt=""/>
        <img src={mongo} alt=""/>
        <img src={node} alt=""/>
        <img src={figma} alt=""/>
      </div>
    </div>
<Services/>
<Pricing/>

    </div>
  )
}
