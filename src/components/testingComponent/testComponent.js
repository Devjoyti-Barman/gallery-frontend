import './testComponent.css';
import axios from "axios";
import { useEffect } from "react"
import SimpleImageSlider from "react-simple-image-slider";

import bookmark from '../../images/bookmark.png';
import googleIcon from '../../images/google-icon.png';
import kisanCare from '../../images//kisan-care.jpg';

const images=[
    {url:bookmark},
    {url:googleIcon},
    {url:kisanCare}
]

function TestComponent(){


    return(
        <div>
            {/* <div className='test-component'>
                <div className='display-test-container'>
                    
                    <div className='display-container'>
                       <img className='img-icon' src={bookmark} />
                       <img className='img-icon' src={googleIcon} />
                       <img className='img-icon' src={kisanCare} />

                    </div>

                    <button className='slider-btn slider-prev-btn'>prev</button>
                    <button className='slider-btn slider-next-btn'>next</button>

                </div>
            </div> */}
            <div className='img-slider-container'>
                <SimpleImageSlider
                 
                 images={images}
                 showBullets={true}
                 showNavs={true}
                 width={800}
                 height={604}
                 bgColor='#eee'
                 showBullets={true}
                 navStyle={2}
                 autoPlay={true}
                />
            </div>
            pokemon...
        </div>
    )
}

export default TestComponent;