import React,{useEffect} from 'react'

export default function Contactme() {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
  return (
    <div id='contactme'>
        <div className='right'>
        <h1>Address</h1>
        <h2>Nimesh Dilshan,</h2>
        <h2>Habarana Road Palugaswewa,</h2>
        <h2>50144, Sri Lanka</h2>
        </div>
       <div className='left'>
       <h1>Contact</h1>
        <h2>Phone : 0760027605 / 0721222260</h2>
        <h2>Email : nimesh9945dilshan@gmail.com</h2>
        
       </div>
    </div>
  )
}
