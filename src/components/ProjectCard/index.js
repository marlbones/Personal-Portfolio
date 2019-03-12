import React from 'react';
import { compose } from 'recompose';
import injectSheet from 'react-jss';

import { PRIMARY, HOVER, BLACK, GRAY } from '../../style/constants';

const ProjectCard = ({ classes, imageSrc, imageAlt, projectTitle, projectType, projectDescription, link }) => (
  <div className={classes.wrapper}>
      <div className={classes.content}>
        <div className={classes.titleLinkGroup}>
          <h3 className={classes.textTitle}><strong>{projectTitle}</strong></h3>
          <a className={classes.link} href={link} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-link link-styles"/>
          </a>
        </div>
        <p className={classes.textType}>{projectType}</p>
        <p className={classes.textDescription}>{projectDescription}</p>
      </div>
  </div>

);

const styles = {
  wrapper: ({imageSrc}) => ({
    textDecoration: 'none',
    backgroundColor: 'white',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    backgroundImage: `url(${imageSrc})`,
    backgroundSize: '320px 250px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 24,
    height: 250,
    width: 320,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    transition: '0.3s ease-in-out',
  }),
  content: {
    flex: 1,
    padding: 24,
    maxWidth: 440,
    display: 'flex',
    backgroundColor: 'white',
    opacity: 0,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    fontSize: 16,
    color: BLACK,
    fontFamily: "'Open Sans', sans-serif",
    '@global p': {
      margin: 0,
    },
    '@global h3': {
      margin: 0,
    },
    transition: '0.3s ease-in-out',
    '&:hover': {
      opacity: 1,


    },
  },
  titleLinkGroup: {
    paddingBottom: 4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 18,
    color: BLACK,
    fontFamily: "'Lato', sans-serif",
    paddingRight: 6,
  },
  link: {
    fontSize: 18,
    color: PRIMARY,
    textDecoration: 'none',
    transition: '0.2s ease-in-out',
    '&:hover': {
      color: HOVER
    },
  },
  textType: {
    fontSize: 12,
    paddingBottom: 12,
    color: GRAY,
  },
  textDescription: {
    color: GRAY,
  },
  '@media (max-width: 512px)': {
    wrapper: () => ({
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 'none',
      },
    }),
  },
};

export default compose(injectSheet(styles))(ProjectCard);
