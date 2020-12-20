import React from 'react';
import "../styles/headerStyles.scss";
import ResponsiveMenu from 'react-responsive-navbar';

import { CgMenu, CgClose } from 'react-icons/cg';

export default function Header() {

    return (

        <ResponsiveMenu
            menuOpenButton={<CgMenu size="10%" color="rgb(216, 49, 90)"/>}
            menuCloseButton={<CgClose size="10%" color="rgb(216, 49, 90)"/>}
            changeMenuOn="500px"
            largeMenuClassName="largeMenu"
            smallMenuClassName="ul"
            menu={
                <ul className="ul">
                    <li>
                        <form>
                            <button formAction="/" className="button-header type-header">Home</button>
                        </form> 
                    </li>
                    <li>
                        <form>
                            <button formAction="/About-Me/aboutMe" className="button-header type-header">About Me</button>
                        </form>
                    </li>
                    <li>
                        <form>
                            <button formAction="/Portfolio/portfolio" className="button-header type-header">Portfolio</button>
                        </form>
                    </li>
                    <li>
                        <form>
                            <button formAction="/Contact-Me/contactMe" className="button-header type-header">Contact Me</button>
                        </form>
                    </li>
                </ul>
            }
        />
    )
}