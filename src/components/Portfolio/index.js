
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Project from '../Project';
import feedingphilly from 'src/assets/images/feeding-philly.jpg'
import madlibsphoto from 'src/assets/images/madlibs.png'
import runbuddyphoto from 'src/assets/images/run-buddy.jpeg'

const projects = [
  {
    name: 'Feeding Philly',
    src: feedingphilly,
    deploy: 'https://joeleonti.github.io/feeding-philly/',
    github: 'https://github.com/joeleonti/feeding-philly'
    
  },
  {
      name: 'Mad Libs App',
      src: madlibsphoto,
      deploy: 'https://desolate-beyond-80538.herokuapp.com/',
      github: 'https://github.com/Kristy-coding/Mad-Libs'
      
    },
    {
      name: 'Run Buddy Webpage',
      src: runbuddyphoto,
      deploy: 'https://mllynch2k.github.io/run-buddy/',
      github: 'https://github.com/MLLynch2K/run-buddy'
      
    }
]

console.log(projects)

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Portfolio() {
  const classes = useStyles();
  return (
    <div  id= "projects" style={{marginLeft:"15%", marginRight: "15%", marginTop: "5%"}}  className={classes.root}>
      <Grid container spacing={1}>
        {projects.map((project)=> (

              <Project 
                src= {project.src} 
                name= {project.name}  
                deploy ={project.deploy}
                github = {project.github} 
                key={project.src}
              />
        ))}
      </Grid>
    </div>
  );
}

 

