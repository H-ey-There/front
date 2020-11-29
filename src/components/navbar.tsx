import React, {useState, useEffect} from "react";
import VideoUploadModal from "./modal/video-upload-modal";
import PostUploadModal from "./modal/post-register-modal";
import MyPageModal from "./modal/mypage-modal";
import StreamingPreparationModal from "./modal/streaming-preparation-modal";

const basicImg:string = "https://imgnn.seoul.co.kr/img/upload/2019/11/22/SSI_20191122132005.jpg";

interface UserResponse {
  id: number;
  email: string;
  name: string;
  img: string;
}

export default function Navbar() {
    const [id, setId] = useState(0);
    const [img, setImg] = useState("");
    const [text, setText] = useState("");
    const [inputList, setInputList] = useState([]);

    useEffect(() => {
      
    },[]);

    function searchChangeHandler(e) {
      setText(e.target.value)
    }

    function searchClickHandler(e) {
      e.preventDefault();
      const inputHistory = [...inputList, text];
      setInputList(inputHistory);
    }

    return (
      <>
        <header className="header">
            <a href="/">
                <img src="/icons/logo.png" alt="Heythere Logo" className="heythere-logo"/>
            </a>
            <form className="search-bar">
                <input className="search-input" type="search" placeholder="Search" aria-label="Search" onChange={searchChangeHandler}/>
                <button type="submit" className="search-btn" onClick={searchClickHandler}>
                    <img src="/icons/magnify.svg"/>
                </button>
            </form>
            <div className="menu-icons">
                <div>
                    <VideoUploadModal />
                </div>
                <div>
                    <StreamingPreparationModal />
                </div>
                <div>
                    <PostUploadModal />
                </div>
                <div>
                    <img src="/icons/bell.svg" alt="Notifications"/>
                </div>
                <div>
                    <MyPageModal />
                </div>
            </div>
            
        </header>
        <div className="categories">
          <section className="category-section">
              <button className="category active">All</button>
              {
                inputList.map((input, index) => (
                <button key={index} className="category">{input}</button>
                ))
              }
            </section>
            </div>

            <style>{`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
   .heythere-logo {
    height: 60px;
  }
  
  .search-bar {
    display: flex;
    flex-grow: 1;
    margin: 0 2rem 0 4rem;
  }
  
  .search-input {
    width: 90%;
    font-size: inherit;
    padding: .4em;
    border: 1px solid #777;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  
  .search-btn {
    display: flex;
    align-items: center;
    padding: 0 1.25rem;
    border: 1px solid #777;
    background-color: #F8F8F8;
    border-left: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    cursor: pointer;
  }
  
  .search-btn:hover {
    background-color: #F0F0F0;
  }
  
  .menu-icons {
    display: grid;
    grid-template-columns: repeat(7, auto);
    align-items: center;
    gap: 0.5rem;
  }
  
  .menu-channel-icon {
    border-radius: 50%;
    width: 36px;
    height: 36px;
    background-color: #AAA;
  }
  
  .categories {
    padding: 1rem 2rem;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
  }
  
  .category-section {
    display: flex;
    overflow: hidden;
  }
  
  .category {
    margin-right: 1rem;
    word-wrap: none;
    white-space: nowrap;
    border: 1px solid #CCC;
    border-radius: 900px;
    background-color: #E7E7E7;
    padding: .5rem 1rem;
    font-size: inherit;
    cursor: pointer;
    transition: background-color 150ms;
  }
  
  .category:hover {
    background-color: #DDD;
  }
  
  .category.active {
    background-color: #606060;
    color: white;
    border-color: #EEE;
  }
  
  .category:last-child {
    margin-right: 0;
  }
  
            `}</style>
        </>
    )
}