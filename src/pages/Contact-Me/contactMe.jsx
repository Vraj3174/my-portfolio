import React from "react";
import "./contactMeStyles.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default function Contact() {
    const classes = useStyles();

    return(
        <>
            <Header/>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <form 
                        className={classes.form}
                        method="post"
                        name="contact"   
                        data-netlify="true"
                        onSubmit="submit"
                    >
                    <input type="hidden" name="form-name" value="contact"/>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="fname"
                            name="firstName"
                            variant="outlined"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                        />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="lname"
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="message"
                            label="Message"
                            type="message"
                            id="message"
                            autoComplete="message"
                        />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Submit
                    </Button>
                    </form>
                </div>
            </Container>

            {/* <form 
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
                    <button type="submit">Send</button>
                </p>
            </form> */}
            <Footer/>
        </>
    )
}