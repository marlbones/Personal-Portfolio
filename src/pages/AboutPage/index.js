import React from 'react';
import { compose } from 'recompose';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';

import { PRIMARY, HOVER, BLACK } from '../../style/constants';

const AboutPage = ({ classes }) => (
  <div className={classes.wrapper}>
    <div className={classes.container}>
      <div className={classes.info}>
        <p className = {classes.sub}>Hi there.</p>
        <p className={classes.sub}>My name's Marlon and I'm an Australian born freelance web developer. I'm currently based in Ghana, but accept work from anywhere in the world. I hate the term "digital nomad", but I suppose that's what I am right now. Please don't judge me.</p>
        <p className={classes.sub}>Having worked as a social worker for about 7 years, I finally caved to the call of the tech world and changed careers.</p>
        <p className={classes.sub}>My current stack of choice is <strong>Html</strong>, <strong>CSS</strong>, <strong>Javascript</strong>, <strong>React/React Native</strong>, <strong>Node.js</strong>, <strong>Apollo</strong> and <strong>GraphQL</strong>; however I love experimenting and learning new things.</p>
        <p className={classes.sub}>I've worked as a team member at <a href="https://ngny.com.au/">Ngakkan Nyaagu</a> and <a href="https://trioxis.com/">Trioxis</a>, but have also made signficant contributions as a freelancer to products by <a href="https://www.styleatlas.co/">Style Atlas</a> and <a href="http://cliniknote.com/">Clinik Note</a>.</p>
        <p className={classes.sub}>Thanks for stopping by.</p>
        <p className={classes.sub}>Marlon.</p>
      </div>
      <div>
        <Link className={classes.link} to={'/'}>
          <i className="fa fa-id-card link-styles"/>
        </Link>
        <Link className={classes.link} to={'/projects'}>
          <i className="fa fa-laptop link-styles"/>
        </Link>
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
    maxWidth: '720px',
    margin: 'auto',
    animation: 'enter 1s',
  },
  info: {
    padding: 60,
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
      padding: 36,
    }
  },
};

export default compose(injectSheet(styles))(AboutPage);
