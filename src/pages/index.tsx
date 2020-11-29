import React, {useState, useEffect} from "react";

import VideoContainer from "../components/video/video-container";
import Navbar from "../components/navbar"
import VideoSection from "../components/video/video-section";
import axios from "axios";

interface LargeComment {
    id: number;
    comment: string;
    createdAt: string;
    modifiedAt: string;
    userId: number;
    email: string;
    name: string;
    userImg: string;
}

interface Comment {
    id: number;
    comment: string;
    createdAt: string;
    modifiedAt: string;
    userId: number;
    email: string;
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
    viewCount: number
    goodStatus: boolean,
    badStatus: boolean;
    userId: number;
    email: string;
    name: string;
    userImg: string;
    comments: Comment[];
}

export default function Index() {

    const [topViewVideos, setTopViewVideos] = useState([]);
    const [topLikeVideos, setTopLikeVideos] = useState([]);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            window.alert("로그인페이지로 이동합니다");
            window.location.href = "/login";
        }

        async function loadVideo() {
            const response1 = await axios.get("http://localhost:8082/video")
            const videos: Video[] = response1.data;
            console.log(videos);
            setVideos(videos);

            const response2 = await axios.get("http://localhost:8082/order/topView")
            const topViewVideos: Video[] = response2.data;
            console.log(videos);
            setTopViewVideos(topViewVideos);

            const response3 = await axios.get("http://localhost:8082/order/goodCount")
            const topLikeVideos: Video[] = response3.data;
            console.log(topLikeVideos);
            setTopLikeVideos(topLikeVideos);

        }

        loadVideo();
    }, [])


    return (
        <>
            <Navbar/>
            <div className="videos">
                <VideoSection>
                    {
                        topViewVideos.map((video: Video) => {
                            const {
                                id,
                                title,
                                createdAt,
                                thumbnailUrl,
                                viewCount,
                                userId,
                                name,
                                userImg
                            } = video;
                            return (
                                <VideoContainer id={id}
                                                title={title}
                                                createdAt={createdAt}
                                                thumbnailUrl={thumbnailUrl}
                                                viewCount={viewCount} userId={userId}
                                                name={name}
                                                userImg={userImg}/>
                            );
                        })
                    }
                </VideoSection>

                <VideoSection>
                    {
                        topLikeVideos.map((video: Video) => {
                            const {
                                id,
                                title,
                                createdAt,
                                thumbnailUrl,
                                viewCount,
                                userId,
                                name,
                                userImg
                            } = video;
                            return (
                                <VideoContainer id={id}
                                                title={title}
                                                createdAt={createdAt}
                                                thumbnailUrl={thumbnailUrl}
                                                viewCount={viewCount}
                                                userId={userId}
                                                name={name}
                                                userImg={userImg}/>
                            );
                        })
                    }
                </VideoSection>

                <VideoSection>
                    {
                        videos.map((video: Video) => {
                            const {
                                id,
                                title,
                                createdAt,
                                thumbnailUrl,
                                viewCount,
                                userId,
                                name,
                                userImg
                            } = video;
                            return (
                                <VideoContainer id={id}
                                                title={title}
                                                createdAt={createdAt}
                                                thumbnailUrl={thumbnailUrl}
                                                viewCount={viewCount}
                                                userId={userId}
                                                name={name}
                                                userImg={userImg}/>
                            );
                        })
                    }
                </VideoSection>

                <style>{`
 .video-section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 3rem 1rem;
    padding: 3rem 0;
    margin: 0 1.5rem;
    border-top: 4px solid #CCC;
  }
  
  .video-section:first-child {
    border-top: none;
  }
  
   .video-section-title {
    grid-column: 1 / -1;
    margin: -.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .5rem;
  }
  
  .video-section-title-close {
    border: none;
    background: none;
    padding: 0;
    font-size: 2rem;
    color: #555;
    cursor: pointer;
  }
  
                `}</style>
            </div>
        </>
    )
}