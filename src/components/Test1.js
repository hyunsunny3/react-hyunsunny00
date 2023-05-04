import React, { useState } from "react";
import "./Components.css";

function Test1(props) {

    const [inputs, setinputs] = useState({
        userid: "",
        userpw: ""
    })

    const {userid, userpw} = inputs;

    const onDataChange = (e) => {
        const {value, name} = e.target;
        setinputs({
            ...inputs,
            [name]: value
        });
    }

    const onDataReset = () => {
        setinputs({
            userid: "",
            userpw: ""
        })
    }
    
    return (
        <div>
            <div>
                <label>아이디 : </label>
                <input type="text" name="userid" value={userid} onChange={ onDataChange } placeholder="아이디를 입력해주세요"></input>
            </div>
            <div>
                <label>비밀번호 : </label>
                <input type="password" name="userpw" value={userpw} onChange={onDataChange} placeholder="비밀번호를 입력해주세요"></input>
            </div>
            <button onClick={ onDataReset }>reset</button>
            <br></br><br></br>
            <h3>훔쳐보깅!</h3>
            <p>아이딧! : {userid}</p>
            <p>비밀번홋! : {userpw}</p>
        </div>
    );
};

export default Test1;