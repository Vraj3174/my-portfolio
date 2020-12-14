import React from "react";
import "./aboutMeStyles.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import VrajPatel from "../../../static/images/VrajPatel.png";
import Fade from "react-reveal/Fade";
import Typography from '@material-ui/core/Typography';
import {FaReact, FaGithub, FaNode, FaLinkedin, FaHtml5, FaPython} from 'react-icons/fa';
import {BsFileCode, BsPhone} from 'react-icons/bs';
import {SiVisualstudiocode, SiXcode, SiJavascript, SiMongodb, SiCss3, SiGatsby, SiNextDotJs} from 'react-icons/si';
import {FiMail} from 'react-icons/fi';

export default function About() {
    
    return (
        <>  
            <Header/>
            <div className="secion" id="about">
                <div className="container">
                    <div className="about-section">
                    <div className="content">
                        <Fade bottom cascade>
                            <h1><span className="name">Vraj Patel</span></h1>
                        </Fade>
                        <Fade bottom cascade>
                            <h3>
                                I am a Canadian <span className="name">Software Developer</span> who loves all things technology.
                                from testing and solving hardware issues to applying myself when solving
                                software challenges.
                            <br></br>
                            <br></br>
                                I am currently studying at the <span className="name">University of Waterloo</span> to obtain a degree
                                in <span className="name">Computer Engineering</span>. With a mix of hardware and software this program
                                will propel my career.
                            <br></br>
                            <br></br>
                                Please contact me for more inquiries:
                            <br/>
                            <br/>
                                <span className="contact"><BsPhone/></span>431-999-3174
                            <br/>
                                <span className="contact"><FiMail/></span>vrpatel8725@gmail.com
                            <br/>
                                <span className="contact"><FaLinkedin/></span>https://www.linkedin.com/in/vraj-patel-1baa44197
                            <br/>
                                <span className="contact"><FaGithub/></span>https://github.com/Vraj3174
                            </h3>
                        </Fade>
                    </div>
                    <Fade bottom cascade>
                        <div className="image-wrapper">
                            <img className="image" src={VrajPatel} alt="Vraj Patel"></img>
                        </div>
                    </Fade>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="skills-container">
                        <h1>Programming Languages</h1>
                        <div className="skills-grid">
                            <Fade bottom cascade>
                                <div className="skill"> 
                                    <Typography variant="h1"><span className="icon"><FaReact/></span></Typography>
                                    <h3>
                                        Expeirenced using ReactJs and ReactJs frameworks
                                        in a development environment.
                                    </h3>
                                </div>
                            </Fade>
                            <Fade bottom cascade>
                                <div className="skill"> 
                                    <Typography variant="h1"><span className="icon"><BsFileCode/></span></Typography>
                                    <h3>
                                        Academic Expeirence using C++ to solve problems
                                        and implement various algorithms.
                                    </h3>
                                </div>
                            </Fade>
                            <Fade bottom cascade>
                                <div className="skill"> 
                                    <Typography variant="h1"><span className="icon"><SiJavascript/></span></Typography>
                                    <h3>
                                        Implemented various javascript functions to handle data 
                                        and build web applications. 
                                    </h3>
                                </div>
                            </Fade>
                            <Fade bottom cascade>
                                <div className="skill"> 
                                    <Typography variant="h1"><span className="icon"><FaHtml5/></span></Typography>
                                    <h3>
                                        Development expeirence using HTML to create websites. 
                                    </h3>
                                </div>
                            </Fade>
                            <Fade bottom cascade>
                                <div className="skill"> 
                                    <Typography variant="h1"><span className="icon"><SiCss3/></span></Typography>
                                    <h3>
                                        implemented design elements and properties to websites using CSS.
                                    </h3>
                                </div>
                            </Fade>
                            <Fade bottom cascade>
                                <div className="skill"> 
                                    <Typography variant="h1"><span className="icon"><FaPython/></span></Typography>
                                    <h3>
                                        Basic academic expeirence with Python crerating simple projects.
                                    </h3>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="skills-container">
                        <h1>Frameworks and Libraries</h1>
                        <div className="skills-grid">
                            <Fade bottom cascade>
                                <div className="skill"> 
                                    <Typography variant="h1"><span className="icon"><FaNode/></span></Typography>
                                    <h3>
                                        Develped numerous web applications with
                                        C.R.U.D. functionality usign NodeJs
                                    </h3>
                                </div>
                            </Fade>
                            <Fade bottom cascade>
                                <div className="skill"> 
                                    <Typography variant="h1"><span className="icon"><SiGatsby/></span></Typography>
                                    <h3>
                                        Created beautiful websites using GatsbyJs. 
                                        Look at this site as an example!
                                    </h3>
                                </div>
                            </Fade>
                            <Fade bottom cascade>
                                <div className="skill"> 
                                    <Typography variant="h1"><span className="icon"><SiNextDotJs/></span></Typography>
                                    <h3>
                                        Developed a web applications with C.R.U.D. functionality
                                        with Mongodb.
                                    </h3>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="skills-container">
                        <h1>DevOps</h1>
                        <div className="skills-grid">
                            <Fade bottom cascade>
                                <div className="skill"> 
                                    <Typography variant="h1"><span className="icon"><FaGithub/></span></Typography>
                                    <h3>
                                        Experience using Github for version control
                                        and collaboration on projects.
                                    </h3>
                                </div>
                            </Fade>
                            <Fade bottom cascade>
                                <div className="skill"> 
                                    <Typography variant="h1"><span className="icon"><SiMongodb/></span></Typography>
                                    <h3>
                                        Impelemented data storage features using Mongodb
                                        in various web applications.
                                    </h3>
                                </div>
                            </Fade>
                            <Fade bottom cascade>
                                <div className="skill"> 
                                    <Typography variant="h1"><span className="icon"><SiVisualstudiocode/></span></Typography>
                                    <h3>
                                        Development Experience using
                                        Visual Studio Code.
                                    </h3>
                                </div>
                            </Fade>
                            <br/>
                            <Fade bottom cascade>
                                <div className="skill"> 
                                    <Typography variant="h1"><span className="icon"><SiXcode/></span></Typography>
                                    <h3>
                                        Development Experience using
                                        Xcode and a macOS development environment.
                                    </h3>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}