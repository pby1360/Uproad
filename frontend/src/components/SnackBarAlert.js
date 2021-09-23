import { Snackbar } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import { useState, forwardRef, useImperativeHandle } from "react";

const SnackbarAlert = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    handleClick(alertType, message) {
      setState({ ...state, open: true, alertType: alertType, message: message });
    }
  }));

  const alertStyle = {
    border: "solid 1px #ccc",
  }

  const [state, setState] = useState({
    vertical: 'top',
    horizontal: 'center',
    open: false,
    alertType: "info",
    message: "",
  });

  const { vertical, horizontal, open, alertType, message } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
  <Snackbar
    anchorOrigin={{ vertical, horizontal }}
    onClose={handleClose}
    autoHideDuration={2000}
    open={open}
    key={vertical + horizontal}
  >
    <Alert severity={alertType} style={alertStyle}>
      <AlertTitle>{alertType}</AlertTitle>
      {message}
    </Alert>
  </Snackbar>
  )
});

export default SnackbarAlert;