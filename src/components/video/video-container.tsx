
interface VideoMetadata {
    id: number,
    title:string,
    createdAt:string,
    thumbnailUrl:string,
    viewCount:number,
    userId:number,
    name:string,
    userImg:string
}

export default function VideoContainer({id,title,createdAt, thumbnailUrl, viewCount, userId,
                                           name, userImg}: VideoMetadata) {
    return (
        <article className="video-container">
            <a href={`/video/${id}`} className="thumbnail" data-duration="12:24">
                <img className="thumbnail-image" src={thumbnailUrl}/>
            </a>
            <div className="video-bottom-section">
                <a href={`/community/${userId}`}>
                    <img className="channel-icon" src={userImg}/>
                </a>
                <div className="video-details">
                    <a href="#" className="video-title">{title}</a>
                    <a href={`/community/${userId}`} className="video-channel-name">{name}</a>
                    <div className="video-metadata">
                        <span>view {viewCount}</span>
                        • &nbsp;
                        <span>{createdAt}</span>
                    </div>
                </div>
            </div>
            <style>{`
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
        </article>
    )
}