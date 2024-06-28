import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
   <div className="about-left">
     <img src={about_img} alt="" className='about-img' />
     <img src={play_icon} alt="" className='play-icon' onClick={()=>{
      setPlayState(true)
     }}  />
   </div>
   <div className="about-right">
    <h3>About University</h3>
    <h2>Nurturing Tomorrow's Leaders Today</h2>
    <p>A university is an institution of higher education and research which awards academic degrees in several academic disciplines. University is derived from the Latin phrase universitas magistrorum et scholarium..</p>
    <p>An important idea in the definition of a university is the notion of academic freedom. The first documentary evidence of this comes from early in the life of the University of Bologna, which adopted an academic charter.</p>
    <p>Today, this is claimed as the origin of "academic freedom".This is now a widely accepted concept in international research. On 18 September 1988, 430 university rectors signed the Magna Charta Universitatum, marking the 900th anniversary of Bologna's foundation. </p>
    </div>
    </div>
  )
}

export default About