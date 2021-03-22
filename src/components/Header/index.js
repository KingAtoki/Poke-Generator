import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, useScrollTrigger } from '@material-ui/core';

/** 
 * elevation scroll allows the top bar to stay at the top of the page
 * in case the user scrolls
 */
const ElevationScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Poke Generator
          </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
}

export default Header