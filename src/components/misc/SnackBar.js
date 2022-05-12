import React from "react";
// ==== IMPORT MATERIAL UI ====
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackBar = (props) => (
  <Snackbar
    open={props.openSnackBar}
    autoHideDuration={3000}
    onClose={props.handleCloseSnackBar}
  >
    <Alert onClick={props.handleCloseSnackBar} severity={props.snackBarType}>
      {props.snackBarMessage}
    </Alert>
  </Snackbar>
);

export default SnackBar;
