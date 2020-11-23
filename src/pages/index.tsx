import React, {useEffect} from "react";

import VideoContainer from "../components/video-container";
import Navbar from "../components/navbar"
import VideoSection from "../components/video-section";

export default function Index() {
    useEffect(() => {
        if (!(localStorage.getItem("token"))) {
            window.alert("로그인이 필요합니다!");
            window.location.href = "/login";
        }
    }, []);


    return (
        <>
            <Navbar />
            <div className="categories">
                <section className="category-section">
                    <button className="category active">All</button>
                    <button className="category">Category 1</button>
                    <button className="category">Category 2</button>
                    <button className="category">Category 3</button>
                    <button className="category">Category 4</button>
                    <button className="category">Category 5</button>
                    <button className="category">Category 6</button>
                    <button className="category">Category 7</button>
                    <button className="category">Category 8</button>
                    <button className="category">Category 9</button>
                </section>
            </div>
            <div className="videos">
                <VideoSection>
                    <VideoContainer />
                    <VideoContainer />
                    <VideoContainer />
                    <VideoContainer />
                </VideoSection>

                <VideoSection>
                    <VideoContainer />
                    <VideoContainer />
                    <VideoContainer />
                    <VideoContainer />
                </VideoSection>

                <VideoSection>
                    <VideoContainer />
                    <VideoContainer />
                    <VideoContainer />
                    <VideoContainer />
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