import AllCommentContainer from "../comment/all-comment-container";

export default function CommunitySinglePost() {
    return (
        <article className="col-12 col-md-6 tm-post">
            <hr className="tm-hr-primary"/>
            <a href="post.html" className="effect-lily tm-post-link tm-pt-60">
                <div className="tm-post-link-inner">
                    <img src="http://unsplash.it/250/150?gravity=center" alt="Image" className="img-fluid"/>
                </div>
                <h2 className="tm-pt-30 tm-color-primary tm-post-title">Simple and useful HTML
                    layout</h2>
            </a>
            <p className="tm-pt-30">
                There is a clickable image with beautiful hover effect and active title link for
                each post item.
                Left side is a sticky menu bar. Right side is a blog content that will scroll up and
                down.
            </p>
            <div className="d-flex justify-content-between tm-pt-45">
                <span className="tm-color-primary">June 24, 2020</span>
            </div>
            <hr/>
            <div className="d-flex justify-content-between">
                <span>36 comments</span>
                <span>by Admin Nat</span>
            </div>
            <AllCommentContainer />
        </article>
    )
}