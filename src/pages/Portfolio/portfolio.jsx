import React from "react";
import "../../styles/portfolioStyles.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import TTC from "../../../static/images/TTC.png";
import SuperWorld from "../../../static/images/SuperWorld.png";
import Waterloo from "../../../static/images/UniversityOfWaterloo.jpg"
import Celavent from "../../../static/images/Celavent.png";
import theNotesApp from "../../../static/images/theNotesApp.jpeg"
import Contacts from "../../../static/images/Contacts.png";
import ATM from "../../../static/images/ATM.png";
import TicTakToe from "../../../static/images/TicTakToe.png"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Fade from "react-reveal/Fade";

const useStyles = makeStyles({
    root: {
      maxWidth: 300,
    },
});

export default function Projects() {
    const classes = useStyles();

    return(
        <>
            <Header/>
            <div className="container">
                <div className="section">
                    <div className="container">
                        <div className="skills-container">
                            <Fade bottom cascade>
                                <Typography fontWeight="fontWeightBold" variant="h1" component="h1">
                                            Experiences
                                </Typography>
                            </Fade>
                            <Fade bottom cascade>
                                <div className="skills-grid">
                                    <Card className={classes.root}>
                                        <CardMedia
                                        component="img"
                                        alt="Toronto Transit Commission"
                                        height="140"
                                        image={TTC}
                                        title="Toronto Transit Commission"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            TTC (Toronto Transit Commission)
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Technical Analyst
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Managed server inventory and service desk tasks.
                                            Organized the redesign of an internal directory.
                                            Created an automated report using JasperSoft.
                                        </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card className={classes.root}>
                                        <CardMedia
                                        component="img"
                                        alt="SuperWorld"
                                        height="140"
                                        image={SuperWorld}
                                        title="SuperWorld"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            SuperWorld
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Software Developer
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Developed many features such as an FAQ page,
                                            Google Analytics, various drop-down menus, Facebook 
                                            Messenger Chat Plugin and other front end details.
                                        </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card className={classes.root}>
                                        <CardMedia
                                        component="img"
                                        alt="The University of Waterloo"
                                        height="140"
                                        image={Waterloo}
                                        title="The University of Waterloo"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            The University of Waterloo
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Online Learning Assistant
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Created exercises for the Rust programming language.
                                            Assisted in the design of a mentor and mentee matching algorithm. 
                                            Designed instructions for LTSPICE(circuit drafting software).
                                        </Typography>
                                        </CardContent>
                                    </Card>
                                    <br/>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="section">
                    <div className="container">
                        <div className="skills-container">
                            <Fade bottom cascade>
                                <Typography fontWeight="fontWeightBold" variant="h1" component="h1">
                                    Projects
                                </Typography>
                            </Fade>
                            <Fade bottom cascade>
                                <div className="skills-grid">
                                    <Card className={classes.root}>
                                        <CardMedia
                                        component="img"
                                        alt="Celavent"
                                        height="140"
                                        image={Celavent}
                                        title="Celavent"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Celavent
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Celavent is a web application that allows the user to post events that
                                            they are hosting for vendors to contact and bid for. For example, if one
                                            is hosting a party they can post it on Celavent, then vendors will offer 
                                            services such as photograph and entertainment. 
                                        </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card className={classes.root}>
                                        <CardMedia
                                        component="img"
                                        alt="ATM"
                                        height="140"
                                        image={ATM}
                                        title="ATM"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            ATM
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            A simple C++ program that allows users to open accounts where they can store, 
                                            withdraw,and view account balance. The program stores data in a text file to
                                            use at a later time.
                                        </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card className={classes.root}>
                                        <CardMedia
                                        component="img"
                                        alt="The Contacts App"
                                        height="140"
                                        image={Contacts}
                                        title="The Contacts App"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            The Contacts App
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            A web application that uses Node Js and MongoDB to perform basic C.R.U.D. 
                                            functions allowing users to store contacts. 
                                        </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card className={classes.root}>
                                        <CardMedia
                                        component="img"
                                        alt="the Notes App"
                                        height="140"
                                        image={theNotesApp}
                                        title="The Notes App"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            The Notes App
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            A notes app performs user authentication and stores notes created by the 
                                            user to a MongoDB database. This application can perform basic C.R.U.D. 
                                            functionality using NEXTjs.
                                        </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card className={classes.root}>
                                        <CardMedia
                                        component="img"
                                        alt="Tic-Tak-Toe"
                                        height="140"
                                        image={TicTakToe}
                                        title="Tic-Tak-Toe"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Tic-Tak-Toe
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            A simple 2 player Tic-Tak-Toe game created using C++.
                                        </Typography>
                                        </CardContent>
                                    </Card>
                                    <br/>
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