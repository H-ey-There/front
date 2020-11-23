export default function LargeCommentList() {
    return (
        <ul className="comments-list reply-list">
            <li>
                <div className="comment-avatar">
                    <img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg" alt="" />
                </div>
                <div className="comment-box">
                    <div className="comment-head">
                        <h6 className="comment-name"><a href="http://creaticode.com/blog">Lorena Rojero</a>
                        </h6>
                        <span>hace 10 minutos</span>
                        <i className="fa fa-reply"></i>
                        <i className="fa fa-heart"></i>
                    </div>
                    <div className="comment-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure
                        laudantium vitae, praesentium optio, sapiente distinctio illo?
                    </div>
                </div>
            </li>

            <li>
                <div className="comment-avatar"><img
                    src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" alt="" />
                </div>
                <div className="comment-box">
                    <div className="comment-head">
                        <h6 className="comment-name by-author"><a href="http://creaticode.com/blog">Agustin
                            Ortiz</a></h6>
                        <span>hace 10 minutos</span>
                        <i className="fa fa-reply"></i>
                        <i className="fa fa-heart"></i>
                    </div>
                    <div className="comment-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure
                        laudantium vitae, praesentium optio, sapiente distinctio illo?
                    </div>
                </div>
            </li>


            <style>{`
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
  width: 250px; }`}</style>
        </ul>
    )
}