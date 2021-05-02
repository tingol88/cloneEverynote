import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, Typography } from "@material-ui/core";
import { AccountCircle, Copyright } from "@material-ui/icons";
import { validate } from "../../helpers/helpers";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
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
    <>
    <Grid container spacing={1} alignItems="flex-end" justify="center">
      <div>
        <form
          className={[classes.root, classes.form].join(" ")}
          noValidate
          autoComplete="off"
        >
          <Grid item>
            <AccountCircle />
            <Typography variant="h3" component="h2">
              Форма регистрации
            </Typography>
          </Grid>
          <Grid item>
            <div>
              <TextField
                id="filled-name"
                label="Name"
                value={signUpData.name}
                onChange={(e) => handleChangeName(e, "name")}
                variant="filled"
              />{" "}
              <TextField
                id="filled-surname"
                label="Surname"
                value={signUpData.surname}
                onChange={(e) => handleChangeName(e, "surname")}
                variant="filled"
              />
              <Grid item xs={6}></Grid>
              <TextField
                id="filled-email"
                label="Email"
                value={signUpData.email}
                onChange={(e) => handleChangeName(e, "email")}
                variant="filled"
              />
              <TextField
                id="filled-password"
                label="Input your password"
                value={signUpData.password}
                onChange={(e) => handleChangeName(e, "password")}
                variant="filled"
              />
            </div>
          </Grid>
        </form>
      </div>
      {/* ======================================== */}
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={signUpData.name}
                onChange={(e) => handleChangeName(e, "name")}                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={signUpData.surname}
                onChange={(e) => handleChangeName(e, "surname")}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={signUpData.email}
                onChange={(e) => handleChangeName(e, "email")}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={signUpData.password}
                onChange={(e) => handleChangeName(e, "password")}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    </Grid>
    </>
  );
};

export default RegisterForm;
