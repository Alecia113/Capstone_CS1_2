////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// This file allow user to input the data, and later transfer to the backend. The result will //
// later transfer back to the frontend and being retrieved here.                              //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

var globalGender;
var globalHyper;
var globalHeart;
var globalMarriage;
var globalResidence;
var globalSmoke;
var globalWork;
var globalGlucose;
var globalAge;
var globalBMI;

export const sendBMI = () => {
  return globalBMI;
}

export const sendGlucose = () => {
  return globalGlucose;
}

export const sendAge = () => {
  return globalAge;
}

export const feedback = () => {
  var index = new Array(15).fill(0);
  
  index.splice(0,1,globalMarriage);

  if (globalWork === 0) {
    index.splice(1,1,1);
  }
  else if (globalWork === 1) {
    index.splice(2,1,1);
  }
  else if (globalWork === 2) {
    index.splice(3,1,1);
  }
  else if (globalWork === 3) {
    index.splice(4,1,1);
  }
  else if (globalWork === 4) {
    ;
  }

  index.splice(5,1,globalResidence);

  if (globalSmoke === 0) {
    index.splice(6,1,1);
  }
  else if (globalSmoke === 1) {
    index.splice(7,1,1);
  }
  else if (globalSmoke === 2) {
    index.splice(8,1,1);
  }
  else if (globalSmoke === 3) {
    ;
  }

  if (globalGender === 0) {
    ;
  }
  else if (globalGender === 1) {
    index.splice(9,1,1);
  }
  else if (globalGender === 2) {
    ;
  }

  index.splice(10,1,parseInt(globalAge));

  index.splice(11,1,globalHyper);

  index.splice(12,1,globalHeart);
  
  index.splice(13,1,parseInt(globalGlucose));

  index.splice(14,1,parseInt(globalBMI));

  return index;
}

export default function FillTest() {
  const [gender, setGender] = React.useState('');
  const [hyper, setHyper] = React.useState('');
  const [heart, setHeart] = React.useState('');
  const [marriage, setMarriage] = React.useState('');
  const [residence, setResidence] = React.useState('');
  const [smoke, setSmoke] = React.useState('');
  const [work, setWork] = React.useState('');
  const [glucose, setGlucose] = React.useState('');
  const [age, setAge] = React.useState('');
  const [bmi, setBMI] = React.useState('');


  const handleGender = (event) => {
    setGender(event.target.value);
    globalGender = event.target.value;    
  };

  const handleHyper = (event) => {
    setHyper(event.target.value);
    globalHyper = event.target.value;
  };

  const handleHeart = (event) => {
    setHeart(event.target.value);
    globalHeart = event.target.value;
  };

  const handleMarriage = (event) => {
    setMarriage(event.target.value);
    globalMarriage = event.target.value;
  };

  const handleWork = (event) => {
    setWork(event.target.value);
    globalWork = event.target.value;
  };

  const handleResidence = (event) => {
    setResidence(event.target.value);
    globalResidence = event.target.value;
  };

  const handleSmoke = (event) => {
    setSmoke(event.target.value);
    globalSmoke = event.target.value;
  };

  const handleAge = (event) => {
    setAge(event.target.value);
    globalAge = event.target.value;
  };

  const handleGlucose = (event) => {
    setGlucose(event.target.value);
    globalGlucose = event.target.value;
  };

  const handleBMI = (event) => {
    setBMI(event.target.value);
    globalBMI = event.target.value;
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
      Fill the test
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} required id="age" label="Age" fullWidth value = {age} onChange={handleAge} />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel id="gender select">Gender</InputLabel>
          <Select
            id="gender"
            required
            value={gender}
            onChange={handleGender}
          >
            <MenuItem value={0}>Female</MenuItem>
            <MenuItem value={1}>Male</MenuItem>
            <MenuItem value={2}>Prefer not to say</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} required id="bmi" label="BMI" fullWidth value = {bmi} onChange={handleBMI}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            value = {glucose}
            onChange={handleGlucose}
            required
            id="avg_glucose"
            label="Average glucose level"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel id="hypertension select">Hypertension</InputLabel>
          <Select
            id="hyper"
            required
            value={hyper}
            onChange={handleHyper}
          >
            <MenuItem value={1}>Yes</MenuItem>
            <MenuItem value={0}>No</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel id="marriage select">Married</InputLabel>
          <Select
            id="marriage"
            required
            value={marriage}
            onChange={handleMarriage}
          >
            <MenuItem value={1}>Yes</MenuItem>
            <MenuItem value={0}>No</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel id="work select">Work type</InputLabel>
          <Select
            id="work"
            required
            value={work}
            onChange={handleWork}
          >
            <MenuItem value={4}>Government job</MenuItem>
            <MenuItem value={0}>Never worked</MenuItem>
            <MenuItem value={1}>Private</MenuItem>
            <MenuItem value={2}>Self-employed</MenuItem>
            <MenuItem value={3}>Children</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel id="residence select">Residence location</InputLabel>
          <Select
            id="residence"
            required
            value={residence}
            onChange={handleResidence}
          >
            <MenuItem value={1}>Urban</MenuItem>
            <MenuItem value={0}>Rural</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel id="smoke select">Smoking</InputLabel>
          <Select
            id="smoke"
            required
            value={smoke}
            onChange={handleSmoke}
          >
            <MenuItem value={3}>Unknown</MenuItem>
            <MenuItem value={0}>Formerly smoked</MenuItem>
            <MenuItem value={1}>Never smoked</MenuItem>
            <MenuItem value={2}>Smokes</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel id="heart select">Heart disease</InputLabel>
          <Select
            id="heart"
            required
            value={heart}
            onChange={handleHeart}
          >
            <MenuItem value={1}>Yes</MenuItem>
            <MenuItem value={0}>No</MenuItem>
          </Select>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}