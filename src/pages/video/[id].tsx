import Navbar from "../../components/navbar";
import VideoSingleContainer from "../../components/video/video-single-container";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from "axios";
import {NextPageContext} from "next";
import Cookies from 'cookies'
import cookieCutter from 'cookie-cutter'

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

export default function Video({data}) {
    const [video, setVideo] = useState<Video>(data);
    const router = useRouter()

    useEffect(() => {
        if (!sessionStorage.getItem("token")) {
            window.alert("로그인페이지로 이동합니다");
            window.location.href = "/login";
        }

        async function loadData() {
            console.log('hihi : ', router.query.id)
            if (router.query.id !== undefined) {
                console.log(`http://localhost:8082/video/${router.query.id}`)
                const response = await fetch(`http://localhost:8082/video/${router.query.id}?requestUserId=${cookieCutter.get("id")}`);
                const data:Video = await response.json();
                console.log('data: ', data);
                await setVideo(data);
                console.log('video : ',video)
            }
        }

        console.log('data : ',data);
        if (!data) {
            loadData();
        }
    }, [router.query.id]);


    return (
        <>
            <Navbar/>
            <VideoSingleContainer data={data}/>
        </>
    )
}

Video.getInitialProps = async (ctx:NextPageContext) => {
    const cookies = new Cookies(ctx.req, ctx.res)
    const id = cookies.get("id");
    console.log('id: ',id);
    const { data } = await axios.get(`http://localhost:8082/video/${ctx.query.id}?requestUserId=${id}`);

    return { data };
}