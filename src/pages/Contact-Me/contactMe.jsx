import React from "react";
import "./contactMeStyles.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Contact() {
    return(
        <>
            <Header/>
            <form method="post"
                  name="contact"   
                  data-netlify="true"
                  data-netlify-honeypot="true"
            >
                <p>
                    <label>
                        Name 
                        <input type="text" name="name" id="name" placeholder="Your Name"/>
                    </label>
                </p>
                {/* <p>
                    <label>
                        Email 
                        <input type="email" name="email" id="email" placeholder="Your E-mail"/>
                    </label>
                </p> */}
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
            <Footer/>
        </>
    )
}