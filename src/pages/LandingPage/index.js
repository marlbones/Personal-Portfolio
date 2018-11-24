import React from 'react';
import { compose } from 'recompose';
import injectSheet from 'react-jss';
import BusinessCard from '../../components/BusinessCard'

import { BACKGROUND } from '../../style/constants';

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
    backgroundColor: BACKGROUND
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
