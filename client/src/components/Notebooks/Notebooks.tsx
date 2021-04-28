import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NotebookCard from './NotebookCard/NotebookCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    cardWrapper: {
      marginTop: '70px',
      marginRight: "50px",
    }
  }),
);

export interface NotebooksProps {
  
}
 
const Notebooks: React.FC<NotebooksProps> = () => {
const classes = useStyles();
  return ( 
    <Grid container 
    spacing={3}
    justify="flex-end" 
    direction="row"
    alignItems="center"
    item xs={12}>
    <Grid container
     item xs={8}
    direction="row"
    justify="space-evenly" 
    className={classes.cardWrapper} 
    >
      {/* <NotebookCard />
      <NotebookCard /> */}
    </Grid>
  </Grid> );
}
 
export default Notebooks;
