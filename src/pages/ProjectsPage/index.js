import React from 'react';
import { compose } from 'recompose';
import injectSheet from 'react-jss';
import ProjectCard from '../../components/ProjectCard'

const ProjectsPage = ({ classes }) => (
  <div className={classes.wrapper}>
    <div className={classes.container}>
      <ProjectCard
        imageSrc='http://res.cloudinary.com/dabq7kxo6/image/upload/v1493857644/cfapong-min_v9fxth.png'
        imageAlt='Ping Pong Balls'
        projectTitle='Dynamic Pilgrim'
        projectType='Personal Project'
        projectDescription='Ping pong and tech. A marriage made in heaven. Dynamic Piligrim is a ping pong ranking site made for students at Coder Academy in Sydney. We played a lot of pong...'
        link = 'https://dynamicpilgrim.herokuapp.com/'
      />
      <ProjectCard
        imageSrc='https://res.cloudinary.com/dabq7kxo6/image/upload/q_61/v1542991416/styleAtlas_u0hoop.png'
        imageAlt='Style Atlas Logo'
        projectTitle='Quadrant'
        projectType='Professional Project'
        projectDescription='Quadrant is an online fit binding solution that integrates into big online retailers. It aims to increase efficiency in the fashion industry by digitising product conceptualisation, design, and manufacturing processes.'
        link='https://www.styleatlas.co/quadrant/'
      />
      <ProjectCard
        imageSrc='https://res.cloudinary.com/dabq7kxo6/image/upload/q_63/v1542993123/Default-Landscape_hn3kgv.png'
        imageAlt='Clinik Note Logo'
        projectTitle='Clinik Note'
        projectType='Professional Project'
        projectDescription='Clinik Note is a cloud-based clinical notes app for iPad and desktop. It is specifically designed for physiotherapy practices and makes use of native functionaly.'
        link='http://cliniknote.com/'
      />
    </div>
  </div>
);

const styles = {
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FBFCFC'
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
  '@media (max-width: 512px)': {
    wrapper: {
      backgroundColor: 'white'
    },
  },
};

export default compose(injectSheet(styles))(ProjectsPage);
