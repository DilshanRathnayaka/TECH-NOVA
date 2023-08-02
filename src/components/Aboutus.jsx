import React,{useEffect} from 'react'
import me from '../Assets/me.jpg'
import Animation from './Animation'

export default function Aboutus() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <div id='aboutus'>
      <div className='about-us-container'>
        <h1>ABOUT ME</h1>
        <h2><Animation /></h2>
        <img className='me-image' src={me} alt="" />
      </div>
      <p className='intro'>I am 4th year undergraduate student in Sri lanka
        institute of information technology(SLIIT). I am
        Studying Bsc.(Hons)information Technology. I am
        interested in web application development and
        Quality Assurance Engineering</p>
    </div>
  )
}
