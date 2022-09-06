import React from 'react'
import "./introStyle.css"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

import introimg from "../../assets/intro.gif"

function Intro() {


    AOS.init();

        // You can also pass an optional settings object
        // below listed default settings
        AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        

        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 20, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

        });


  return (
    <div className='Main_Box'>

        <div className="Left_Side">

            <div className="Title_Box">

                <span className='title'>
                    <span className='one_color'> Your </span> <br /> Trusted Partner
                </span><br />
                <span className='sub_title'>
                    <span className='two_color'>imo</span>Holidays
                </span><br />
                <button  data-aos="fade-right"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"   className='call_btn'>✆ Contact Us 01827-647280</button>

            </div>

        </div>

        <div className="Right_Side">

            <div className="Right_Box">
                <img src={introimg} alt="" />
            </div>

        </div>


    </div>
  )
}

export default Intro