import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import NotebookCard from "../Notebooks/NotebookCard/NotebookCard";
import { initialStateType, NoteType } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { actionDeleteNote, actionSetNotes } from "../../redux/actionCreators/notes";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    cardWrapper: {
      marginTop: "70px",
      marginRight: "50px",
    },
  })
);
export interface NotesProps {}


const Notes: React.FC<NotesProps> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const [notes, setNotes] = useState<NoteType[]>([]);
  const notes = useSelector((store:initialStateType)=> store.notes);
   console.log('notes',notes);
  useEffect(() => {
    dispatch(actionSetNotes())
  }, []);
  const handleDelete = (id: string): void => {
    dispatch(actionDeleteNote(id))
  };
  return (
    <Grid
      container
      spacing={3}
      justify="flex-end"
      direction="row"
      alignItems="center"
      item
      xs={12}
    >
      <Grid
        container
        item
        xs={8}
        direction="row"
        justify="space-evenly"
        className={classes.cardWrapper}
      >
        {notes.length
          ? notes.map(({ _id, title, content }:any) => (
              <NotebookCard
                key={_id}
                id={_id}
                title={title}
                content={content}
                onDelete={handleDelete}
              />
            ))
          : "netu"}
      </Grid>
    </Grid>
  );
};

export { Notes };
