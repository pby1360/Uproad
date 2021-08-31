import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
    width: '15rem',
    marginBottom: '2.5rem',
  },
  media: {
    height: 140,
  },
  mediaFilter: {
    height: 140,
    filter: 'contrast(0.5)'
  },
});

const ChallengeListComponent = ({item, active}) => {
  console.log(item);
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={active ? classes.media : classes.mediaFilter}
            image="/assets/ceo_info1.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h7" component="h3">
              {item.name} - {item.user}
            </Typography>
            <Typography variant="body3" color="textSecondary" component="p">
              {item.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ChallengeListComponent;