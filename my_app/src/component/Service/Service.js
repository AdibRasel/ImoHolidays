import React from 'react'
import "./ServiceStyle.css"

import govtAgency from "../../assets/1govt-agency.png"

function Service() {
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
                
                <p>Trip Tricks is the Best Travel and Tourism Agency in Dhaka Bangladesh.</p>

                <img src={govtAgency} alt="" />

            </div>

            <div className="s2_right_side">

                <div className="cout">
                    
                </div>
            
            </div>


        </div>



    </div>
  )
}

export default Service