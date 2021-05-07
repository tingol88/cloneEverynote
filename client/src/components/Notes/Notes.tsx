import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import NotebookCard from "../Notebooks/NotebookCard/NotebookCard";

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
  const [notes, setNotes] = useState([
    // {
    //   _id: "123",
    //   title: "заголовок первой статьи",
    //   content:
    //     "контент первой статьи Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    //   createdAt: new Date(Date.now()),
    //   notebook: {
    //     id: "1",
    //     title: "название блокнота",
    //     createdAt: new Date(Date.now()),
    //     notes: ["123"],
    //   },
    // },
    // {
    //   _id: "1234",
    //   title: "заголовок второй статьи",
    //   content: "контент второй статьи",
    //   createdAt: new Date(Date.now()),
    //   notebook: {
    //     id: "1",
    //     title: "название блокнота",
    //     createdAt: new Date(Date.now()),
    //     notes: ["123"],
    //   },
    // },
  ]);
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/notes`
    )
      .then((response) => response.json())
      .then((result) => setNotes(result));
  }, []);

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
          ? notes.map(({ _id, title, content }) => (
              <NotebookCard
                key={_id}
                id={_id}
                title={title}
                content={content}
              />
            ))
          : "netu"}
      </Grid>
    </Grid>
  );
};

export default Notes;
