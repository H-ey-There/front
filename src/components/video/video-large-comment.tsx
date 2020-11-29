import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import React,{useState} from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {Button, TextField} from "@material-ui/core";
import cookieCutter from 'cookie-cutter'
import LargeCommentList from "../comment/large-comment-container";
import axios from "axios";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginLeft: '50px',
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


interface LargeCommentList {
    cId: number
    largeComments: LargeComment[];
}

interface LargeCommentRegisterRequestDto {
    requestUserId:number;
    commentId:number;
    largeComment:string;
}

export default function VideoLargeCommentContainer({cId, largeComments}:LargeCommentList) {
    const [largeCommentList, setLargeCommentList] = useState(largeComments);
    const classes = useStyles();
    const [largeComment, setLargeComment] = useState("");

    async function submitHandler(e) {
        e.preventDefault();
        if (largeComment.length < 3) {
            window.alert("입력이 너무 적습니다");
            setLargeComment("");
            return;
        };

        const payload:LargeCommentRegisterRequestDto = {
            requestUserId : Number(cookieCutter.get("id")),
            commentId: cId,
            largeComment: largeComment
        };

        const { status } = await axios.post("http://localhost:8082/registration/largeComment",payload);
        if (status === 201 || status == 200) {
            const response = await axios.get(`http://localhost:8082/comment/${cId}/largeComment`)
            console.log('largecommnet:',response.data)
            setLargeCommentList(response.data);
        }
    }

    return (
        <>
            <form>
                <TextField style={{width: '100%'}} label="Leave Your Comment Here..!" onChange={e => {
                    setLargeComment(e.target.value)
                    console.log(e.target.value)
                }}/>
                <br/>
                <Button type="submit" variant="outlined" color="primary" onClick={e => submitHandler(e)}>
                    Submit
                </Button>
                <Button type="reset" variant="outlined">Reset</Button>
            </form>

            <List className={classes.root}>
                {largeComments.length > 0 && largeCommentList.map((c,index) => (
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
                        <Divider variant="inset" component="li"/>
                        <br/><br/>
                    </>
                ))}
            </List>
        </>
    )
}