import React from 'react';
import { compose } from 'recompose';
import injectSheet from 'react-jss';
import ProjectCard from '../../components/ProjectCard'
import { Link } from 'react-router-dom';

import { BACKGROUND, PRIMARY, HOVER } from '../../style/constants';

const ProjectsPage = ({ classes }) => (
  <div className={classes.wrapper}>
    <div className={classes.container}>
      <ProjectCard
        imageSrc='https://res.cloudinary.com/dabq7kxo6/image/upload/q_63/v1542993123/Default-Landscape_hn3kgv.png'
        imageAlt='Clinik Note Logo'
        projectTitle='Clinik Note'
        projectType='Professional Project'
        projectDescription='Clinik Note is a cloud-based clinical notes app for iPad and desktop. It is specifically designed for physiotherapy practices and makes use of native functionality.'
        link='http://cliniknote.com/'
      />
      <ProjectCard
        imageSrc='https://res.cloudinary.com/dabq7kxo6/image/upload/q_61/v1543061305/range_tlifad.png'
        imageAlt='Quadrant Screenshot'
        projectTitle='Quadrant'
        projectType='Professional Project'
        projectDescription='Quadrant by Style Atlas is an online fit binding solution that integrates into big online retailers. It aims to increase efficiency in the fashion industry by digitising product conceptualisation, design, and manufacturing processes.'
        link='https://www.styleatlas.co/quadrant/'
      />
      <ProjectCard
        imageSrc='http://res.cloudinary.com/dabq7kxo6/image/upload/v1493857644/cfapong-min_v9fxth.png'
        imageAlt='Ping Pong Balls'
        projectTitle='Dynamic Pilgrim'
        projectType='Personal Project'
        projectDescription='Ping pong and tech. A marriage made in heaven. Dynamic Piligrim is a ping pong ranking site made for students at Coder Academy in Sydney. We played a lot of pong...'
        link = 'https://dynamicpilgrim.herokuapp.com/'
      />
      <div>
        <Link className={classes.link} to={'/'}>
          <i className="fa fa-id-card link-styles"/>
        </Link>
        <Link className={classes.link} to={'/about'}>
          <i className="fa fa-user link-styles"/>
        </Link>
      </div>
    </div>
  </div>
);

const styles = {
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: BACKGROUND,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: 'auto',
    paddingTop: 36,
    paddingBottom: 36,
  },
  link: {
    fontSize: 26,
    paddingRight: 16,
    color: PRIMARY,
    textDecoration: 'none',
    transition: '0.2s ease-in-out',
    '&:hover': {
      color: HOVER
    },
    '@global i': {
      paddingTop: 36,
    },
  },
  '@media (max-width: 512px)': {
    wrapper: {
      backgroundColor: 'white'
    },
  },
};

export default compose(injectSheet(styles))(ProjectsPage);
