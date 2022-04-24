import React from "react";
import "../css/Contact.css";
import Email from "../img/email.svg";
import QuickAccessBox from "../components/QuickAccessBox";
import Breadcrumps from "./Breadcrumps";

function Contact() {
   return (
      <>
         {/* <Breadcrumps link={"/"} name={"Home"} current={"Contact"} /> */}
         <div className='form-container '>
            <form name='contact' method='post' action='/success.html'>
               <input type='hidden' name='form-name' value='contact' />
               <div className='container'>
                  <h1>How can I help you?</h1>
                  <div className='top'>
                     <p>Full Name *</p>
                     <label>
                        <input
                           type='text'
                           name='name'
                           placeholder='Enter your name'
                        />
                     </label>
                  </div>
                  <div className='middle'>
                     <div className='email'>
                        <p>Email *</p>
                        <label>
                           <input
                              type='email'
                              name='email'
                              placeholder='Enter your email'
                           />
                        </label>
                     </div>
                     <div className='phone'>
                        <p>Phone</p>
                        <label>
                           <input
                              type='number'
                              name='number'
                              placeholder='Enter your number'
                           />
                        </label>
                     </div>
                  </div>
                  <div className='bottom'>
                     <p>Message:</p>
                     <label>
                        <textarea
                           name='message'
                           placeholder='Enter your message here'></textarea>
                     </label>
                  </div>
                  <button type='submit'>Send Message</button>
               </div>
            </form>
            {/* <div className='info'>
               <h1>Contact Me</h1>
               <img src={Email} alt='' />
               <h2>Use the form below or send an email directly to:</h2>
               <h3>
                  <a href='mailto:insertemailhere@xyz.com'>
                     hello@voytashek.com
                  </a>
               </h3>
            </div> */}
         </div>
         <QuickAccessBox />
      </>
   );
}

export default Contact;
