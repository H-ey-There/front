import {createStyles, makeStyles, Theme, useTheme} from "@material-ui/core/styles";
import React, {useState} from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            minWidth: '300px',
            maxWidth: '1000px',
            rows: 19
        },
        preview: {
            minWidth: '300px',
            maxWidth: '500px'
        },
        button: {
            margin: '10px',
            padding: '10px'
        }
    }),
);

export default function StreamingPreparationModal() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <img src="/icons/contacts-24px.svg" onClick={handleClickOpen}/>

            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                style={{
                    overflow: 'scroll'
                }}
            >
                <DialogTitle id="responsive-dialog-title">{"Before Live Streaming..."}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <div className={classes.root}>
                            <div>
                                <TextField
                                    className={classes.textField}
                                    label="Title"
                                    style={{margin: 8}}
                                    placeholder="room title"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    onChange={e => setTitle(e.target.value)}
                                />

                                <TextField
                                    className={classes.textField}
                                    label="streaming Description"
                                    style={{margin: 8}}
                                    placeholder="live streaming description"
                                    fullWidth
                                    multiline
                                    rows={5}
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </div>
                        </div>
                    </DialogContentText>
                    <br/>

                </DialogContent>

                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Close
                    </Button>
                    <Button color="primary" autoFocus>
                        Go~!
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}