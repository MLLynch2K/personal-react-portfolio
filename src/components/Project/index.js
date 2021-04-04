import React from 'react';
import Grid from '@material-ui/core/Grid';
import { AiFillGithub } from "react-icons/ai";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  gridItem: {
      position: "relative",
      "&:hover $centered": {display: "flex"},
      "&:hover img": {opacity:.2}
  },
  centered: {
    top: 0,
    left: 0,
    margin: "auto",
    display: "block",
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "none",
    justifyContent: "center",
    alignItems: "center"
  },

  padding: {
      padding: "60px"    
  }
}));

const Project = (props) => {
  const classes = useStyles();
  return (
    <>
                <Grid className ={classes.gridItem} item xs={12} sm={6}>
                  <img
                      src={props.src}
                      alt={props.name}   
                  />
                  <div className = {classes.centered}>
                      <a href={props.github} target= "_blank" rel="noreferrer noopener" className= {classes.padding} style={{fontSize: "30px"}}><AiFillGithub/></a>
                      <a href={props.deploy} target= "_blank" rel="noreferrer noopener">{props.name}</a>
                  </div>
                </Grid>
    </>
  );
};

export default Project;