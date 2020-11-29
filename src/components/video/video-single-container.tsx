import React, {useState, useEffect} from "react";
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import VideoSingleSidebarContainer from "./video-single-sidebar-container";
import VideoMetadataContainer from "./video-metadata-container";
import VideoCommentContainer from "./video-comment";
import axios from "axios";
import {useRouter} from "next/router";
import {NextPageContext} from "next";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
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
interface Video {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  modifiedAt: string;
  thumbnailUrl: string;
  videoUrl: string;
  viewCount: number;
  goodStatus: boolean;
  badStatus: boolean;
  userId: number;
  email:string;
  name: string;
  userImg: string;
  comments : Comment[];
}

export default function VideoSingleContainer({data}) {
    const classes = useStyles();
    const [video, setVideo] = useState<Video>(data);

    console.log('video in container:',video)

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={9}>
                    <div style={{
                        objectFit: 'contain'
                    }}>
                        <video width={`100%`} controls src={video.videoUrl} poster={video.thumbnailUrl}>
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <VideoMetadataContainer
                        id={video.id}
                        title={video.title}
                        description={video.description}
                        createdAt={video.createdAt}
                        viewCount={video.viewCount}
                        goodStatus={video.goodStatus}
                        badStatus={video.badStatus}
                        userId={video.userId}
                        name={video.name}
                        userImg={video.userImg}
                    />

                    <hr/>
                    <div style={{margin: '15px', padding: '10px'}}>
                        <VideoCommentContainer comments={video.comments}/>
                    </div>


                </Grid>
                <VideoSingleSidebarContainer />
            </Grid>

            <style>{`
            
  .video-description {
    display: inline-block; 
    width: 100%; 
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis;
    white-space: normal;
  }
  .video-container {
    display: flex;
    flex-direction: column;
  }
  
  .thumbnail {
    position: relative;
    display: flex;
  }
  
  .thumbnail::before {
    content: attr(data-duration);
    position: absolute;
    background-color: rgba(0, 0, 0, .85);
    color: white;
    right: 5px;
    bottom: 5px;
    padding: .1em .3em;
    border-radius: .3em;
    font-size: .9rem;
  }
  
  .thumbnail-image {
    width: 100%;
    height: 100%;
    min-width: 250px;
    min-height: 150px;
    background-color: #AAA;
  }
  
  .video-bottom-section {
    display: flex;
    align-items: flex-start;
    margin-top: 1rem;
  }
  
  .channel-icon {
    margin-right: .75rem;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    background-color: #AAA;
  }
  
  .video-details {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }
  
  .video-title {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: .5rem;
    text-decoration: none;
    color: black;
  }
  
  .video-channel-name {
    margin-bottom: .1rem;
    text-decoration: none;
    transition: color 150ms;
  }
  
  .video-channel-name:hover {
    color: #111;
  }
  
  .video-channel-name,
  .video-metadata {
    color: #555;
  }
  `}</style>
        </div>
    )
}

