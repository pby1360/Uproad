import React, { useEffect } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));


const Loading = (props) => {
  const { active } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
  useEffect(() => {
    setOpen(active);
  }, [active]);
  
  return (
    <div>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Loading;