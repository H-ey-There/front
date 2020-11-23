import CommentList from "./comment-container";

export default function AllCommentContainer() {
    return (
        <div className="comments-container">
            <h1>Comments</h1>
            <CommentList />


            <style>{`
            /* Uncomment for to use this pen in a external site.
  @import url('https://code.getmdl.io/1.1.3/material.indigo-pink.min.css'); */

body{
  background: #FF4081; }

a {
text-decoration: none; }

.jst-material-input-file {
  margin-top: 70px; }

.container{
  width: 400px;
  padding: 40px 20px;
  right: 0;
  left: 0;
  background: #fff;
  margin: auto; }

h2{
  margin-bottom: -30px;
  text-align: center;}

h6{
  margin-bottom: 30px;
  color: gray;
  text-align: center;
  padding: 10px; }

.file-upload {
\tmargin: 0 10px 0 25px;
}
.file-upload input.upload {
\tposition: absolute;
\ttop: 0;
\tright: 0;
\tmargin: 0;
\tpadding: 0;
  z-index: 10;
\tfont-size: 20px;
\tcursor: pointer;
\theight: 36px;
\topacity: 0;
\tfilter: alpha(opacity=0); }

#fileuploadurl{
  border: none;
  font-size: 12px;
  padding-left: 0;
  width: 250px; }
  `}</style>
        </div>
    )
}