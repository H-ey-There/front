export default function Index() {
    return (
        <>
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
                    <a href="#">
                        <img src="video-plus.svg" alt="Upload Video"/>
                    </a>
                    <a href="#">
                        <img src="apps.svg" alt="Apps"/>
                    </a>
                    <a href="#">
                        <img src="bell.svg" alt="Notifications"/>
                    </a>
                    <a href="#">
                        <img className="menu-channel-icon" src="http:///unsplash.it/36/36?gravity=center"
                             alt="Your Channel"/>
                    </a>
                </div>
            </header>
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
                <section className="video-section">
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
                                <a href="#" className="video-channel-name">Channel Name</a>
                                <div className="video-metadata">
                                    <span>12K views</span>
                                    •
                                    <span>1 week ago</span>
                                </div>
                            </div>
                        </div>
                    </article>
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
                                <a href="#" className="video-channel-name">Channel Name</a>
                                <div className="video-metadata">
                                    <span>12K views</span>
                                    •
                                    <span>1 week ago</span>
                                </div>
                            </div>
                        </div>
                    </article>
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
                                <a href="#" className="video-channel-name">Channel Name</a>
                                <div className="video-metadata">
                                    <span>12K views</span>
                                    •
                                    <span>1 week ago</span>
                                </div>
                            </div>
                        </div>
                    </article>
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
                                <a href="#" className="video-channel-name">Channel Name</a>
                                <div className="video-metadata">
                                    <span>12K views</span>
                                    •
                                    <span>1 week ago</span>
                                </div>
                            </div>
                        </div>
                    </article>
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
                                <a href="#" className="video-channel-name">Channel Name</a>
                                <div className="video-metadata">
                                    <span>12K views</span>
                                    •
                                    <span>1 week ago</span>
                                </div>
                            </div>
                        </div>
                    </article>
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
                                <a href="#" className="video-channel-name">Channel Name</a>
                                <div className="video-metadata">
                                    <span>12K views</span>
                                    •
                                    <span>1 week ago</span>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
                <section className="video-section">
                    <h2 className="video-section-title">
                        Special Section
                        <button className="video-section-title-close">&times;</button>
                    </h2>
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
                                <a href="#" className="video-channel-name">Channel Name</a>
                                <div className="video-metadata">
                                    <span>12K views</span>
                                    •
                                    <span>1 week ago</span>
                                </div>
                            </div>
                        </div>
                    </article>
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
                                <a href="#" className="video-channel-name">Channel Name</a>
                                <div className="video-metadata">
                                    <span>12K views</span>
                                    •
                                    <span>1 week ago</span>
                                </div>
                            </div>
                        </div>
                    </article>
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
                                <a href="#" className="video-channel-name">Channel Name</a>
                                <div className="video-metadata">
                                    <span>12K views</span>
                                    •
                                    <span>1 week ago</span>
                                </div>
                            </div>
                        </div>
                    </article>
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
                                <a href="#" className="video-channel-name">Channel Name</a>
                                <div className="video-metadata">
                                    <span>12K views</span>
                                    •
                                    <span>1 week ago</span>
                                </div>
                            </div>
                        </div>
                    </article>
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
                                <a href="#" className="video-channel-name">Channel Name</a>
                                <div className="video-metadata">
                                    <span>12K views</span>
                                    •
                                    <span>1 week ago</span>
                                </div>
                            </div>
                        </div>
                    </article>
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
                                <a href="#" className="video-channel-name">Channel Name</a>
                                <div className="video-metadata">
                                    <span>12K views</span>
                                    •
                                    <span>1 week ago</span>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
                <section className="video-section">
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
                                <a href="#" className="video-channel-name">Channel Name</a>
                                <div className="video-metadata">
                                    <span>12K views</span>
                                    •
                                    <span>1 week ago</span>
                                </div>
                            </div>
                        </div>
                    </article>
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
                                <a href="#" className="video-channel-name">Channel Name</a>
                                <div className="video-metadata">
                                    <span>12K views</span>
                                    •
                                    <span>1 week ago</span>
                                </div>
                            </div>
                        </div>
                    </article>
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
                                <a href="#" className="video-channel-name">Channel Name</a>
                                <div className="video-metadata">
                                    <span>12K views</span>
                                    •
                                    <span>1 week ago</span>
                                </div>
                            </div>
                        </div>
                    </article>
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
                                <a href="#" className="video-channel-name">Channel Name</a>
                                <div className="video-metadata">
                                    <span>12K views</span>
                                    •
                                    <span>1 week ago</span>
                                </div>
                            </div>
                        </div>
                    </article>
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
                                <a href="#" className="video-channel-name">Channel Name</a>
                                <div className="video-metadata">
                                    <span>12K views</span>
                                    •
                                    <span>1 week ago</span>
                                </div>
                            </div>
                        </div>
                    </article>
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
                                <a href="#" className="video-channel-name">Channel Name</a>
                                <div className="video-metadata">
                                    <span>12K views</span>
                                    •
                                    <span>1 week ago</span>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </div>
        </>
    )
}