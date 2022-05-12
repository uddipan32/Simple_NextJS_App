// ==== IMPORT MATERIAL UI ====
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

const AlertDialog = (props) => (
  <Dialog
    open={props.openDialog}
    onClose={props.closeDialog}
    aria-labelledby="form-dialog-title"
  >
    <DialogTitle id="form-dialog-title">
      <h2 className="primary-color margin-0">{props.alertTitle}</h2>
    </DialogTitle>
    <DialogContent>
      <h4 className="primary-color margin-0">{props.alertMessage}</h4>
    </DialogContent>
    <DialogActions>
      <button className="blue-button-outlined" onClick={() => props.closeDialog()}>
        Cancel
      </button>
      <Button
        onClick={() => {
          props.dialogAction(),
          props.handleClose()
        }}
      >
        Confirm
      </Button>
    </DialogActions>
  </Dialog>
);

export default AlertDialog;