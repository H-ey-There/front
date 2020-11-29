import React, {useState} from "react";
import axios from "axios";

interface RegisterUserRequestDto {
    email: string;
    name: string;
    password: string;
}

export default function Register () {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("")

    async function onClickHandler() {
        const payload:RegisterUserRequestDto = {email, name, password};
        await axios.post("http://localhost:8080/auth/register", payload)
        .then(response => {
            const {status, data} = response;
            if (status === 201 || status === 200) {
                console.log(`User created, user id : ${data}`);
                window.location.href = "/login";
            }
            console.log("something wrong"); 
        }).catch(err => {
            console.error(err);
            setEmail("");
            setName("");
            setPassword("");
            window.alert("Nono! something wrong~!");
        })
    }

    return (
        <div className="main-wrap">
            <div className="login-main">
                <h1>Join Now!</h1>
                <input type="email" placeholder="email" className="box1 border1" 
                onChange={(e) => setEmail(e.target.value)}/>
                <input type="text" placeholder="nickname" className="box1 border2"
                onChange={(e) => setName(e.target.value)}/>
                <input type="password" placeholder="password" className="box1 border2"
                onChange={e => {
                    setPassword(e.target.value)
                    console.log(e.target.value)
                }}/>
                <input type="submit" className="send" value="Go" onClick={onClickHandler}/>
                <div className="message"></div>
                <p>Back to Login <a href="/login">click here</a></p>
            </div>
            <style>{`
*{
    margin: 0;
    padding: 0;
    border: 0;
    text-decoration: none;
  outline:none;
}
body,a{
    font-family: calibri;
    font-size: 14px;
    font-weight: normal;
    color: #3B424D;
    
}
.main-wrap{
    background: #FF5335;
    width: 100%;
    height: 100%;
    position: absolute;
}
.login-main{
    width: 300px;
    height: 200px;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background:#fcb1ac;
    padding: 10px;
    border-radius: 10px;
}

.login-main p {
    text-indent:10px;
}

.box1{
    background: lighten(#FF5335, 30%);
    height: 40px;
    text-indent: 10px;
    width: 90%;
    margin-bottom: 2px;
    color: #FF5335;
    font-size: 15px;
    font-weight: 400;
}
.border1{
    border-radius: 5px 5px 0 0;
}
.border2{
    border-radius: 0px 0 5px 5px;
}

.send{

    width:  60px;
    height: 60px;
    border-radius: 50%;
    position: absolute;
    right: 9px;
    top: 20px;
    border: 5px solid lighten(#FF5335, 10%);
    background: #FF5335;
    font-size: 18px;
    color: #fff;
    font-weight: normal;
    text-shadow: 1px 1px 2px #000;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    
}

.send:hover {
    animation: spin 0.3s ease-in-out;
    -webkit-animation: spin 0.3s ease-in-out;
    -moz-animation: spin 0.3s ease-in-out;
    -ms-animation: spin 0.3s ease-in-out;
    -o-animation: spin 0.3s ease-in-out;
    cursor: pointer;
}


@keyframes spin{
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
}
@-webkit-keyframes spin{
    from{
        -webkit-transform: rotate(0deg);
    }
    to{
        -webkit-transform: rotate(360deg);
    }
}
@-moz-keyframes spin{
    from{
        -moz-transform: rotate(0deg);
    }
    to{
        -moz-transform: rotate(360deg);
    }
}
@-o-keyframes spin{
    from{
        -o-transform: rotate(0deg);
    }
    to{
        -o-transform: rotate(360deg);
    }
}


            `}</style>
        </div>
    )
}