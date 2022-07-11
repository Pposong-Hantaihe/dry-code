import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import BarChart from "../../../components/BarChart";
import PieChart from "../../../components/PieChart";
import AreaChart from "../../../components/AreaChart";

const AudienceTab = () => {
  return (
    <div>
      <Typography variant="h6" mb={1}>
        Audience Details by Follower
      </Typography>
      <Grid container mt={1}>
        <Grid container spacing={2} xs={12} md={8}>
          <Grid item xs={12}>
            <Card sx={{height: 300}}>
              <BarChart/> 
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{height: 300}}>
              <PieChart/>
            </Card>
          </Grid>
        </Grid>
        <Grid ml={2} xs={12} md={4} >
          <Card sx={{height: 616}}>
            <AreaChart/>
          </Card>
        </Grid>
      </Grid>
      
    </div>
  );
};

export default AudienceTab;

