import React,{useEffect} from 'react';
import mobile from "../Assets/mobile-development.png";
import service from "../Assets/services.png";
import web from "../Assets/web-development.png";
import Fade from "react-reveal";


export default function Services() {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
    return (
        <div id='services'>
            <Fade top distance="10%" duration={1500}>
                <div className="web-development">
                    <img className='web-development-image-secret' src={web} alt="" />
                    <div className='web-development-content'>
                        <h2 className='web-development-h2'>WEB APPLICATIONS</h2>
                        <p className='web-development-paragraph'>We build applications that are designed for scale, and for interactivity – offering your partners the ability to integrate their systems with yours through secure APIs.</p>
                    </div>
                    <img className='web-development-image' src={web} alt="" />
                </div>
            </Fade>
            <Fade top distance="10%" duration={1500}>
                <div className="web-development">
                    <img className="web-development-image-secret" src={service} alt="" />
                    <img className="web-development-image" src={service} alt="" />
                    <div className='web-development-content'>
                        <h2 className='web-development-h2'>FULL SUPPORT</h2>
                        <p className='web-development-paragraph'>Our involvement starts at concept stage, and doesn’t end when the product is signed off – we build relationships with our customers that last.</p>
                    </div>
                </div>
            </Fade>
            <Fade top distance="10%" duration={1500}>
                <div className="web-development">
                    <img className="web-development-image-secret" src={mobile} alt="" />
                    <div className='web-development-content'>
                        <h2 className='web-development-h2'>MOBILE APPLICATIONS</h2>
                        <p className='web-development-paragraph'>Our team can design and build applications for Android or iOS when required – and we work with you to determine what the right solutions are for your business needs.</p>
                    </div>
                    <img className="web-development-image" src={mobile} alt="" />
                </div>
            </Fade>
        </div>
    )
}
