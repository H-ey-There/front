import React, {useState, useEffect} from "react";
import axios from "axios";
import { userInfo } from "os";

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

    useEffect(() => {
      console.log(`http://localhost:8084/v1/profile/${Number(localStorage.getItem("id"))}`)

      async function loadData() {
        const response = await fetch(`http://localhost:8084/v1/profile/${Number(localStorage.getItem("id"))}`);
        const {id, email, name, img}:UserResponse =  await response.json();
      
        if( img === null) {
          setImg(basicImg);
        }
        else {
          setImg(img);
        }
        setId(id);
        
      };

      loadData();
      
    },[]);

    return (
        <header className="header">
            <a href="#">
                <img src="logo.png" alt="YouTube Logo" className="youtube-logo"/>
            </a>
            <form className="search-bar">
                <input className="search-input" type="search" placeholder="Search" aria-label="Search"/>
                <button type="submit" className="search-btn">
                    <img src="magnify.svg"/>
                </button>
            </form>
            <div className="menu-icons">
                <a href="/upload">
                    <img src="video-plus.svg" alt="Upload Video"/>
                </a>
                <a href="#">
                    <img src="apps.svg" alt="Apps"/>
                </a>
                <a href="#">
                    <img src="bell.svg" alt="Notifications"/>
                </a>
                <a href={`/mypage/${id}`}>
                    <img className="menu-channel-icon" src={img} />
                </a>
            </div>
            <style>{`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
   .youtube-logo {
    height: 20px;
  }
  
  .search-bar {
    display: flex;
    flex-grow: 1;
    margin: 0 2rem 0 4rem;
  }
  
  .search-input {
    width: 100%;
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
    grid-template-columns: repeat(4, auto);
    align-items: center;
    gap: 1.5rem;
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
        </header>
    )
}