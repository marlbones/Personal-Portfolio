import React from 'react';
import { compose } from 'recompose';
import injectSheet from 'react-jss';

import { BLACK, GRAY } from '../../style/constants';

const ProjectCard = ({ classes, imageSrc, imageAlt, projectTitle, projectType, projectDescription, link }) => (
  <a className={classes.wrapper} href={link}>
      <div className={classes.imageWrapper}>
        <img className={classes.image} src={imageSrc} alt={imageAlt}/>
      </div>
      <div className={classes.text}>
        <p className={classes.textTitle}><strong>{projectTitle}</strong></p>
        <p className={classes.textType}>{projectType}</p>
        <p className={classes.textDescription}>{projectDescription}</p>
      </div>
  </a>

);

const styles = {
  wrapper: {
    textDecoration: 'none',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    backgroundColor: 'white',
    padding: 24,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 24,
    maxWidth: 740,
    minHeight: 250,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    transition: '0.3s ease-in-out',
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    },
    animation: 'enter 1s',
  },
  imageWrapper: {
    flex: 0.5,
  },
  image: {
    height: 250,
    width: 300,
  },
  text: {
    flex: 1,
    paddingLeft: 24,
    paddingTop: 12,
    maxWidth: 440,
    display: 'flex',
    flexDirection: 'column',
    fontSize: 16,
    color: BLACK,
    fontFamily: "'Open Sans', sans-serif",
    '@global p': {
      margin: 0,
    },
  },
  textTitle: {
    paddingBottom: 4,
    fontSize: 18,
    color: BLACK,
  },
  textType: {
    fontSize: 12,
    paddingBottom: 12,
    color: GRAY,
  },
  textDescription: {
    color: GRAY,
  },
  '@keyframes enter': {
    '0%': { opacity: 0},
    '15%': { opacity: 0},
    '100%': { opacity: 1},
  },
};

export default compose(injectSheet(styles))(ProjectCard);
