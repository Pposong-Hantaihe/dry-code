import { Card, Grid, Typography } from "@mui/material";
import RecentVideos from "../../../components/RecentVideos";
import WordCloud from "../../../components/WordCloud";

const BrandAffinityTab = () => {
  return (
    <div>
      <Grid container spacing={2} >
        <Grid item xs={12} md={6} >
          <Typography variant="h6" mb={1}>
            Brand Affinity
          </Typography>
          <Card variant="outlined">
            <WordCloud colors={["#ff77aa", "#ff99cc", "#ffbbee", "#ff5588", "#ff3377"]}/>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} >
          <Typography variant="h6" mb={1}>
            Interest Graph
          </Typography>
          <Card variant="outlined">
            <WordCloud colors={["#0FC2C0", "#0CABA8", "#008F8C", "#015958", "#023535"]}/>
          </Card>
        </Grid>
        <Grid item xs={12} >
          <RecentVideos />
        </Grid>
      </Grid>
    </div>
  );
};

export default BrandAffinityTab;
