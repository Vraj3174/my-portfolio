import React from "react";
import "./contactMeStyles.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Contact() {
    return(
        <>
            <Header/>

            <div className="container">
                <h1>Contact Form</h1>

                <form 
                    method="post"
                    name="contact"   
                    data-netlify="true"
                    onSubmit="submit"
                >
                    <input type="hidden" name="form-name" value="contact"/>

                    <label for="firstName">
                        First Name
                        <input type="text" id="firstName" name="firstName" placeholder="Your First Name"/>
                    </label>
                    <label for="lastName">
                        Last Name
                        <input type="text" id="lastName" name="lastName" placeholder="Your Last Name"/>
                    </label>
                    <label for="email">
                        E-mail
                        <input type="text" id="email" name="email" placeholder="Your E-mail"/>
                    </label>
                    <label for="Message">
                        Message
                        <input type="text" id="message" name="message" placeholder="Enter a Message"/>
                    </label>

                    <button className="button type2" type="submit">Send</button>
                </form>
            </div>
            
            {/* <div className="container">
                <form 
                    method="post"
                    name="contact"   
                    data-netlify="true"
                    onSubmit="submit"
                >
                    <input type="hidden" name="form-name" value="contact"/>
                    <p>
                        <label>
                            Name 
                            <input type="text" name="name" id="name" placeholder="Your Name"/>
                        </label>
                    </p>
                    <p>
                        <label>Email <input type="email" name="email" id="email" placeholder="Your E-mail"/></label>
                    </p>
                    <p>
                        <label>Message <input type="info" name="info" id="info" placeholder="Your Message"/></label>
                    </p>
                    <p>
                        <button className="button type2" type="submit">Send</button>
                    </p>
                </form>
            </div> */}
            <Footer/>
        </>
    )
}