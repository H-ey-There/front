import React, {useState} from 'react';
import {createStyles, Theme, makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import VideoLargeCommentContainer from "./video-large-comment";
import {Button, TextField} from "@material-ui/core";
import axios from "axios";
import {useRouter} from "next/router";
import cookieCutter from 'cookie-cutter'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
        inline: {
            display: 'inline',
        },
    }),
);

interface LargeComment {
    id: number;
    comment: string;
    createdAt: string;
    modifiedAt: string;
    userId: number;
    email:string;
    name: string;
    userImg: string;
}

interface Comment {
    id: number;
    comment: string;
    createdAt: string;
    modifiedAt: string;
    userId: number;
    email:string;
    name: string;
    userImg: string;
    largeComments: LargeComment[];
}

interface CommentList {
    comments: Comment[];
}

interface CommentRegisterRequestDto {
    requestUserId:number;
    videoId:number;
    comment:string;
}

export default function VideoCommentContainer({comments}:CommentList) {

    const router = useRouter();
    const classes = useStyles();
    const [commentList, setCommentList] = useState(comments)
    const [comment, setComment] = useState("");
    async function submitHandler() {

        if (comment.length < 3) {
            window.alert("입력이 너무 적습니다");
            setComment("");
        };

        const payload:CommentRegisterRequestDto = {
            requestUserId : Number(cookieCutter.get("id")),
            videoId: Number(router.query.id),
            comment: comment
        };

        const { status } = await axios.post("http://localhost:8082/registration/comment",payload);
        if (status === 201 || status === 200) {
            const response = await axios.get(`http://localhost:8082/video/${router.query.id}/comments`)
            setCommentList(response.data);
        }
    }

    return (
        <>
            <form>
                <TextField style={{ width: '100%'}} label="Leave Your Comment Here..!"
                onChange={e => setComment(e.target.value)}/>
                <br/>
                <Button variant="outlined" color="primary" onClick={submitHandler}>
                    Submit
                </Button>
                <Button type="reset" variant="outlined">Reset</Button>
            </form>


            <h3>Comments</h3>
            <List className={classes.root}>
                {commentList.map((c,index) => (
                    <>
                        <ListItem key={c.id} alignItems="flex-start">
                            <ListItemAvatar>
                                <a href={`/community/${c.userId}`}>
                                    <Avatar alt={c.name} src={c.userImg}/>
                                </a>
                            </ListItemAvatar>
                            <ListItemText
                                primary={c.name}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >
                                        </Typography>
                                        {c.comment}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <VideoLargeCommentContainer cId={c.id} largeComments={c.largeComments}/>
                        <Divider variant="inset" component="li"/>
                        <br/><br/>
                    </>
                ))}
            </List>
        </>
    )
}