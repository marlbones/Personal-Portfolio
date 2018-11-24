import React from 'react';
import { compose } from 'recompose';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
// import Logo from './logo.jpg'
import Logo from './mdcirclepurple.jpg'

import { PRIMARY, HOVER, BLACK } from '../../style/constants';

const BusinessCard = ({ classes }) => (
  <div className={classes.info}>
    <div className={classes.title}>
        <h1 className={classes.heading}>Marlon Dimaano</h1>
        <p className={classes.sub}>Web Developer</p>
    </div>
    <div className={classes.bottomSection}>
      <div className={classes.contact}>
        <div className={classes.contactInfo}>
          <p className={classes.contactItem}>
            <span style={{fontWeight: 'bold'}}>Email:</span> mdimaanods@gmail.com
          </p>
          <p className={classes.contactItem}>
            <span style={{fontWeight: 'bold'}}>Web:</span> https://marlbones.github.io/
          </p>
          <p className={classes.contactItem}>
            <span style={{fontWeight: 'bold'}}>Location:</span> Accra, Ghana
          </p>
        </div>
        <div className={classes.icons}>
          <Link className={classes.link} to={'/about'}>
            <i className="fa fa-user link-styles"/>
          </Link>
          <Link className={classes.link} to={'/projects'}>
            <i className="fa fa-laptop link-styles"/>
          </Link>

          <a className={classes.link} href="https://github.com/marlbones">
            <i className="fa fa-github link-styles"/>
          </a>
          <a className={classes.link} href="https://www.linkedin.com/in/marlon-dimaano-758014140/">
            <i className="fa fa-linkedin link-styles"/>
          </a>
          <a className={classes.link} href="https://twitter.com/marlbonez">
            <i className="fa fa-twitter link-styles"/>
          </a>
          <a className={classes.link} href="mailto:mdimaanods@gmail.com">
            <i className="fa fa-envelope link-styles"/>
          </a>
        </div>
      </div>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={Logo} alt="logo"/>
      </div>
    </div>
  </div>
);

const styles = {
  info: {
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    backgroundColor: 'white',
    minWidth: '65%',
    minHeight: 400,
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 32,
    transition: '0.3s ease-in-out',
    '&:hover': {
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    },
    animation: 'enter 1s',
  },
  title: {
    flex: 1,
  },
  heading: {
    fontSize: 30,
    fontWeight: 900,
    marginBottom: 4,
    marginTop: 34,
    fontFamily: "'Lato', sans-serif",
    color: BLACK,
  },
  sub: {
    fontSize: 16,
    margin: 0,
    fontFamily: "'Open Sans', sans-serif",
    color: BLACK,
  },
  bottomSection: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 28,
  },
  contact: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },
  contactItem: {
    marginTop: 0,
    color: BLACK,
    fontFamily: "'Open Sans', sans-serif",
  },
  icons: {
    fontSize: 26,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  link: {
    color: PRIMARY,
    paddingRight: 16,
    textDecoration: 'none',
    transition: '0.2s ease-in-out',
    '&:hover': {
      color: HOVER
    },
  },
  logoContainer: {
    flex: 1,
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: 32,
  },
  logo: {
    width: 110,
    height: 105,
  },
  '@keyframes enter': {
    '0%': { opacity: 0},
    '15%': { opacity: 0},
    '100%': { opacity: 1},
  },
  '@media (max-width: 768px)': {
    info: {
      minWidth: '85%',
    },
    heading: {
      fontSize: 24,
    },
  },
  '@media (max-width: 512px)': {
    info: {
      paddingLeft: 0,
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 'none',
      },
    },
    bottomSection: {
      display: 'block',
    },
    logo: {
      height: 0,
      width: 0,
    },
  },
};

export default compose(injectSheet(styles))(BusinessCard);
