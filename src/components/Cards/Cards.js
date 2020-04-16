import React from "react";

import { Card, CardContent, Typography, Grid } from "@material-ui/core";

//animated data
import CountUp from "react-countup";

import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (confirmed == undefined) {
    return "loading..";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {/**Cards */}
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString}
            </Typography>
            <Typography variant="body2">
              Number of active cases of COVID -19
            </Typography>
          </CardContent>
        </Grid>
        {/**Cards */}
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString}
            </Typography>
            <Typography variant="body2">
              Number of active cases of COVID -19
            </Typography>
          </CardContent>
        </Grid>
        {/**Cards */}
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString}
            </Typography>
            <Typography variant="body2">
              Number of active cases of COVID -19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
