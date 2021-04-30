import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);

export interface Props {}
type StateType = {
  name: String;
  surname: String;
  password: String;
  email: String;
};

const RegisterForm: React.FC<Props> = () => {
  const classes = useStyles();
  const [signUpData, setSignUpData] = useState<StateType>({
    name: "",
    surname: "",
    password: "",
    email: "",
  });
  const handleChangeName = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    inputName: "name" | "surname" | "password" | "email"
  ) => {
    setSignUpData({ ...signUpData, [inputName]: event.target.value });
  };
  return (
    <Grid container spacing={1} alignItems="flex-end" justify="center">
      <form className={classes.root} noValidate autoComplete="off">
        <Grid item>
          <AccountCircle />
        </Grid>
        <Grid item>
          <TextField id="input-with-icon-grid" label="With a grid" />{" "}
          <div>
            <TextField
              id="filled-name"
              label="Name"
              value={signUpData.name}
              onChange={(e) => handleChangeName(e, "name")}
              variant="filled"
            /> {signUpData.name}
 <TextField
              id="filled-name"
              label="Name"
              value={signUpData.name}
              onChange={(e) => handleChangeName(e, "name")}
              variant="filled"
            />
          </div>
        </Grid>
      </form>
    </Grid>
  );
};

export default RegisterForm;
