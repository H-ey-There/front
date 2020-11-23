export default function CommunitySidebar() {
    return (
        <header className="tm-header" id="tm-header">
            <div className="tm-header-wrapper">
                <button className="navbar-toggler" type="button" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="tm-site-header">
                    <div className="mb-3 mx-auto tm-site-logo"><i className="fas fa-times fa-2x"></i></div>
                    <h1 className="text-center">Xtra Blog</h1>
                </div>
                <nav className="tm-nav" id="tm-nav">
                    <ul>
                        <li className="tm-nav-item active"><a href="index.html" className="tm-nav-link">
                            Blog Home
                        </a></li>
                        <li className="tm-nav-item"><a href="post.html" className="tm-nav-link"
                                                       style={{
                                                           textDecoration: "none"
                                                       }}>
                            Recent Post
                        </a></li>
                        <li className="tm-nav-item"><a href="about.html" className="tm-nav-link"
                                                       style={{
                                                           textDecoration: "none"
                                                       }}>
                            Recent Upload Video
                        </a></li>
                        <li className="tm-nav-item"><a href="/" className="tm-nav-link"
                                                       style={{
                                                           textDecoration: "none"
                                                       }}>
                            <a href="/">Go Back</a>
                        </a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}