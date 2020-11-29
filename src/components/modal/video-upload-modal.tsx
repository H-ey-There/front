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

export default function VideoUploadModal() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const classes = useStyles();

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [thumbnail, setThumbnail] = useState<Metadata>({
        preview: "",
        raw: null,
    });
    const [video, setVideo] = useState<Metadata>({
        preview: "",
        raw: null,
    });

    async function onSubmitHandler() {
        const form = new FormData();
        form.append("requestUserId", "1");
        form.append("title", title);
        form.append("description", description);
        form.append("thumbnail", thumbnail.raw);
        form.append("video", video.raw);

        await axios.post("http://localhost:8082/registration", form)
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
            <img src="/icons/video-plus.svg" onClick={handleClickOpen}/>

            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                style={{
                    overflow: 'scroll'
                }}
            >
                <DialogTitle id="responsive-dialog-title">{"Video Upload"}</DialogTitle>
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
                                    onChange={e => setDescription(e.target.value)}
                                />

                                <label htmlFor="upload-thumbnail">
                                    <input
                                        style={{display: 'none'}}
                                        id="upload-thumbnail"
                                        name="upload-photo"
                                        type="file"
                                        onChange={e => setThumbnail({
                                            preview: URL.createObjectURL(e.target.files[0]),
                                            raw: e.target.files[0]
                                        })}
                                    />

                                    <Button className={classes.button} color="primary" variant="contained"
                                            component="span"
                                            onClick={() => setThumbnail({preview: "", raw: null})}>
                                        Upload Thumbnail
                                    </Button>
                                </label>

                                {thumbnail.raw !== null &&
                                (
                                    <>
                                        <br/>
                                        <Button className={classes.button} color="secondary" variant="contained"
                                                component="span"
                                                onClick={() => setThumbnail({preview: "", raw: null})}>
                                            Remove
                                        </Button>
                                        <img className={classes.preview} src={thumbnail.preview}/>
                                        <br/>
                                    </>
                                )

                                }
                                <br/>

                                <label htmlFor="upload-video">
                                    <input
                                        style={{display: 'none'}}
                                        id="upload-video"
                                        name="upload-video"
                                        type="file"
                                        onChange={e => setVideo({
                                            preview: URL.createObjectURL(e.target.files[0]),
                                            raw: e.target.files[0],
                                        })}
                                    />
                                    <br/>

                                    <Button className={classes.button} color="primary" variant="contained"
                                            component="span"
                                            onClick={() => setVideo({preview: "", raw: null})}>
                                        Upload Video
                                    </Button>
                                </label>
                                {video.raw !== null && (
                                    <>
                                        <br/>
                                        <Button className={classes.button} color="secondary" variant="contained"
                                                component="span">
                                            Remove
                                        </Button>
                                        <video className={classes.preview} autoPlay controls src={video.preview}/>
                                        <br/>
                                    </>
                                )}
                                <br/>
                                <br/>
                            </div>
                        </div>
                    </DialogContentText>
                    <br/>

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