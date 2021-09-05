import React, { useState, useEffect, memo } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GoogleLogin from 'react-google-login';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import makeSelectLogin from '../selectors';
import { connect } from 'react-redux';
import { Reset, SignIn1 } from '../actions';
import { useHistory } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Back from '../../../images/fpt.jpg';
import { getUser } from '../../../utils/constants';
import Alert from '@material-ui/lab/Alert';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Em Quan va Em Minh
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  // paper: {
  //   marginTop: theme.spacing(8),
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  // },
  // avatar: {
  //   margin: theme.spacing(1),
  //   backgroundColor: theme.palette.secondary.main,
  // },
  // form: {
  //   width: '100%', // Fix IE 11 issue.
  //   marginTop: theme.spacing(1),
  // },
  // submit: {
  //   margin: theme.spacing(3, 0, 2),
  // },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '100%',
  },
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${Back})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

}));

function SignIn(props) {
  const classes = useStyles();


  const { login, dispatch } = props;
  const { listCampus, loginSuccess, message } = login;

  console.log(message)

  const [campus, setCampus] = useState("");
  const [token, setToken] = useState("");
  const [messageAlert, setMessageAlert] = useState("");
  const [visible, setVisible] = useState(false);
  const history = useHistory();
  const user = getUser();

  if (user) {
    history.push("/desktop");
  }

  const responseGoogle = (response) => {
    setToken(response.tokenObj.id_token);
    console.log(response)
  }

  useEffect(() => {
    if (campus && token) {
      const data = {
        campus: campus,
        token: token
      }
      dispatch(SignIn1(data));
    }
  }, [token]);

  useEffect(() => {
    if (loginSuccess.AuthenKey) {
      history.push("/desktop");
    }

  }, [loginSuccess]);

  useEffect(() => {
    if (message !== "") {
      setMessageAlert(message);
      setVisible(true);
      setTimeout(() =>
        setVisible(false), 10000
      );
    }
  }, [message]);

  console.log(loginSuccess)
  console.log(token)

  return (
    // <Container component="main" maxWidth="xs">
    //   <CssBaseline />
    //   <div className={classes.paper}>
    //     <Avatar className={classes.avatar}>
    //       <LockOutlinedIcon />
    //     </Avatar>
    //     <Typography component="h1" variant="h5">
    //       Sign in
    //     </Typography>
    //     <form className={classes.form} noValidate>
    //       <div className="row">
    //         <div className="col-sm-7">
    //           <FormControl variant="outlined" className={classes.formControl}>
    //             <InputLabel htmlFor="outlined-age-native-simple">Select Campus</InputLabel>
    //             <Select
    //               native
    //               value={campus}
    //               onChange={(e) => setCampus(e.target.value)}
    //               label="campus"
    //               inputProps={{
    //                 name: 'campus',
    //                 id: 'outlined-age-native-simple',
    //               }}
    //             >
    //               <option aria-label="None" value="" />
    //               {listCampus.map((item) =>
    //                 <option key={item.CampusCode} value={item.CampusCode}>{item.CampusName}</option>
    //               )}
    //             </Select>
    //           </FormControl>
    //         </div>
    //         <div className="col-sm-5" style={{ paddingTop: "15px" }}>
    //           <GoogleLogin
    //             clientId="525769427042-2vrp9m5sfv6g8fb03fdl2dm1ddv1q03r.apps.googleusercontent.com"
    //             buttonText="Đăng nhập"
    //             onSuccess={responseGoogle}
    //             onFailure={responseGoogle}
    //             cookiePolicy={'single_host_origin'}
    //             isSignedIn={true}
    //           />
    //         </div>
    //       </div>
    //     </form>
    //   </div>
    //   <Box mt={8}>
    //     <Copyright />
    //   </Box>


    // </Container>

    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={3} md={9} className={classes.image} />
      <Grid item xs={12} sm={9} md={3} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <div className="row">
              <div className="col-sm-7">
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="campus-native-simple">Select Campus</InputLabel>
                  <Select
                    native
                    value={campus}
                    onChange={(e) => setCampus(e.target.value)}
                    label="campus"
                    inputProps={{
                      name: 'campus',
                      id: 'campus-native-simple',
                    }}
                  >
                    <option aria-label="None" value="" />
                    {listCampus.map((item) =>
                      <option key={item.CampusCode} value={item.CampusCode}>{item.CampusName}</option>
                    )}
                  </Select>
                </FormControl>


              </div>
              <div className="col-sm-5" style={{ paddingTop: "15px" }}>
                <GoogleLogin
                  clientId="525769427042-2vrp9m5sfv6g8fb03fdl2dm1ddv1q03r.apps.googleusercontent.com"
                  buttonText="Đăng nhập"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                //isSignedIn={true}
                />
              </div>
            </div>
          </form>
        </div>
        {visible &&
          <Alert variant="filled" severity="error" style={{ width: "80%", margin: "0 auto" }}>
            {messageAlert}
          </Alert>
        }
        <Box mt={8}>
          <Copyright />
        </Box>
      </Grid>
    </Grid>
  );
}

SignIn.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SignIn);