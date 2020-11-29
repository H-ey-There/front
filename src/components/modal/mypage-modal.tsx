import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {createStyles, makeStyles, Theme, useTheme} from '@material-ui/core/styles';
import {TextField} from "@material-ui/core";
import axios from "axios";

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

interface Metadata {
    preview: string;
    raw?: File;
}

export default function MyPageModal() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const classes = useStyles();


    const [img, setImg] = useState<Metadata>({
        preview: "",
        raw: null,
    });



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <img src="/icons/account_circle-24px.svg" onClick={handleClickOpen}/>

            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                style={{
                    overflow: 'scroll'
                }}
            >
                <DialogTitle id="responsive-dialog-title">{"My Page"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <div className={classes.root}>
                            
                        </div>

                    </DialogContentText>

                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Close
                    </Button>
                    <Button  color="primary" autoFocus>
                        Submit!
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}