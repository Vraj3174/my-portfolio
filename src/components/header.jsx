import React from 'react';
import "../styles/headerStyles.scss";

export default function Header() {

    return (
        <ul className="ul">
            <li className="li-left">
                <form>
                    <button formAction="/" className="button-header type-header">Home</button>
                </form> 
            </li>
            <li className="li-right">
                <form>
                    <button formAction="/About-Me/aboutMe" className="button-header type-header">About Me</button>
                    <button formAction="/Portfolio/portfolio" className="button-header type-header">Portfolio</button>
                    <button formAction="/Contact-Me/contactMe" className="button-header type-header">Contact Me</button>
                </form>
            </li>
        </ul>
    )
}