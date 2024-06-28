import React, { useRef } from 'react'
import './Testimonials.css'
import  next_icon from '../../assets/next-icon.png'
import  back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testimonials = () => {

  const slider = useRef();
  let tx = 0;

const slideForward = () => {
if(tx>-50){
  tx -= 25;
}
slider.current.style.transform = `translateX(${tx}%)`
}
const slideBackward = () => {
  if(tx < 0){
    tx += 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`
}

  
  
  return (
    <div className='testimonials'>
        <img src={next_icon} alt=""  className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt=""  className='back-btn' onClick={slideBackward}/>
       <div className="slider">
     <ul ref={slider}>
        <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_1} alt="user-1" />
                    <div> 
                        <h3>Raj Sinha</h3>
                        <span>Edusity , India</span>
                    </div>
                </div>
                <p>
                In my experience all the teachers are very supportive and friendly and the placement process has been very smooth throughout. I would always be very grateful for the lifelong connections I made</p>
            </div></li>
            <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_2} alt="user-2" />
                    <div> 
                        <h3>Aniket Raj</h3>
                        <span>Edusity , India</span>
                    </div>
                </div>
                <p>
                "My experience at this University is great and memorable. The mentors at University helped us enhance my academic and interpersonal skills. I am thankful to Training & Placement cell for providing a platform to enhance my skills "</p>
            </div></li>
            <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_3} alt="user-3" />
                    <div> 
                        <h3>Karan Roy</h3>
                        <span>Edusity , India</span>
                    </div>
                </div>
                <p>
                I would like to appreciate the placement cell at  for the efforts they made for providing a fair and ample amount of chances to us students. The faculty members worked so hard on our overall development </p>
            </div></li>
            <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_4} alt="user-4" />
                    <div> 
                        <h3>Snehal Kundra</h3>
                        <span>Edusity , India</span>
                    </div>
                </div>
                <p>
                My life at this university made me stronger and took me a step ahead for being an independent women</p>
            </div></li>
     </ul>
       </div>
    </div>
  )
}

export default Testimonials