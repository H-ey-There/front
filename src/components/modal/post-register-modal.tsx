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

export default function PostUploadModal() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const classes = useStyles();

    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [img, setImg] = useState<Metadata>({
        preview: "",
        raw: null,
    });


    async function onSubmitHandler() {
        const form = new FormData();
        form.append("requestUserId", "1");
        form.append("title", title);
        form.append("content", content);
        form.append("img", img.raw);

        await axios.post("http://localhost:8081/v1/registration/post", form)
            .then(response => {
                const {status, data} = response;
                if (status === 201 || status == 200)
                    console.log(data);
            })
            .catch(error => {
                console.error(error);
            })
    }


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <img src="/icons/create-24px.svg" onClick={handleClickOpen}/>

            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                style={{
                    overflow: 'scroll'
                }}
            >
                <DialogTitle id="responsive-dialog-title">{"Post Upload"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <div className={classes.root}>
                            <div>
                                <TextField
                                    className={classes.textField}
                                    label="Title"
                                    style={{margin: 8}}
                                    placeholder="title..."
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
                                    label="Video Description"
                                    style={{margin: 8}}
                                    placeholder="video description"
                                    fullWidth
                                    multiline
                                    rows={10}
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    onChange={e => setContent(e.target.value)}
                                />

                                <label htmlFor="upload-thumbnail">
                                    <input
                                        style={{display: 'none'}}
                                        id="upload-thumbnail"
                                        name="upload-photo"
                                        type="file"
                                        onChange={e => setImg({
                                            preview: URL.createObjectURL(e.target.files[0]),
                                            raw: e.target.files[0]
                                        })}
                                    />

                                    <Button className={classes.button} color="primary" variant="contained"
                                            component="span"
                                            onClick={() => setImg({preview: "", raw: null})}>
                                        Upload Thumbnail
                                    </Button>
                                </label>

                                {img.raw !== null && (
                                    <>
                                        <br/>
                                        <Button className={classes.button} color="secondary" variant="contained"
                                                component="span"
                                                onClick={() => setImg({preview: "", raw: null})}>
                                            Remove
                                        </Button>
                                        <img className={classes.preview} src={img.preview}/>
                                        <br/>
                                    </>
                                )}
                            </div>
                        </div>
                    </DialogContentText>

                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Close
                    </Button>
                    <Button onClick={onSubmitHandler} color="primary" autoFocus>
                        Submit!
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}