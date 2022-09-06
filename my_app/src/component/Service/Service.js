import React from 'react'
import "./ServiceStyle.css"


import govtAgency from "../../assets/1govt-agency.png"

import shape1 from "../../assets/shape1.gif"
import shape2 from "../../assets/shape2.gif"
import shape3 from "../../assets/shape3.gif"
import shapeimg1 from "../../assets/shapeimg1.jpg"

function Service() {


   

    // counter code 
    var counter = setInterval(updatedCount, 50);
    var upto=1400;
     
    function updatedCount() {
      var count = document.getElementById('counter');
      count.innerHTML= ++upto;
      if(upto === 1500) {
        clearInterval(counter);
      }
    }
    // end counter code 




  return (
    <div className='Service_Box'>

        <div className="section1">
            
            <div className="s1_left_side">
                <h1>কেন আমাদের কাছ থেকে আন্তর্জাতিক রুটের টিকেট করবেন?</h1>

                <ul>
                    <li>✅ আকর্ষণীয় <span className='heighLisht'> ডিসকাউন্ট। </span> </li>
                    <li>✅ এমবারক্যাশন কার্ড সহ টিকেট <span className='heighLisht'> বাসায় অথবা অফিসে পৌছে দেওয়ার ব্যবস্থা আছে। </span> </li>
                    <li>✅ আপনি চাইলে <span className='heighLisht'> ক্যাশে অথবা POS মেশিনে পেমেন্ট </span> করতে পারবেন।</li>
                    <li>✅ সাথে থাকছে <span className='heighLisht'> নিশ্চিত উপহার। </span> </li>
                    <li>✅<span className='heighLisht'> ফ্রি এয়ারপোর্টে মিট এন্ড গ্রিট সার্ভিস। </span> </li>
                    <li>✅  বিশেষ ক্ষেত্রে এয়ারপোর্ট লাউঞ্জ <span className='heighLisht'> ফ্রি  </span> !!!!!</li>
                    <li>✅ যদি প্রয়োজন হয় তাহলে ডেস্টিনেশন অনুযায়ী ফ্লাইটে উঠার জন্য বিভিন্ন ধরনের <span className='heighLisht'> ফরম পূরণে সাহায্য করা। </span> </li>
                    <li>✅ বেস্ট <span className='heighLisht'> আফটার সেলস সার্ভিস। </span></li>
                </ul>

            </div>

            <div className="s1_right_side">

                <form>      
                    <input name="name" type="text" class="feedback-input" placeholder="Name" />   
                    <input name="email" type="text" class="feedback-input" placeholder="Email" />
                    <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
                    <input type="submit" value="SUBMIT"/>
                </form>
            </div>

        </div>



        <div className="section2">

            <div className="s2_left_side">
                
                <div className="s2_left_side_box">

                    <p>Trip Tricks is the Best Travel and Tourism Agency in Dhaka Bangladesh.</p>
                    <img src={govtAgency} alt="" />

                </div>

            </div>

            <div className="s2_right_side">
                <span>Travelers served last year.</span>
                <div className="count" id='counter'></div>
            
            </div>


        </div>



        <div className="section3">
            

            <img className='shape1' src={shape1} alt="" />
   


        </div>



    </div>
  )
}

export default Service