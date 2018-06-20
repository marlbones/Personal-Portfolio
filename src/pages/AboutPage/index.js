import React from 'react';
import { compose } from 'recompose';
import injectSheet from 'react-jss';
import 'font-mfizz/dist/font-mfizz.css';
import ngny from './ngny.jpg'
import trioxis from './trioxis.jpg'

const AboutPage = ({ classes }) => (
  <div className={classes.wrapper}>
    <div className={classes.container}>
      <div className={classes.info}>
        <h1 className={classes.heading}>About Me</h1>
        <p className={classes.sub}>Hi there. My name's Marlon and I'm an Australian born freelance web developer. I'm currently based in Ghana, but accept work from anywhere in the world. I hate the term "digital nomad", but I suppose that's what I am right now. Please don't judge me.</p>
        <p className={classes.sub}>This is my stack of choice</p>
        <div className={classes.icons}>
          <i className="icon-html5" style={{paddingRight: 12}}></i>
          <i className="icon-css3" style={{paddingRight: 12}}></i>
          <i className="icon-javascript" style={{paddingRight: 12}}></i>
          <i className="icon-reactjs" style={{paddingRight: 12}}></i>
          <i className="icon-nodejs"></i>
        </div>
        <p className={classes.sub}>And here are some places I've worked at</p>
        <div className={classes.work}>
          <div className={classes.imageContainer}>
            <a href="https://ngny.com.au/">
              <img className={classes.image} style={{paddingRight: 4}} src={ngny} alt=""/>
            </a>
          </div>
          <div className={classes.imageContainer}>
            <a href="https://trioxis.com/">
              <img className={classes.image} src={trioxis} alt=""/>
            </a>
          </div>
        </div>
        <p className={classes.sub}>Thanks for stopping by!</p>
        <p className={classes.sub}>Marlon.</p>
      </div>
    </div>
  </div>
);

const styles = {
  wrapper: {
    width: '100%',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    maxWidth: '1200px',
    margin: 'auto',
  },
  info: {
    padding: 60,
  },
  heading: {
    fontSize: 30,
    fontWeight: 900,
    color: '#377DC8',
    fontFamily: "'Lato', sans-serif",
  },
  sub: {
    fontSize: 18,
    fontFamily: "'Open Sans', sans-serif",
    color: '#333',
  },
  icons: {
    fontSize: 22,
  },
  work: {
    display: 'flex',
    flexDirection: 'row',
  },
  imageContainer: {
    alignSelf: 'center',
    display: 'flex',
    transition: '0.2s ease-in-out',
    opacity: 0.7,
    '&:hover': {
      opacity: 0.5,
    },
  },
  image: {
    width: 95,
    height: 90,
  },
};

export default compose(injectSheet(styles))(AboutPage);
