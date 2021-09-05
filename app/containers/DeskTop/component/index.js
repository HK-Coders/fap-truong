import React, { useState, useEffect, memo } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import TodayIcon from '@material-ui/icons/Today';
import DescriptionIcon from '@material-ui/icons/Description';
import { GoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import makeSelectDeskTop from '../selectors';
import { getUser, removeUser, timeout } from '../../../utils/constants';
import { Reset } from '../../Login/actions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import Bg from '../../../images/fptu.jpg';
import quan from '../../../images/quan.jpg';
import duyminh from '../../../images/duyminh.jpg';
import Avatar from '@material-ui/core/Avatar';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  test: {
    flexGrow: 1,
  },
  button: {
    //margin: theme.spacing(1),
    width: '100%',
    backgroundColor: "orange",
    margin: "10px",
  },
  paper: {
    width: '80%'
  },
  content1: {
    marginTop: "2rem",
    backgroundImage: `url(${Bg})`,
    height: "500px",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "relative",
    opacity: "1"
  },
  insideContent1: {
    position: "absolute",
    textAlign: "center",
    color: "black",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#ddd",
    opacity: "0.7"
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: "5px auto"
  } 
}));

function DeskTopComponent(props) {

  const { deskTop, dispatch } = props;
  const { imageTest } = deskTop;

  console.log(imageTest)

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = useState(0);
  const history = useHistory();
  const user = getUser();

  if (user) {
    //timeout();
    console.log(user);
  } else history.push('/');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const logout = () => {
    removeUser();
    dispatch(Reset());
    history.push('/');
  }

  const changeDesk = (index) => {
    setIndex(index);
  }


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}

        style={{ backgroundImage: "linear-gradient(to right, #1066AA, #EA6E26, #15AB49)" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" noWrap className={classes.test}>
            Fap Truong
          </Typography>
          <Typography style={{ marginRight: "10px" }} variant="h6" noWrap>
            <p>Hello, <br /> {localStorage.getItem("name")}</p>
          </Typography>

          <GoogleLogout
            clientId="525769427042-2vrp9m5sfv6g8fb03fdl2dm1ddv1q03r.apps.googleusercontent.com"
            buttonText="Đăng xuất"
            onLogoutSuccess={logout}

          />
        </Toolbar>
      </AppBar>
      {/* <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['User Information', 'Semester Mark Report', 'Academic Transcript & GPA', 'Semester Timetable'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon onClick={() => changeDesk(index)}>{index === 0 ? <AccountBoxIcon /> : index === 1 ? <DescriptionIcon /> : index === 2 ? <MailIcon /> : index === 3 ? <TodayIcon /> : null}</ListItemIcon>
              <ListItemText primary={text} onClick={() => changeDesk(index)} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Log Out'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon><ExitToAppIcon /></ListItemIcon>
              <GoogleLogout
                clientId="525769427042-2vrp9m5sfv6g8fb03fdl2dm1ddv1q03r.apps.googleusercontent.com"
                buttonText="Đăng xuất"
                onLogoutSuccess={logout}

              />
            </ListItem>
          ))}
        </List>
      </Drawer> */}
      <main className={classes.content}>
        <div className={classes.content1}>
          <div className={classes.insideContent1}>
            <p style={{ fontSize: "40px" }}>FAP TRUONG</p>
            <p style={{ fontSize: "20px" }}>Hi, this tool is made by FPT University's Student. It is created to help students learning at FPT University
              control their learing status easier</p>
          </div>
        </div>
        <div className={classes.toolbar} />

        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "30px", fontWeight: "bold" }}>Main Features</p>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Button
                variant="contained"
                className={classes.button}
                endIcon={<DescriptionIcon />}
              >
                Semester Mark Report
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                className={classes.button}
                endIcon={<DescriptionIcon />}
              >
                Academic Transcript &amp; GPA
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                className={classes.button}
                endIcon={<TodayIcon />}
              >
                Semester Timetable
              </Button>
            </Grid>
          </Grid>
        </div>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "30px", fontWeight: "bold" }}>About Us</p>
        </div>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={6}>
            <Avatar className={classes.avatar} alt="Hoang Duy Minh" src={duyminh} />
              <div style={{ textAlign: "center" }}>Em minh</div>
            </Grid>
            <Grid style={{ textAlign: "center" }} item xs={6}>
              <Avatar className={classes.avatar} alt="Nguyen Anh Quan" src={quan} />
              <div >Em quan</div>
            </Grid>
          </Grid>
        </div>
        {/* {index === 0 ?
          <>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Paper className={classes.paper}>Noti</Paper>
              </Grid>
              <Grid item xs={8} style={{ textAlign: "center", borderLeft: "1px solid black" }}>
                <Button
                  variant="contained"
                  className={classes.button}
                  endIcon={<DescriptionIcon />}
                >
                  Semester Mark Report
                </Button>
                <Button
                  variant="contained"
                  className={classes.button}
                  endIcon={<DescriptionIcon />}
                >
                  Academic Transcript &amp; GPA
                </Button>
                <Button
                  variant="contained"
                  className={classes.button}
                  endIcon={<TodayIcon />}
                >
                  Semester Timetable
                </Button>

              </Grid>
            </Grid>


          </> : null
        } */}

        {/* {index === 1 ?
          <>
            <Typography paragraph>
              Semester Mark Report
            </Typography>
          </> : null
        }
        {index === 2 ?
          <>
            <Typography paragraph>
              Academic
            </Typography>
          </> : null
        }
        {index === 3 ?
          <>
            <Typography paragraph>
              Timetable
            </Typography>
          </> : null
        } */}

      </main >
    </div >
  );
}

DeskTopComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  deskTop: makeSelectDeskTop(),
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
)(DeskTopComponent);