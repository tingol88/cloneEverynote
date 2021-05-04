import React, { useState } from "react";
import {
  Grid,
  Container,
  CssBaseline,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
  Box,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { Copyright } from "@material-ui/icons";
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
export interface LoginFormProps {}
type signInDataType = {
  email: string;
  password: string;
};

const LoginForm: React.FC<LoginFormProps> = () => {
  const classes = useStyles();
  const [signInData, setSignInData] = useState<signInDataType>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<{ message?: string }>({});
  const [user, setUser] = useState({});

  const handleChangeInput = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    inputName: "email" | "password"
  ) => {
    setSignInData({ ...signInData, [inputName]: event.target.value });
  };
  const hadleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/user/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(signInData),
      }
    );
    if (response.status === 200) {
      const result = await response.json();
      setUser(result);
    }
  };
  console.log("user", user);

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
            {error.message ? <div>{error.message}</div> : null}
            <form className={classes.form} onSubmit={hadleOnSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={signInData.email}
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
                    value={signInData.password}
                    onChange={(e) => handleChangeInput(e, "password")}
                    autoComplete="current-password"
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
                Sign In
              </Button>
              <Grid container justify="flex-end">
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

export default LoginForm;
