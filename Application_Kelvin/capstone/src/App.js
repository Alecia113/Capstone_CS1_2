/////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                 //
// This file contains the header, copy right footer and the main structure of the web application, //
// which the white box in the middle is coded here, contents are given from other scripts.         //
//                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import InfoPage from './InfoPage';
import TestPage from './TestPage';
import ResultPage from './ResultPage';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {feedback} from './TestPage';
import axios from 'axios'
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import pic from './rffi.png';

var testResult;

export const sendResult = () => {
  return testResult;
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Template supported by '}
      <Link color="inherit" href="https://material-ui.com/">
        material-ui
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Information', 'Fill the test', 'Review your result'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <InfoPage />;
    case 1:
      return <TestPage />;
    case 2:
      return <ResultPage />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleZero = () => {
    setLoading(false);
    setActiveStep(0);
  };

  const handleSubmit = () => {
    setLoading(true);
    const reactData = feedback();
    const url = `http://127.0.0.1:5000/data=${reactData}`;
    const promise = axios.get(url, reactData)
    .then(res => res.data)
    .catch(err => {
      console.log(err)
    });
    
    const getTestResult = async () => {
      const a = await promise;
      testResult = a;
    };

    getTestResult();

    setTimeout(() => {
      setActiveStep(activeStep + 1);
    }, 1500);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const [open3, setOpen3] = React.useState(false);

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  if (activeStep === 0) {
    return (
      <React.Fragment>
      <CssBaseline />

      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Link variant="h5" color="inherit" href="./App" noWrap className={classes.toolbarTitle}>
            Counter Stroke
          </Link>
          <nav>
            <Link variant="button" color="textPrimary" onClick={handleClickOpen} className={classes.link}>
              What is stroke
            </Link>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"What is stroke?"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Overview. A stroke occurs when the blood supply to part of your brain is interrupted or reduced, preventing brain tissue from getting oxygen and nutrients. Brain cells begin to die in minutes. A stroke is a medical emergency, and prompt treatment is crucial. Early action can reduce brain damage and other complications.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button href="https://en.wikipedia.org/wiki/Stroke" color="primary">
                  Take me to Wiki...
                </Button>
                <Button onClick={handleClose} color="primary">
                  Get it!
                </Button>
              </DialogActions>
            </Dialog>
            <Link variant="button" color="textPrimary" onClick={handleClickOpen2} className={classes.link}>
              Stroke support
            </Link>
            <Dialog
              open={open2}
              onClose={handleClose2}
              aria-labelledby="alert-dialog-title2"
              aria-describedby="alert-dialog-description2"
            >
              <DialogTitle id="alert-dialog-title2">{"Support"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description2">
                  Below are the links from different organisation associated with stroke in Australia:
                  <br/>
                  <Link variant="button" color="textPrimary" href="https://strokensw.org.au/" className={classes.link}>
                    Stroke Recovery Association
                  </Link>
                  <br/>
                  <Link variant="button" color="textPrimary" href="https://strokefoundation.org.au" className={classes.link}>
                    Stroke Foundation
                  </Link>
                  <br/>
                  <Link variant="button" color="textPrimary" href="https://www.strokesociety.com.au" className={classes.link}>
                    Stroke society of Australia
                  </Link>
                  <br/>
                  <Link variant="button" color="textPrimary" href="https://enableme.org.au/" className={classes.link}>
                    Stroke recovery
                  </Link>
                  <br/>
                  more organisations could be found on the internet...
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose2} color="primary">
                  Get it!
                </Button>
              </DialogActions>
            </Dialog>
            <Link variant="button" color="textPrimary" onClick={handleClickOpen3} className={classes.link}>
              About us
            </Link>
            <Dialog
              open={open3}
              onClose={handleClose3}
              aria-labelledby="alert-dialog-title3"
              aria-describedby="alert-dialog-description3"
            >
              <DialogTitle id="alert-dialog-title3">{"We are..."}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description3">
                  Team 2!
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose3} color="primary">
                  Sure!
                </Button>
              </DialogActions>
            </Dialog>
          </nav>
          <Button href="#" color="primary" variant="outlined" className={classes.link}>
            Staff login
          </Button>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>

          <React.Fragment>
              <Typography component="h1" variant="h4" align="center">
                Welcome!
              </Typography>
          </React.Fragment>

          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <React.Fragment> 
            {getStepContent(activeStep)}
            <div className={classes.buttons}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} className={classes.button}>
                  Back
                </Button>
              )}
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                Next
              </Button>
            </div>
          </React.Fragment>

        </Paper>
        <Copyright />
      </main>
      </React.Fragment>
    );
  }

  else if (activeStep === 1) {
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Link variant="h5" color="inherit" href="./App" noWrap className={classes.toolbarTitle}>
            Counter Stroke
          </Link>
          <nav>
            <Link variant="button" color="textPrimary" onClick={handleClickOpen} className={classes.link}>
              What is stroke
            </Link>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"What is stroke?"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Overview. A stroke occurs when the blood supply to part of your brain is interrupted or reduced, preventing brain tissue from getting oxygen and nutrients. Brain cells begin to die in minutes. A stroke is a medical emergency, and prompt treatment is crucial. Early action can reduce brain damage and other complications.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button href="https://en.wikipedia.org/wiki/Stroke" color="primary">
                  Take me to Wiki...
                </Button>
                <Button onClick={handleClose} color="primary">
                  Get it!
                </Button>
              </DialogActions>
            </Dialog>
            <Link variant="button" color="textPrimary" onClick={handleClickOpen2} className={classes.link}>
              Stroke Support
            </Link>
            <Dialog
              open={open2}
              onClose={handleClose2}
              aria-labelledby="alert-dialog-title2"
              aria-describedby="alert-dialog-description2"
            >
              <DialogTitle id="alert-dialog-title2">{"Support"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description2">
                  Below are the links from different organisation associated with stroke in Australia:
                  <br/>
                  <Link variant="button" color="textPrimary" href="https://strokensw.org.au/" className={classes.link}>
                    Stroke Recovery Association
                  </Link>
                  <br/>
                  <Link variant="button" color="textPrimary" href="https://strokefoundation.org.au" className={classes.link}>
                    Stroke Foundation
                  </Link>
                  <br/>
                  <Link variant="button" color="textPrimary" href="https://www.strokesociety.com.au" className={classes.link}>
                    Stroke society of Australia
                  </Link>
                  <br/>
                  <Link variant="button" color="textPrimary" href="https://enableme.org.au/" className={classes.link}>
                    Stroke recovery
                  </Link>
                  <br/>
                  more organisations could be found on the internet...
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose2} color="primary">
                  Get it!
                </Button>
              </DialogActions>
            </Dialog>
            <Link variant="button" color="textPrimary" onClick={handleClickOpen3} className={classes.link}>
              About us
            </Link>
            <Dialog
              open={open3}
              onClose={handleClose3}
              aria-labelledby="alert-dialog-title3"
              aria-describedby="alert-dialog-description3"
            >
              <DialogTitle id="alert-dialog-title3">{"We are..."}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description3">
                  Team 2!
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose3} color="primary">
                  Sure!
                </Button>
              </DialogActions>
            </Dialog>
          </nav>
          <Button href="#" color="primary" variant="outlined" className={classes.link}>
            Staff login
          </Button>
        </Toolbar>
      </AppBar>
        <main className={classes.layout}>
        <Paper className={classes.paper}>

        <React.Fragment>
            <Typography component="h1" variant="h4" align="center">
              Prevention is better than cure
            </Typography>
        </React.Fragment>

        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <React.Fragment> 
          {getStepContent(activeStep)}
          <div className={classes.buttons}>
            {activeStep !== 0 && (
              <Button onClick={handleBack} className={classes.button}>
                Back
              </Button>
            )}
            <LoadingButton
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handleSubmit}
              loading={loading}
              loadingIndicator="Loading..."
            >
              Submit
            </LoadingButton>
          </div>
        </React.Fragment>

        </Paper>
        <Copyright />
      </main>
      </React.Fragment>
    );
  }

  else {
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Link variant="h5" color="inherit" href="./App" noWrap className={classes.toolbarTitle}>
            Counter Stroke
          </Link>
          <nav>
            <Link variant="button" color="textPrimary" onClick={handleClickOpen} className={classes.link}>
              What is stroke
            </Link>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"What is stroke?"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Overview. A stroke occurs when the blood supply to part of your brain is interrupted or reduced, preventing brain tissue from getting oxygen and nutrients. Brain cells begin to die in minutes. A stroke is a medical emergency, and prompt treatment is crucial. Early action can reduce brain damage and other complications.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button href="https://en.wikipedia.org/wiki/Stroke" color="primary">
                  Take me to Wiki...
                </Button>
                <Button onClick={handleClose} color="primary">
                  Get it!
                </Button>
              </DialogActions>
            </Dialog>
            <Link variant="button" color="textPrimary" onClick={handleClickOpen2} className={classes.link}>
              Stroke Support
            </Link>
            <Dialog
              open={open2}
              onClose={handleClose2}
              aria-labelledby="alert-dialog-title2"
              aria-describedby="alert-dialog-description2"
            >
              <DialogTitle id="alert-dialog-title2">{"Support"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description2">
                  Below are the links from different organisation associated with stroke in Australia:
                  <br/>
                  <Link variant="button" color="textPrimary" href="https://strokensw.org.au/" className={classes.link}>
                    Stroke Recovery Association
                  </Link>
                  <br/>
                  <Link variant="button" color="textPrimary" href="https://strokefoundation.org.au" className={classes.link}>
                    Stroke Foundation
                  </Link>
                  <br/>
                  <Link variant="button" color="textPrimary" href="https://www.strokesociety.com.au" className={classes.link}>
                    Stroke society of Australia
                  </Link>
                  <br/>
                  <Link variant="button" color="textPrimary" href="https://enableme.org.au/" className={classes.link}>
                    Stroke recovery
                  </Link>
                  <br/>
                  more organisations could be found on the internet...
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose2} color="primary">
                  Get it!
                </Button>
              </DialogActions>
            </Dialog>
            <Link variant="button" color="textPrimary" onClick={handleClickOpen3} className={classes.link}>
              About random forest
            </Link>
            <Dialog
              open={open3}
              onClose={handleClose3}
              aria-labelledby="alert-dialog-title3"
              aria-describedby="alert-dialog-description3"
              fullWidth="2000"
              maxWidth="2000"
            >
              <DialogTitle id="alert-dialog-title3">{"Random forest"}</DialogTitle>
              <DialogContent>
                <React.Fragment>
                  <img src={pic} width="1200" height="700" text-align="center" alt="Logo"/>
                </React.Fragment>
                <React.Fragment>
                  <h4>The data set used in the prediction was collected by medical clinics in Bangladesh, which contained information on 5,110 people and whether they had suffered a stroke. After a series of data modelling and machine learning by the research team, we will choose the model with the highest accuracy to predict your potential diabetes risk level. Based on a series of data indicators provided by you, we will determine your diabetes risk level and make a series of recommendations for consultation. Due to differences in regions, races and environments, there may be errors in the predictions around the world. After we provide suggestions, we recommend that you go to a professional medical clinic for treatment, to reduce the risk of sudden illness or readmission.</h4>
                </React.Fragment>
              </DialogContent>
              <DialogActions>
              <Button href="https://en.wikipedia.org/wiki/Random_forest" color="primary">
                  Take me to Wiki...
                </Button>
                <Button onClick={handleClose3} color="primary">
                  Cool!
                </Button>
              </DialogActions>
            </Dialog>
          </nav>
          <Button href="#" color="primary" variant="outlined" className={classes.link}>
            Staff login
          </Button>
        </Toolbar>
      </AppBar>
        <main className={classes.layout}>
        <Paper className={classes.paper}>

        <React.Fragment>
            <Typography component="h1" variant="h4" align="center">
              Prevention is better than cure
            </Typography>
        </React.Fragment>

        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <React.Fragment> 
          {getStepContent(activeStep)}
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleZero}
              className={classes.button}
            >
              Redo the test
            </Button>
          </div>
        </React.Fragment>

        </Paper>
        <Copyright />
      </main>
      </React.Fragment>
    );
  }
}