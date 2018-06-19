import React from 'react';
import { compose } from 'recompose';
import injectSheet from 'react-jss';
import BusinessCard from '../../components/BusinessCard'


const LandingPage = ({ classes }) => (
  <div className={classes.wrapper}>
    <div className={classes.container}>
      <BusinessCard />
    </div>
  </div>
);

const styles = {
  wrapper: {
    width: '100%',
    backgroundColor: '#FBFCFC'
    // backgroundColor: '#F0F2F9'
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
  '@media (max-width: 512px)': {
    wrapper: {
      backgroundColor: 'white'
    },
  },
};

export default compose(injectSheet(styles))(LandingPage);
