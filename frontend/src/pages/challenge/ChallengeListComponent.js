import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, makeStyles } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useHistory } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';

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
  const history = useHistory();
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
              {item.chlnNm}
            </Typography>
            <Typography gutterBottom variant="h7" component="p">
              {item.chlnMngr}
            </Typography>
            <Typography style={{height: "2rem"}} variant="body3" color="textSecondary" component="p">
              {item.chlnDesc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            찜하기 <FavoriteBorderIcon />
          </Button>
          <Button size="small" color="primary" onClick={ () => history.push(`/challenge-detail/${item.chlnNo}`) }>
            상세보기 <AddIcon />
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ChallengeListComponent;