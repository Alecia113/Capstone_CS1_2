///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// This file display the result and personal health component after TestPage.js retrieve the //
// prediction result.                                                                        //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import Typography from '@material-ui/core/Typography';
import {sendResult} from './App';
import { makeStyles } from '@mui/styles';
import {sendBMI} from './TestPage';
import {sendAge} from './TestPage';
import {sendGlucose} from './TestPage';


const useStyles = makeStyles({
  yellow: {
    background: 'linear-gradient(45deg, #ffffff 40%, #fff12e 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    padding: '1px',
    paddingLeft: '20px',
    paddingRight: '10px',
    margin: '2px'
  },
  green: {
    background: 'linear-gradient(45deg, #ffffff 40%, #66fa48 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    padding: '1px',
    paddingLeft: '20px',
    paddingRight: '10px',
    margin: '2px'
  },
  red: {
    background: 'linear-gradient(45deg, #ffffff 40%, #fa3261 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    padding: '1px',
    paddingLeft: '20px',
    paddingRight: '10px',
    margin: '2px'
  },
});

function ShowBMI(num) {
  const classes = useStyles();
  if (num < 18.5) {
    return(
      <div className={classes.yellow}>
        <h2>The BMI is: {num} </h2>
        <p>A BMI of under 18.5 indicates that a person has insufficient weight, so they may need to put on some weight. They should ask a doctor or dietitian for advice.</p>
      </div>
    );
  }
  else if (num >= 18.5 && num <= 24.9) {
    return(
      <div className={classes.green}>
        <h2>The BMI is: {num} </h2>
        <p>A BMI of 18.5–24.9 indicates that a person has a healthy weight for their height. By maintaining a healthy weight, they can lower their risk of developing serious health problems.</p>
      </div>
    );
  }
  else if (num >= 25 && num <= 29.9) {
    return(
      <div className={classes.yellow}>
        <h2>The BMI is: {num} </h2>
        <p>A BMI of 25–29.9 indicates that a person is slightly overweight. A doctor may advise them to lose some weight for health reasons. They should talk with a doctor or dietitian for advice.</p>
      </div>
    );
  }
  return(
    <div className={classes.red}>
      <h2>The BMI is: {num} </h2>
      <p>A BMI of over 30 indicates that a person has obesity. Their health may be at risk if they do not lose weight. They should talk with a doctor or dietitian for advice.</p>
    </div>
  );
}

function ShowAge(num) {
  const classes = useStyles();
  if (num < 45) {
    return(
      <div className={classes.green}>
        <h2>The age is: {num} </h2>
        <p>People younger than 45 years old has relatively low chance to have stroke.</p>
      </div>
    );
  }
  else if (num >= 45 && num <= 75) {
    return(
      <div className={classes.yellow}>
        <h2>The age is: {num} </h2>
        <p>The stroke incidence doubling with each decade after the age of 45 years and over 70% of all strokes occur above the age of 65.</p>
      </div>
    );
  }
  return(
    <div className={classes.red}>
      <h2>The age is: {num} </h2>
      <p>People older than 75 years old has higher chance to develope stroke, the risk of female is even higher after 85 years old due to a longer life expectancy for women.</p>
    </div>
  );
}

function ShowGlucose(num) {
  const classes = useStyles();
  if (num < 140) {
    return(
      <div className={classes.green}>
        <h2>The glucose level is: {num} </h2>
        <p>Normal glucose level.</p>
      </div>
    );
  }
  else if (num >= 140 && num <= 200) {
    return(
      <div className={classes.yellow}>
        <h2>The glucose level is: {num} </h2>
        <p>Impaired glucose level, you should talk to doctors for further information.</p>
      </div>
    );
  }
  return(
    <div className={classes.red}>
      <h2>The glucose level is: {num} </h2>
      <p>For glucose level beyond 200 is likely to be diabetic associated, while diabetes is a well-established risk factor for stroke.</p>
    </div>
  );
}

export default function Review() {
  const result = sendResult();
  console.log(result);

  if (result === '000') {
    return (
      <React.Fragment>
        <React.Fragment>
          <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Low risk!
          </Typography>
        </React.Fragment>
        <React.Fragment>
          <Typography
              component="h1"
              variant="h6"
              align="center"
              color="text.primary"
              gutterBottom
            >
              The result is produced by random forest machine learning algorithm, it is just a prediction and
              not 100% accurate, below are personal health tips and check out "about random forest" at the right-top of the page for more details.
          </Typography>
        </React.Fragment>
        <br/>
        <React.Fragment>
          {ShowBMI(sendBMI())}
        </React.Fragment>

        <React.Fragment>
          {ShowAge(sendAge())}
        </React.Fragment>

        <React.Fragment>
          {ShowGlucose(sendGlucose())}
        </React.Fragment>
      </React.Fragment>
    )
  }

  else if (result === 111) {
    return(
      <React.Fragment>
        <React.Fragment>
          <Typography
              component="h1"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              High risk!
          </Typography>
        </React.Fragment>
        <React.Fragment>
          <Typography
              component="h1"
              variant="h6"
              align="center"
              color="text.primary"
              gutterBottom
            >
              The result is produced by random forest machine learning algorithm, it is just a prediction and
              not 100% accurate, below are personal health tips and check out "about random forest" at the right-top of the page for more details.
          </Typography>
        </React.Fragment>
        <br/>
        <React.Fragment>
          {ShowBMI(sendBMI())}
        </React.Fragment>

        <React.Fragment>
          {ShowAge(sendAge())}
        </React.Fragment>

        <React.Fragment>
          {ShowGlucose(sendGlucose())}
        </React.Fragment>
      </React.Fragment>
    )
  }

  else {
    return (
      <React.Fragment>
        <React.Fragment>
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Invalid input!
              </Typography>
          </React.Fragment>
          <React.Fragment>
          <Typography
              component="h1"
              variant="h6"
              align="center"
              color="text.primary"
              gutterBottom
            >
              You have to fill all inputs to predict the result, however "trickey" inputs are allow for user to play around and experience the fun part of machine learning.

          </Typography>
        </React.Fragment>
      </React.Fragment>
    )
  }
}