import React from 'react'
import "./ServiceStyle.css"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


import govtAgency from "../../assets/1govt-agency.png"

import shape1 from "../../assets/shape1.gif"
import shape2 from "../../assets/shape2.gif"
import shape3 from "../../assets/shape3.gif"
import shapeimg1 from "../../assets/shapeimg1.jpg"


// service image 
import serviceimg from "../../assets/serviceimg.png"
import travel1 from '../../assets/travel1.gif'
import travel2 from '../../assets/travel2.gif'
import travel3 from '../../assets/travel3.gif'
import travel4 from '../../assets/travel4.gif'


// bootstrap 
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Service() {


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
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
   

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
            
            <div className="s1_left_side"   data-aos="flip-left" >
                <h1>কেন আমাদের কাছ থেকে আন্তর্জাতিক রুটের টিকেট করবেন?</h1>

                <ul>
                    <li>✅ আকর্ষণীয় <span className='heighLisht'> ডিসকাউন্ট। </span> </li>
                    <li>✅ এমবারক্যাশন কার্ড সহ টিকেট <span className='heighLisht'> বাসায় অথবা অফিসে পৌছে দেওয়ার ব্যবস্থা আছে। </span> </li>
                    <li>✅ আপনি চাইলে <span className='heighLisht'> ক্যাশে অথবা POS মেশিনে পেমেন্ট </span> করতে পারবেন।</li>
                    <li>✅ সাথে থাকছে <span className='heighLisht'> নিশ্চিত উপহার। </span> </li><br />
                    <li>✅<span className='heighLisht'> ফ্রি এয়ারপোর্টে মিট এন্ড গ্রিট সার্ভিস। </span> </li>
                    <li>✅  বিশেষ ক্ষেত্রে এয়ারপোর্ট লাউঞ্জ <span className='heighLisht'> ফ্রি  </span> !!!!!</li>
                    <li>✅ যদি প্রয়োজন হয় তাহলে ডেস্টিনেশন অনুযায়ী ফ্লাইটে উঠার জন্য বিভিন্ন ধরনের <span className='heighLisht'> ফরম পূরণে সাহায্য করা। </span> </li>
                    <li>✅ বেস্ট <span className='heighLisht'> আফটার সেলস সার্ভিস। </span></li>
                </ul>

            </div>

            <div className="s1_right_side"  data-aos="flip-right">
                <h1>Get Free Quotation</h1>
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

                    <p   data-aos="fade-down">Trip Tricks is the Best Travel and Tourism Agency in Dhaka Bangladesh.</p>
                    < img src={govtAgency} alt=""   data-aos="fade-up-right"/>

                </div>

            </div>

            <div className="s2_right_side"   data-aos="fade-up-left"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" >
                <span>Travelers served last year.</span>
                <div className="count" id='counter'></div>
            
            </div>


        </div>



        <div className="section3"   data-aos="flip-left"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" >
            
            <img className='shape1' src={shape1} alt="" />
   

        </div>



        <div className="section4">
                    <h1  data-aos="flip-up"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" >Our Service</h1>
            <div className="row">
                {/* side 1  */}
                <div className="col-md-4"  data-aos="fade-up-right"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" >

                    
                            <Card.Img variant="top" src={serviceimg} className='service_img' />
                            <Card.Body>
                            <Card.Title>title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                            </Card.Body>
                    

                </div>


                {/* side 2 */}
                <div className="col-md-4"  data-aos="fade-up"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" >


           
                            <Card.Img variant="top" className='service_img' src={serviceimg} />
                            <Card.Body>
                            <Card.Title>title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                            </Card.Body>
                
                </div>
                
                
                
                {/* side 3 */}
                <div className="col-md-4"  data-aos="fade-up-left"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" >


              
                            <Card.Img variant="top" className='service_img' src={serviceimg} />
                            <Card.Body>
                            <Card.Title>title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                            </Card.Body>
                 

                </div>

{/* ========================================== */}
                
                {/* side 1  */}
                <div className="col-md-4"  data-aos="fade-up-right"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" >

                    
                            <Card.Img variant="top" className='service_img' src={serviceimg} />
                            <Card.Body>
                            <Card.Title>title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                            </Card.Body>
                      

                </div>


                {/* side 2 */}
                <div className="col-md-4"  data-aos="fade-up"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" >


                            <Card.Img variant="top" className='service_img' src={serviceimg} />
                            <Card.Body>
                            <Card.Title>title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                            </Card.Body>
                     

                </div>
                
                
                
                {/* side 3 */}
                <div className="col-md-4"  data-aos="fade-up-left"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" >


                            <Card.Img variant="top" className='service_img' src={serviceimg} />
                            <Card.Body>
                            <Card.Title>title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                            </Card.Body>
                   

                </div>

{/* =============================================== */}

                {/* side 1  */}
                <div className="col-md-4"  data-aos="fade-up-right"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" >

                 
                            <Card.Img variant="top" className='service_img' src={serviceimg} />
                            <Card.Body>
                            <Card.Title>title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                            </Card.Body>
                   

                </div>


                {/* side 2 */}
                <div className="col-md-4"  data-aos="fade-up"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" >


                            <Card.Img variant="top" className='service_img' src={serviceimg} />
                            <Card.Body>
                            <Card.Title>title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                            </Card.Body>
                  

                </div>
                
                
                
                {/* side 3 */}
                <div className="col-md-4"  data-aos="fade-up-left"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" >


               
                            <Card.Img variant="top" className='service_img' src={serviceimg} />
                            <Card.Body>
                            <Card.Title>title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                            </Card.Body>
                       

                </div>

{/* ============================================ */}

                {/* side 1  */}
                <div className="col-md-4"  data-aos="fade-up-right"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" >

                
                            <Card.Img variant="top" src={serviceimg} />
                            <Card.Body>
                            <Card.Title>title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                            </Card.Body>
                       

                </div>


                {/* side 2 */}
                <div className="col-md-4"  data-aos="fade-up"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" >


                            <Card.Img variant="top" src={serviceimg} />
                            <Card.Body>
                            <Card.Title>title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                            </Card.Body>
                     

                </div>
                
                
                
                {/* side 3 */}
                <div className="col-md-4"  data-aos="fade-up-left"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" >


                            <Card.Img variant="top" src={serviceimg} />
                            <Card.Body>
                            <Card.Title>title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                            </Card.Body>
                    

                </div>




            </div>



        </div>



        <div className="section5">
            {/* <img src={shape2} alt="" /> */}
                <hr />
                <hr />
                <hr />
            <h1   data-aos="zoom-in"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" >Present Special Tour Packages</h1>

            <div className="row">

                <div className="col-md-6"   data-aos="flip-left"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" >
                    <div className="title_Tour">ট্রুর প্যাকেজ</div>
                        <div className="TourPackagesImg">
                        <img src={travel2} alt="" />
                    </div>

                </div>

                <div className="col-md-6"   data-aos="flip-right"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" >
                    <div className="title_Tour">ট্রুর প্যাকেজ</div>                    
                        <div className="TourPackagesImg">
                        <img src={travel2} alt="" />
                    </div>
                </div>

                
                <div className="col-md-6"   data-aos="flip-left"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" >
                    <div className="title_Tour">ট্রুর প্যাকেজ</div>                    
                         <div className="TourPackagesImg">
                        <img src={travel2} alt="" />
                    </div>
                </div>

                <div className="col-md-6"   data-aos="flip-left"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" >
                    <div className="title_Tour">ট্রুর প্যাকেজ</div>                    
                        <div className="TourPackagesImg">
                        <img src={travel2} alt="" />
                    </div>
                </div>



            </div>

        </div>


    </div>
  )
}

export default Service