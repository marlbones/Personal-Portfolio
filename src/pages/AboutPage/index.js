import React from 'react';
import { compose } from 'recompose';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';

import { PRIMARY, HOVER, BLACK } from '../../style/constants';

const AboutPage = ({ classes }) => (
  <div className={classes.wrapper}>
    <div className={classes.container}>
      <div className={classes.title}>
        <h1 className={classes.heading}>Marlon Dimaano</h1>
        <p className={classes.sub}>Marketing Systems | Web Development</p>
      </div>
      <div className={classes.info}>
        <p className = {classes.sub}>Hi there.</p>
        <p className={classes.sub}>My name's Marlon and I'm an Australian born digital marketer specialising in marketing systems and automation. I currently work for <a href="https://leapdev.io/">LEAP Dev</a> as a Marketing Systems Administrator with a focus on <strong>Salesforce Marketing Cloud</strong>.</p>
        <p className={classes.sub}>I was previously employed as a Web Developer at <a href="https://ngny.com.au/">Ngakkan Nyaagu</a> and <a href="https://trioxis.com/">Trioxis</a>, but have also made signficant contributions as a freelancer to products by <a href="https://www.styleatlas.co/">Style Atlas</a> and <a href="http://cliniknote.com/">Clinik Note</a>.</p>
        <p className={classes.sub}>Web development remains a key component of my current role in addition to being a hobby I regularly engage with. My current technology focus is <strong>HTML</strong>, <strong>CSS</strong>, <strong>Javascript</strong>, <strong>React</strong>, <strong>React Native</strong>, <strong>AMPscript</strong> and <strong>SQL</strong>.</p>
        <p className={classes.sub}>Prior to this I was a Social Worker in the humanitarian sector for roughly seven years, with the bulk of my career spent working for <a href="https://www.redcross.org.au/">The Australian Red Cross</a>.</p>
        <p className={classes.sub}>Sorry for boring you.</p>
        <p className={classes.sub}>Marlon.</p>
      </div>
      <div className={classes.linksWrapper}>
        {/* <Link className={classes.link} to={'/'}>
          <i className="fa fa-id-card link-styles"/>
        </Link> */}
        {/* <Link className={classes.link} to={'/projects'}>
          <i className="fa fa-laptop link-styles"/>
        </Link> */}
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
    alignItems: 'left',
    minHeight: '100vh',
    maxWidth: '720px',
    margin: 'auto',
    animation: 'enter 1s',
  },
  title: {
    paddingLeft: 60,
  },
  heading: {
    fontSize: 30,
    fontWeight: 900,
    marginBottom: 0,
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
  info: {
    padding: [24, 60, 60],
  },
  sub: {
    fontSize: 16,
    fontFamily: "'Open Sans', sans-serif",
    color: BLACK,
    '@global a': {
      color: PRIMARY,
      textDecoration: 'none',
      transition: '0.2s ease-in-out',
      '&:hover': {
        textDecoration: 'none',
        color: HOVER,
      },
    },
  },
  linksWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  link: {
    fontSize: 26,
    paddingRight: 16,
    paddingBottom: 24,
    color: PRIMARY,
    textDecoration: 'none',
    transition: '0.2s ease-in-out',
    '&:hover': {
      color: HOVER
    },
  },
  '@keyframes enter': {
    '0%': { opacity: 0},
    '15%': { opacity: 0},
    '100%': { opacity: 1},
  },
  '@media (max-width: 512px)': {
    info: {
      padding: [24, 36],
    },
    title: {
      paddingLeft: 36
    }
  },
};

export default compose(injectSheet(styles))(AboutPage);
