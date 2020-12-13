import React, { useEffect, useState } from 'react';
import "./headerStyles.scss";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '10%',
    },
    title: {
        flexGrow: 1,
        color: 'black'
    },
    appBarTransparent: {
        backgroundColor: 'rgb(51, 51, 53)'
    },
    appBarSolid: {
        backgroundColor: 'rgb(51, 51, 53)'
    }
}));

export default function Header() {
    const classes = useStyles();

    const [navBackground, setNavBackground] = useState('appBarTransparent')
    const navRef = React.useRef()
    navRef.current = navBackground
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 75
            if (show) {
                setNavBackground('appBarSolid')
            } else {
                setNavBackground('appBarTransparent')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className="appBar">
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        <form>
                            <button formAction="/" className="button-header type-header">Home</button>
                        </form>
                    </Typography>
                    <form>
                        <button formAction="/About-Me/aboutMe" className="button-header type-header">About Me</button>
                        <button formAction="/Portfolio/portfolio" className="button-header type-header">Portfolio</button>
                        <button formAction="/Contact-Me/contactMe" className="button-header type-header">Contact Me</button>
                    </form>
                </Toolbar>
            </AppBar>
        </div >
    );
}