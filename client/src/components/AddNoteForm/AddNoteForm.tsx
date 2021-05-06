import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  MenuItem,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

const categoresArr = ["travel", "auto", "info", "contacts"];
const notebooksArr = ["person", "card", "sport", "work"];
const authorsArr = ["vasya", "petya", "misha"];
// title: String,
// content: String,
// createdAt: { type: Date, default: Date.now() },
// category: { type: String, default: 'None category' },
// notebook: { type: Schema.ObjectId, ref: 'Notebook' },

export default function AddNoteForm() {
  const classes = useStyles();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("vasya");
  const [category, setCategory] = useState("travel");
  const [error, setError] = useState("");

  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };
  const handleAuthor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(event.target.value);
  };
  const handleCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setError('')
    event.preventDefault();
    if(content && title && author &&category) {
      console.log("handleSubmit",`${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/notes/`);

     fetch(
       `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/notes/`,
       {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         credentials: "include",
         body: JSON.stringify({
           title,
           author,
           content,
           category,
         }),
       }
     )
       .then((response) => response.json())
       .then((result) => {
         console.log(result);
       })
       .catch((e) => {
         setError(JSON.stringify(e));
       });
   } else {setError('please fill all fields')}
   }

  return (
    <div className={classes.root}>
      <Grid container spacing={3} direction="row" justify="flex-end">
        <Grid item xs={9}>
          <Paper className={classes.paper}>
            {error ? error : null}
            <form
              onSubmit={handleSubmit}
              className={classes.root}
              noValidate
              autoComplete="on"
            >
              <FormControl fullWidth className={classes.root}>
                <InputLabel htmlFor="standard-adornment-amount">
                  Title for your note
                </InputLabel>
                <Input
                  id="standard-adornment-amount"
                  value={title}
                  onChange={handleTitle}
                  startAdornment={
                    <InputAdornment position="start">title:</InputAdornment>
                  }
                />
              </FormControl>
              <div>
                <TextField
                  id="outlined-multiline-static"
                  label="Body of note"
                  multiline
                  rows={8}
                  onChange={handleContent}
                  value={content}
                  style={{ width: "100%" }}
                  variant="outlined"
                />
              </div>
              <div>
                <TextField
                  id="standard-select-currency-native"
                  select
                  label="Выбор автора"
                  value={author}
                  required
                  onChange={handleAuthor}
                  SelectProps={{
                    native: true,
                  }}
                  helperText="Please select author"
                >
                  {authorsArr.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </TextField>
                <TextField
                  id="standard-select-currency-native"
                  select
                  label="Выбор категории"
                  value={category}
                  onChange={handleCategory}
                  SelectProps={{
                    native: true,
                  }}
                  helperText="Please select your category"
                >
                  {categoresArr.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </TextField>
                <TextField
                  id="standard-select-currency-native"
                  select
                  label="Выбор блокнота"
                  // value={title}
                  // onChange={handleChange}
                  SelectProps={{
                    native: true,
                  }}
                  helperText="Please select notebook"
                >
                  {notebooksArr.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </TextField>
              </div>
              <Button type="submit" variant="contained" color="primary">
                Добавить заметку
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
