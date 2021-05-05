import React, { useState, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  Typography,
} from "@material-ui/core";
import { Copyright } from "@material-ui/icons";
import {
  validatePass,
  validateEmail,
  validateName,
} from "../../helpers/helpers";
// import initialState from "../../redusers/initalState";
// import mainReduser from "../../redusers/mainReduser";
// import { initialStateType } from "../../types";

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
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  })
);

export interface Props {}
type StateType = {
  name: string;
  surname: string;
  password: string;
  email: string;
};
type ErrorType = {
  message?: string;
};

const RegisterForm: React.FC<Props> = () => {
  // const [state, dispatch] = useReducer<React.Reducer<initialStateType,A:any>>(mainReduser, initialState);
  const userFromRedux = useSelector<any>(state => state.user)
  console.log("userFromRedux",userFromRedux);
  
  const classes = useStyles();
  const [signUpData, setSignUpData] = useState<StateType>({
    name: "",
    surname: "",
    password: "",
    email: "",
  });
  const [error, setError] = useState<ErrorType>({});
  const [user, setUser] = useState({});
  const history = useHistory();

  const handleChangeInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    inputName: "name" | "surname" | "password" | "email"
  ) => {
    setSignUpData({ ...signUpData, [inputName]: event.target.value });
    setError({});
  };
  const hadleOnSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setError({}); // for clear catching error

    if (!validateEmail(signUpData.email)) {
      setError({ message: "Uncorrected email format" });
      return;
    }
    if (!validateName(signUpData.name) || !validateName(signUpData.surname)) {
      setError({ message: "Uncorrected name or surname format" });
      return;
    }
    if (!validatePass(signUpData.password)) {
      setError({
        message:
          "Uncorrected password. It should contain: at least 6 simbols, at least one upper-case letter, one lower-case letter and digit.",
      });
      return;
    }

    fetch(
      `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/user/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpData),
        credentials: "include",
      }
    )
      .then((responce) => responce.json())
      .then((result) => {
        setUser(result);
        history.push("/");
      })
      .catch((e) => {
        setError(e);
      });
  };

  return (
    <>
      <Grid container spacing={1} alignItems="flex-end" justify="center">
        {/* ======================================== */}
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}></Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            {error ? <div>{error.message}</div> : null}
            <form className={classes.form} onSubmit={hadleOnSubmit} noValidate>
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
                    onChange={(e) => handleChangeInput(e, "name")}
                    autoFocus
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
                    onChange={(e) => handleChangeInput(e, "surname")}
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
                    onChange={(e) => handleChangeInput(e, "email")}
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
                    onChange={(e) => handleChangeInput(e, "password")}
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
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
