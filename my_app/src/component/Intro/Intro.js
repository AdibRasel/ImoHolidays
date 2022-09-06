import React from 'react'
import "./introStyle.css"

import introimg from "../../assets/intro.gif"

function Intro() {
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
                <button className='call_btn'>✆ Contact Us 01827-647280</button>

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