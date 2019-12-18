import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import {useStyles} from '../../css/materialStyles';

const Preloader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgress />
      <LinearProgress color="secondary" />
    </div>
  );
}

export default Preloader;
