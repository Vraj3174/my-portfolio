import React from "react";
import "./styles.scss";
import backgroundVideo from "../../../public/videos/homepage-background.mp4";
import { makeStyles } from '@material-ui/core/styles';
import Helmet from 'react-helmet';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
      
  }
}));

export default function Home() {
    const classes = useStyles();

    return(
        <>
            <Helmet bodyAttributes={{style: 'overflow-y: hidden'}}/>
            <div className="video-header wrap">
                <div className="fullscreen-video-wrap">
                    <video autoPlay loop muted><source src={backgroundVideo} type="video/mp4"/></video>
                </div>
                <div >
                    <div className="header-overlay">
                        <div classname="header-content">
                            <h1>
                                Hello, I'm <span className="name">Vraj Patel</span>,
                            </h1>
                            <h1>
                                Software Developer
                            </h1>
                            <div className={classes.root}>
                                <form>
                                    <button formAction="/About-Me/aboutMe" class="button type2">About Me</button>
                                    <button formAction="/Portfolio/portfolio" class="button type2">Portfolio</button>
                                    <button formAction="/Contact-Me/contactMe" class="button type2">Contact Me</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}