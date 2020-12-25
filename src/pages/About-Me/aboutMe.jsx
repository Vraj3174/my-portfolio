import React from "react";
import "../../styles/aboutMeStyles.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import VrajPatel from "../../../static/images/VrajPatel.png";
import Fade from "react-reveal/Fade";
import Typography from '@material-ui/core/Typography';
import {FaReact, FaGithub, FaNode, FaHtml5, FaPython} from 'react-icons/fa';
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
                                <Typography fontWeight="fontWeightBold" variant="h6" component="h6">
                                    I am a Canadian <span className="name">Software Developer</span> who loves all things technology.
                                    From testing and solving hardware issues to applying myself when solving
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
                                </Typography>
                            </Fade>
                            <Fade bottom cascade>
                                <Typography fontWeight="fontWeightBold" variant="h7" component="h7">
                                    <span className="contact"><BsPhone/></span>431-999-3174
                                    <br/>
                                    <span className="contact"><FiMail/></span>vrpatel8725@gmail.com
                                    <br/>
                                    <span className="contact"><FaGithub/></span>https://github.com/Vraj3174
                                </Typography>
                            </Fade>
                        </div>
                        <div className="image-wrapper">
                            <img className="image" src={VrajPatel} alt="Vraj Patel"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="skills-container">
                        <Typography fontWeight="fontWeightBold" variant="h1" component="h1">
                            Languages
                        </Typography>
                        <div className="skills-grid">
                            <Fade bottom cascade>
                                <div className="skill"> 
                                    <Typography variant="h1"><span className="icon"><FaReact/></span></Typography>
                                    <Typography fontWeight="fontWeightBold" variant="h6" component="h6">
                                        Expeirenced using ReactJs and ReactJs frameworks
                                        in a development environment.
                                    </Typography>
                                </div>
                            </Fade>
                            <Fade bottom cascade>
                                <div className="skill"> 
                                    <Typography variant="h1"><span className="icon"><BsFileCode/></span></Typography>
                                    <Typography fontWeight="fontWeightBold" variant="h6" component="h6">
                                        Academic Expeirence using C++ to solve problems
                                        and implement various algorithms.
                                    </Typography>
                                </div>
                            </Fade>
                            <Fade bottom cascade>
                                <div className="skill"> 
                                    <Typography variant="h1"><span className="icon"><SiJavascript/></span></Typography>
                                    <Typography fontWeight="fontWeightBold" variant="h6" component="h6">
                                        Implemented various javascript functions to handle data 
                                        and build web applications. 
                                    </Typography>
                                </div>
                            </Fade>
                            <Fade bottom cascade>
                                <div className="skill"> 
                                    <Typography variant="h1"><span className="icon"><FaHtml5/></span></Typography>
                                    <Typography fontWeight="fontWeightBold" variant="h6" component="h6">
                                        Development expeirence using HTML to create websites. 
                                    </Typography>
                                </div>
                            </Fade>
                            <Fade bottom cascade>
                                <div className="skill"> 
                                    <Typography variant="h1"><span className="icon"><SiCss3/></span></Typography>
                                    <Typography fontWeight="fontWeightBold" variant="h6" component="h6">
                                        implemented design elements and properties to websites using CSS.
                                    </Typography>
                                </div>
                            </Fade>
                            <Fade bottom cascade>
                                <div className="skill"> 
                                    <Typography variant="h1"><span className="icon"><FaPython/></span></Typography>
                                    <Typography fontWeight="fontWeightBold" variant="h6" component="h6">
                                        Basic academic expeirence with Python crerating simple projects.
                                    </Typography>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="skills-container">
                        <Typography fontWeight="fontWeightBold" variant="h1" component="h1">
                            Frameworks
                        </Typography>
                        <div className="skills-grid">
                            <Fade bottom cascade>
                                <div className="skill"> 
                                    <Typography variant="h1"><span className="icon"><FaNode/></span></Typography>
                                    <Typography fontWeight="fontWeightBold" variant="h6" component="h6">
                                        Develped numerous web applications with
                                        C.R.U.D. functionality usign NodeJs
                                    </Typography>
                                </div>
                            </Fade>
                            <Fade bottom cascade>
                                <div className="skill"> 
                                    <Typography variant="h1"><span className="icon"><SiGatsby/></span></Typography>
                                    <Typography fontWeight="fontWeightBold" variant="h6" component="h6">
                                        Created beautiful websites using GatsbyJs. 
                                        Look at this site as an example!
                                    </Typography>
                                </div>
                            </Fade>
                            <Fade bottom cascade>
                                <div className="skill"> 
                                    <Typography variant="h1"><span className="icon"><SiNextDotJs/></span></Typography>
                                    <Typography fontWeight="fontWeightBold" variant="h6" component="h6">
                                        Developed a web applications with C.R.U.D. functionality
                                        with Mongodb.
                                    </Typography>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="skills-container">
                        <Typography fontWeight="fontWeightBold" variant="h1" component="h1">
                            DevOps
                        </Typography>
                        <div className="skills-grid">
                            <Fade bottom cascade>
                                <div className="skill"> 
                                    <Typography variant="h1"><span className="icon"><FaGithub/></span></Typography>
                                    <Typography fontWeight="fontWeightBold" variant="h6" component="h6">
                                        Experience using Github for version control
                                        and collaboration on projects.
                                    </Typography>
                                </div>
                            </Fade>
                            <Fade bottom cascade>
                                <div className="skill"> 
                                    <Typography variant="h1"><span className="icon"><SiMongodb/></span></Typography>
                                    <Typography fontWeight="fontWeightBold" variant="h6" component="h6">
                                        Impelemented data storage features using Mongodb
                                        in various web applications.
                                    </Typography>
                                </div>
                            </Fade>
                            <Fade bottom cascade>
                                <div className="skill"> 
                                    <Typography variant="h1"><span className="icon"><SiVisualstudiocode/></span></Typography>
                                    <Typography fontWeight="fontWeightBold" variant="h6" component="h6">
                                        Development Experience using
                                        Visual Studio Code.
                                    </Typography>
                                </div>
                            </Fade>
                            <Fade bottom cascade>
                                <div className="skill"> 
                                    <Typography variant="h1"><span className="icon"><SiXcode/></span></Typography>
                                    <Typography fontWeight="fontWeightBold" variant="h6" component="h6">
                                        Development Experience using
                                        Xcode and a macOS development environment.
                                    </Typography>
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