export default function VideoContainer() {
    return (
        <article className="video-container">
            <a href="#" className="thumbnail" data-duration="12:24">
                <img className="thumbnail-image" src="http://unsplash.it/250/150?gravity=center"/>
            </a>
            <div className="video-bottom-section">
                <a href="#">
                    <img className="channel-icon" src="http://unsplash.it/36/36?gravity=center"/>
                </a>
                <div className="video-details">
                    <a href="#" className="video-title">Video Title</a>
                    <a href={`/community/1`} className="video-channel-name">Channel Name</a>
                    <div className="video-metadata">
                        <span>12K views</span>
                        •
                        <span>1 week ago</span>
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