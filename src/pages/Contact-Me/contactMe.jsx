import React from "react";
import "./contactMeStyles.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Contact() {
    return(
        <>
            <Header/>
            <form 
                method="post"
                name="Contact Me"   
                data-netlify="true"
                data-netlify-honeypot="true"
                netlify
            >
                <p>
                    <label>
                        Name 
                        <input type="text" name="name" placeholder="Your Name"/>
                    </label>
                </p>
                {/* <p>
                    <label>
                        Email 
                        <input type="email" name="email" id="email" placeholder="Your E-mail"/>
                    </label>
                </p> */}
                <p>
                    <button>Send</button>
                </p>
            </form>
            <Footer/>
        </>
    )
}