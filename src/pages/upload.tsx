import React from "react";
import Navbar from "../components/navbar";

export default function Upload() {
    return (
        <>
            <Navbar/>
            <div className="jst-material-input-file">

                <div className="container mdl-shadow--6dp">
                    <h2>Material Input File</h2>
                    <h6>Inspired by
                        <a href="https://codepen.io/thirdtiu/pen/wBKKyp">
                            Avelino P. Tiu III
                        </a>
                    </h6>
                    <div
                        className="file-upload mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                        <span>BROWSE</span>
                        <input type="file" name="FileAttachment" id="FileAttachment" className="upload"/>
                    </div>
                    <div
                        className="file-upload mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                        <span>BROWSE</span>
                        <input type="file" name="FileAttachment" id="FileAttachment" className="upload"/>
                    </div>
                    <input type="text" id="fileuploadurl" readOnly placeholder="Maximum file size is 1GB"/>
                    <div>
                        <input type="text"/>
                        <textarea name="" id="" cols={30} rows={10}/>
                    </div>
                </div>


                <style>{`
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
    margin: 0 10px 0 25px;
}
.file-upload input.upload {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
 padding: 0;
  z-index: 10;
 font-size: 20px;
 cursor: pointer;
 height: 36px;
 opacity: 0;
 filter: alpha(opacity=0); }

#fileuploadurl{
  border: none;
  font-size: 12px;
  padding-left: 0;
  width: 250px; }
            `}</style>

            </div>
        </>
    )
}