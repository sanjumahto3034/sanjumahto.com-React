import React from "react";
import "./LetsTalk.css";
import lets_talk_image from "./lets_talk.jpg";
import { IoLogoInstagram } from "react-icons/io5";
function LetsTalk() {
  return (
    <div className="lets_talk_main_container">
      <div className="lets_talk_using_link">
        <div className="lets_talk_link_parent">
          <div className="lets_talk_link"><IoLogoInstagram />Address - Jaipur, Rajasthan, India</div>
          <div className="lets_talk_link"><IoLogoInstagram />Instagram - @sanjumahto3034</div>
          <div className="lets_talk_link"><IoLogoInstagram />Facebook - @sanjumahto3034</div>
          <div className="lets_talk_link"><IoLogoInstagram />Twitter - @sanjumahto3034</div>
          <div className="lets_talk_link"><IoLogoInstagram />e-mail  - sanjumahto3034@gmail.com</div>
        </div>
        <div className="lets_talk_mail_parent">

          <div className="lets_talk_full_name">
            <input
              className="lets_talk_input_box"
              placeholder="Full Name"
              inputMode="text"
            ></input>
          </div>


          <div className="lets_talk_email">
            <input
              className="lets_talk_input_box"
              placeholder="example@email.com"
              inputMode="email"
            ></input>
          </div>


          <div className="lets_talk_message_box">
            <input
              className="lets_talk_input_box"
              placeholder="Message"
              inputMode="text"
            ></input>
          </div>
          <div className="lets_talk_send_button">Send</div>
        </div>
      </div>
    </div>
  );
}

export default LetsTalk;
