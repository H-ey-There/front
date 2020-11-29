import React, {useState} from "react";
import {Avatar, Typography} from "@material-ui/core";
import MoodBadOutlinedIcon from '@material-ui/icons/MoodBadOutlined';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import axios from "axios";
import cookieCutter from 'cookie-cutter'

interface VideoMetadata {
    id:number,
    title:string,
    description:string,
    createdAt:string,
    viewCount:number,
    goodStatus:boolean,
    badStatus:boolean,
    userId:number,
    name:string,
    userImg:string,
}

export default function VideoMetadataContainer({id, title, description, createdAt, viewCount, goodStatus, badStatus, userId, name, userImg}:VideoMetadata) {
    const [good, setGood] = useState(0);
    const [bad, setBad] = useState(0);
    const [goodCurrentStatus, setGoodStatus] = useState(goodStatus);
    const [badCurrentStatus, setBadStatus] = useState(badStatus);
    const [subscribe, setSubscribe] = useState(false);


    async function goodIconClickHandler(e:MouseEvent) {
        await axios.get(`http://localhost:8082/video/${id}/good/user/${cookieCutter.get("id")}`)
            .then(response => {
                console.log('data:', response.data);
                const {good, bad, goodStatus, badStatus} = response.data;
                setGood(good);
                setBad(bad);
                setGoodStatus(goodStatus);
                setBadStatus(badStatus)
            })
            .catch(err => console.error(err));

    }

    async function badIconClickHandler(e:MouseEvent) {
        await axios.get(`http://localhost:8082/video/${id}/bad/user/${cookieCutter.get("id")}`)
            .then(response => {
                console.log('data:', response.data);
                const {good, bad, goodStatus, badStatus} = response.data;
                setGood(good);
                setBad(bad);
                setGoodStatus(goodStatus);
                setBadStatus(badStatus)
            })
            .catch(err => console.error(err));

    }

    async function subscribeHandler() {
        setSubscribe(!subscribe);
    }

    return (
        <div className="video-bottom-section" style={{margin: '15px', padding: '10px'}}>
            <Avatar alt="Remy Sharp" src={userImg}/>

            <div className="video-details">
                <a href={`/video/${id}`} className="video-title">{title}</a>
                <span><a href={`/community/${userId}`} className="video-channel-name">{name}</a>
                    &nbsp;&nbsp;&nbsp;
                    <button style={{
                        color: "white",
                        background: "#FF5335",
                        borderRadius: "15%"
                    }} onClick={subscribeHandler}>{subscribe ? "cancel" : "subscribe"}</button>
                </span>

                <div className="video-metadata">
                    <span>view  {viewCount}</span>
                    •
                    <span>uploaded date {createdAt}</span>

                    <br/><br/>

                    <span>
                        <EmojiEmotionsOutlinedIcon onClick={goodIconClickHandler} /> <strong>Good: {good}</strong>
                        &nbsp;&nbsp;&nbsp;
                        <MoodBadOutlinedIcon onClick={badIconClickHandler} /> <strong>Bad: {bad}</strong>
                    </span>

                    <br/><br/>

                    <Typography
                        component="span"
                        variant="body2"
                        style={{display: 'inline'}}
                        color="textPrimary">
                        {description}
                    </Typography>
                </div>
            </div>
        </div>
    )
}