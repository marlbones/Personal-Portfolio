import React from 'react';
import { compose } from 'recompose';
import injectSheet from 'react-jss';

const AboutPage = ({ classes }) => (
  <div className={classes.wrapper}>
    <div className={classes.container}>
      <div className={classes.info}>
      <p className = {classes.sub}>Hi there.</p>
        <p className={classes.sub}>My name's Marlon and I'm an Australian born freelance web developer. I'm currently based in Ghana, but accept work from anywhere in the world. I hate the term "digital nomad", but I suppose that's what I am right now. Please don't judge me.</p>
        <p className={classes.sub}>Having previously worked as a social worker within the humanitarian sector for about 7 years, I finally gave in to the call of the tech world and changed careers.</p>
        <p className={classes.sub}>Currently, my primary stack is <strong>Html</strong>, <strong>CSS</strong>, <strong>Javascript</strong>, <strong>React/React Native</strong>, <strong>Node.js</strong>, <strong>Apollo</strong> and <strong>GraphQL</strong>; however I love experimenting and learning new things.</p>
        <p className={classes.sub}>I've worked as a team member at <a href="https://ngny.com.au/">Ngakkan Nyaagu</a>, and <a href="https://trioxis.com/">Trioxis</a>, but have also made signficant contributions as a freelancer to products by <a href="https://www.styleatlas.co/">Style Atlas</a> and <a href="http://cliniknote.com/">Clink Note</a>.</p>
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
  sub: {
    fontSize: 18,
    fontFamily: "'Open Sans', sans-serif",
    color: '#333',
    '@global a': {
      color: '#377DC8',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'none',
        color: '#459EFC',
      },
    },
  },
};

export default compose(injectSheet(styles))(AboutPage);
