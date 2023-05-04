import React, { useState } from "react";
import "./Components.css";

const LoginPage = () => {
    
    const [idValue, setId] = useState("");
    const [pwValue, setPw] = useState("");

    return (
      <>
        <div id="wrap">
            로그인 페이지 준비즁임당~❤
            <form>
                <legend>로그인</legend>
                <div>
                    <div>
                        <label>아이디</label>
                        <input id="userId" type="text" value={idValue} onChange={e => setId(e.target.value)}></input>
                    </div>
                    <div>
                        <label>비밀번호</label>
                        <input id="userPw" type="password" value={pwValue} onChange={e => setPw(e.target.value)}></input>
                    </div>
                    <div>
                        <button>로긴ㄱㄱ!</button>
                    </div>
                </div>
            </form>
            <div>
                <p>훔쳐보깅</p>
                <div>
                    <label>아이디는 바로!</label>
                    <input placeholder={idValue}></input>
                </div>
                <div>
                    <label>비밀번호는 바로!</label>
                    <input placeholder={pwValue}></input>
                </div>
            </div>
        </div>
      </>
    );
  };

  export default LoginPage;