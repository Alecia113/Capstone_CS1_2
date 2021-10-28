/////////////////////////////////////////////////////////////////////////////////////
//                                                                                 //
// This file display the information about the web appplication in the first page. //
//                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import Typography from '@material-ui/core/Typography';


export default function showInfo() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        What is this about?
      </Typography>
      <br/>
      <Typography variant="body1" gutterBottom>
      This is an online application using random forest machine learning algorithm to predict stroke possibility by taking user’s details, such as <i>age</i>, <i>gender</i>, <i>BMI</i> and more...
      </Typography>
      <Typography variant="body1" gutterBottom>
      We would not store your information, however, we are happy to receive your feedback to improve our algorithm. If you are ready press ‘next’ to continue.
      </Typography>
    </React.Fragment>
  );
}
