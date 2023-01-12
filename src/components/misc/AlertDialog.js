// ==== IMPORT MATERIAL UI ====
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

export default function AlertDialog(props) {
  return (
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
        <Button
          className="blue-button-outlined"
          onClick={() => props.closeDialog()}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            props.dialogAction(), props.closeDialog();
          }}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
